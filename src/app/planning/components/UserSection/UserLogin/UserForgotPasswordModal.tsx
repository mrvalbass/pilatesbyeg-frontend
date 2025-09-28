import type { GlobalFormValidationError } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Modal } from '@/components/shared'
import { NestHttpError } from '@/types/api/error.type'
import { components } from '@/types/api/types.generated'

interface UserPasswordModalProps {
	isOpen: boolean
	onClose: () => void
}

const forgotPasswordSchema = z.object({
	email: z.email({ error: 'Email invalide' }),
})

type ForgotPasswordValues = z.infer<typeof forgotPasswordSchema>

export function UserForgotPasswordModal({ isOpen, onClose }: UserPasswordModalProps) {
	const { mutateAsync: sendForgotPasswordEmail } = useMutation({
		mutationKey: ['sendForgotPasswordEmail'],
		mutationFn: async (values: components['schemas']['SendForgotPasswordEmailBody']) =>
			api('/auth/send-forgot-password-email', 'post', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			email: '',
		},
		validators: {
			onChangeAsync: forgotPasswordSchema,
			onChangeAsyncDebounceMs: 200,
		},
		onSubmit: async ({ value, formApi }) => {
			try {
				await sendForgotPasswordEmail(value)
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
		<Modal isOpen={isOpen} onClose={onClose} className="bg-neutral">
			<h1 className="mb-6 text-2xl">Mot de passe oublié</h1>
			<form
				className="bg-base-100 rounded-box text-base-content flex w-full min-w-[300px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={e => {
					e.preventDefault()
					e.stopPropagation()
					void form.handleSubmit()
				}}
			>
				<form.AppField name="email">{field => <field.TextField placeholder="Email" type="email" />}</form.AppField>
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

function mapApiErrors(error: unknown): GlobalFormValidationError<ForgotPasswordValues> {
	const err = error as NestHttpError
	switch (err.message) {
		case 'USER_NOT_FOUND':
			return {
				form: "Cette adresse email n'est liée à aucun compte",
				fields: {},
			}
		case 'ThrottlerException: Too Many Requests':
			return {
				form: "Trop d'essais, réessaie dans 1 min",
				fields: {},
			}
		default:
			return {
				form: 'Une erreur est survenue. Veuillez réessayer.',
				fields: {},
			}
	}
}
