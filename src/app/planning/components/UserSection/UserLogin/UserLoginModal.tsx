import { GlobalFormValidationError } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import * as z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Modal } from '@/components/shared'
import { setUser } from '@/stores/user'
import { UserRole } from '@/stores/user/types'
import { NestHttpError } from '@/types/api/error.type'
import { components } from '@/types/api/types.generated'

interface UserLoginModalProps {
	isOpen: boolean
	onClose: () => void
}

const loginSchema = z.object({
	email: z.email({ error: 'Email invalide' }),
	password: z.string(),
})

type LoginValues = z.infer<typeof loginSchema>

export function UserLoginModal({ isOpen, onClose }: UserLoginModalProps) {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false)

	const { mutateAsync } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: async (values: components['schemas']['SignInBody']) => api('/auth/sign-in', 'post', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			email: '',
			password: '',
		},
		validators: {
			onChangeAsync: loginSchema,
			onChangeAsyncDebounceMs: 200,
		},
		onSubmit: async ({ value, formApi }) => {
			try {
				const data = await mutateAsync(value)
				setUser({
					firstName: data.user.firstName,
					role: data.user.role as UserRole,
					balance: data.user.balance,
				})
				handleClose()
			} catch (error) {
				formApi.setErrorMap({ onSubmit: mapApiErrors(error) })
			}
		},
	})

	function handleClose() {
		onClose()
		form.reset()
		setIsPasswordVisible(false)
	}

	function handleEyeClick() {
		setIsPasswordVisible(prev => !prev)
	}

	return (
		<Modal isOpen={isOpen} onClose={handleClose} className="bg-neutral">
			<h1 className="mb-6 text-2xl">Connexion</h1>
			<form
				className="bg-base-100 rounded-box text-base-content flex w-full min-w-[300px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={e => {
					e.preventDefault()
					e.stopPropagation()

					void form.handleSubmit()
				}}
			>
				<form.AppField name="email">{field => <field.TextField placeholder="Email" type="email" />}</form.AppField>
				<form.AppField name="password">
					{field => (
						<field.PasswordField
							placeholder="Mot de passe"
							isPasswordVisible={isPasswordVisible}
							onEyeClick={handleEyeClick}
						/>
					)}
				</form.AppField>
				<form.AppForm>
					<form.SubmitButton label="Se connecter" />
				</form.AppForm>
				<form.Subscribe selector={state => state.errorMap.onSubmit}>
					{onSubmit => (onSubmit ? <form.FormError error={onSubmit} /> : null)}
				</form.Subscribe>
			</form>
		</Modal>
	)
}

function mapApiErrors(error: unknown): GlobalFormValidationError<LoginValues> {
	const err = error as NestHttpError
	switch (err.message) {
		case 'USER_NOT_FOUND':
		case 'INVALID_CREDENTIALS':
			return {
				form: "L'email et/ou le mot de passe sont incorrect(s)",
				fields: {},
			}

		case 'EMAIL_NOT_VERIFIED':
			return {
				form: 'Votre adresse email n’a pas encore été vérifiée.',
				fields: {},
			}
		default:
			return {
				form: 'Une erreur est survenue. Veuillez réessayer.',
				fields: {},
			}
	}
}
