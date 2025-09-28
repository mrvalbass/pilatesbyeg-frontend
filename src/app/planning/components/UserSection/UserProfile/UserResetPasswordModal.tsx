import type { GlobalFormValidationError } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Modal } from '@/components/shared'
import { useUserStore } from '@/stores/user'
import { NestHttpError } from '@/types/api/error.type'
import { components } from '@/types/api/types.generated'

interface UserResetPasswordModalProps {
	isOpen: boolean
	onClose: () => void
}

const resetPasswordSchema = z
	.object({
		oldPassword: z.string(),
		newPassword: z.string().superRefine((val, ctx) => {
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
		newPasswordCheck: z.string(),
	})
	.refine(data => data.newPassword === data.newPasswordCheck, {
		path: ['newPasswordCheck'],
		message: 'Les mots de passe ne correspondent pas',
	})

type ResetPasswordValues = z.infer<typeof resetPasswordSchema>

export function UserResetPasswordModal({ isOpen, onClose }: UserResetPasswordModalProps) {
	const { mutateAsync: resetPassword } = useMutation({
		mutationKey: ['resetPassword'],
		mutationFn: async (values: components['schemas']['ResetPasswordBody']) =>
			api('/auth/reset-password', 'put', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			oldPassword: '',
			newPassword: '',
			newPasswordCheck: '',
		},
		validators: {
			onChangeAsync: resetPasswordSchema,
			onChangeAsyncDebounceMs: 200,
		},
		onSubmit: async ({ value, formApi }) => {
			try {
				const { oldPassword, newPassword } = value
				const { accessToken } = await resetPassword({ oldPassword, newPassword })
				useUserStore.setState(state => ({ ...state, accessToken }))
				handleClose()
			} catch (error) {
				formApi.setErrorMap({ onSubmit: mapApiErrors(error) })
			}
		},
	})

	function handleClose() {
		onClose()
		form.reset()
	}

	return (
		<Modal isOpen={isOpen} onClose={handleClose} className="bg-neutral">
			<h1 className="mb-6 text-2xl">Changer son mot de passe</h1>
			<form
				className="bg-base-100 rounded-box text-base-content flex w-full min-w-[300px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={e => {
					e.preventDefault()
					e.stopPropagation()

					void form.handleSubmit()
				}}
			>
				<form.AppField name="oldPassword">
					{field => <field.PasswordField placeholder="Ancien Mot de passe" />}
				</form.AppField>
				<form.AppField name="newPassword">{field => <field.PasswordField placeholder="Mot de passe" />}</form.AppField>{' '}
				<form.AppField name="newPasswordCheck">
					{field => <field.PasswordField placeholder="Mot de passe" />}
				</form.AppField>
				<form.AppForm>
					<form.SubmitButton label="Envoyer" />
				</form.AppForm>
				<form.Subscribe selector={state => state.errorMap.onSubmit}>
					{onSubmit => (onSubmit ? <form.FormError error={onSubmit} /> : null)}
				</form.Subscribe>
			</form>
		</Modal>
	)
}

function mapApiErrors(error: unknown): GlobalFormValidationError<ResetPasswordValues> {
	const err = error as NestHttpError
	switch (err.message) {
		case 'INVALID_CREDENTIALS':
			return {
				form: "L'ancien mot de passe est incorrect",
				fields: {},
			}
		default:
			return {
				form: 'Une erreur est survenue. Veuillez réessayer.',
				fields: {},
			}
	}
}
