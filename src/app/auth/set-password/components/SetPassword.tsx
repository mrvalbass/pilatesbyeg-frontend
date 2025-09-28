'use client'

import type { GlobalFormValidationError } from '@tanstack/react-form'
import { useMutation, useQuery } from '@tanstack/react-query'
import { useRouter, useSearchParams } from 'next/navigation'
import { CiWarning } from 'react-icons/ci'
import * as z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Spinner } from '@/components/shared/Spinner'
import { NestHttpError } from '@/types/api/error.type'
import { components } from '@/types/api/types.generated'

const setPasswordSchema = z
	.object({
		password: z.string().superRefine((val, ctx) => {
			const errors: string[] = []
			if (val.length < 8) errors.push('au moins 8 caractères')
			if (!/[a-z]/.test(val)) errors.push('au moins une minuscule')
			if (!/[A-Z]/.test(val)) errors.push('au moins une majuscule')
			if (!/[0-9]/.test(val)) errors.push('au moins un chiffre')
			if (!/[!@#$%^&*()_\-+=[{\]};:'",<.>/?\\|`~]/.test(val)) errors.push('au moins un caractère spécial')

			if (errors.length > 0) {
				ctx.addIssue({
					code: 'custom',
					message: `Le mot de passe doit contenir ${errors.join(', ')}.`,
				})
			}
		}),
		passwordCheck: z.string(),
	})
	.refine(data => data.password === data.passwordCheck, {
		path: ['passwordCheck'],
		message: 'Les mots de passe ne correspondent pas',
	})

type SetPasswordValues = z.infer<typeof setPasswordSchema>

export function SetPassword() {
	const token = useSearchParams().get('token')
	const router = useRouter()

	const { mutateAsync } = useMutation({
		mutationKey: ['resetPassword'],
		mutationFn: async (values: components['schemas']['SetPasswordBody']) =>
			api('/auth/set-password', 'put', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			password: '',
			passwordCheck: '',
		},
		validators: {
			onChangeAsync: setPasswordSchema,
			onChangeAsyncDebounceMs: 200,
		},
		onSubmit: async ({ value, formApi }) => {
			try {
				if (!token) throw new Error('NO_TOKEN_FOUND')
				await mutateAsync({ token, password: value.password })
				router.replace('/planning')
			} catch (error) {
				formApi.setErrorMap({ onSubmit: mapApiErrors(error) })
			}
		},
	})

	const { data, error, isLoading } = useQuery({
		queryKey: ['verifyEmail'],
		queryFn: () => api('/auth/verify-email', 'get', { query: { token: token ?? '' } }),
	})

	if (isLoading) {
		return (
			<div className="bg-base-200 text-error flex min-h-[calc(100vh-232px)] flex-col items-center justify-center gap-2 text-2xl">
				<Spinner />
			</div>
		)
	}

	if (error || !data?.emailVerified) {
		return (
			<div className="bg-base-200 text-error flex min-h-[calc(100vh-232px)] flex-col items-center justify-center gap-8 px-12 text-2xl">
				<CiWarning size={64} />
				<p className="text-center">Nous n&apos;avons pas pu vérifier votre adresse email</p>
				{error && <p>{error.message}</p>}
			</div>
		)
	}

	return (
		<div className="bg-base-200 flex min-h-[calc(100vh-336px)] flex-col items-center justify-center gap-8 md:min-h-[calc(100vh-232px)]">
			<form
				className="bg-base-100 rounded-box text-base-content mt-22 flex w-[350px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={e => {
					e.preventDefault()
					e.stopPropagation()

					void form.handleSubmit()
				}}
			>
				<form.AppField name="password">{field => <field.PasswordField placeholder="Mot de passe" />}</form.AppField>
				<form.AppField name="passwordCheck">
					{field => <field.PasswordField placeholder="Vérification du mot de passe" />}
				</form.AppField>
				<form.AppForm>
					<form.SubmitButton label="Définir mon mot de passe" />
				</form.AppForm>
				<form.Subscribe selector={state => state.errorMap.onSubmit}>
					{onSubmit => (onSubmit ? <form.FormError error={onSubmit} /> : null)}
				</form.Subscribe>
			</form>
		</div>
	)
}

function mapApiErrors(error: unknown): GlobalFormValidationError<SetPasswordValues> {
	const err = error as NestHttpError
	switch (err.message) {
		case 'NO_TOKEN_FOUND':
			return {
				form: "Token d'authentification manquant",
				fields: {},
			}
		case 'ThrottlerException: Too Many Requests':
			return {
				form: "Trop d'essais, réessaie dans 1 min",
				fields: {},
			}

		default:
			return {
				form: `Une erreur est survenue.\n${Array.isArray(err.message) ? err.message.join(', ') : err.message}`,
				fields: {},
			}
	}
}
