import type { GlobalFormValidationError } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Modal } from '@/components/shared'
import { NestHttpError } from '@/types/api/error.type'
import { components } from '@/types/api/types.generated'

interface CreateUserModalProps {
	isOpen: boolean
	onClose: () => void
}

const createUserSchema = z.object({
	firstName: z.string(),
	lastName: z.string(),
	email: z.email({ error: 'Email invalide' }),
})

type CreateUserValues = z.infer<typeof createUserSchema>

export function CreateUserModal({ isOpen, onClose }: CreateUserModalProps) {
	const { mutateAsync: signUp } = useMutation({
		mutationKey: ['signUp'],
		mutationFn: async (values: components['schemas']['SignUpBody']) => api('/auth/sign-up', 'post', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			firstName: '',
			lastName: '',
			email: '',
		},
		validators: {
			onChangeAsync: createUserSchema,
			onChangeAsyncDebounceMs: 200,
		},
		onSubmit: async ({ value, formApi }) => {
			try {
				await signUp(value)
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
		<Modal isOpen={isOpen} onClose={handleClose} className="bg-neutral text-neutral-content">
			<h1 className="mb-6 text-2xl">Créer un utilisateur</h1>
			<form
				className="bg-base-100 rounded-box text-base-content flex w-full min-w-[300px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={e => {
					e.preventDefault()
					e.stopPropagation()
					void form.handleSubmit()
				}}
			>
				<form.AppField name="firstName">{field => <field.TextField placeholder="Prénom" type="text" />}</form.AppField>
				<form.AppField name="lastName">{field => <field.TextField placeholder="Nom" type="text" />}</form.AppField>
				<form.AppField name="email">{field => <field.TextField placeholder="Email" type="email" />}</form.AppField>
				<form.AppForm>
					<form.SubmitButton label="Créer" />
				</form.AppForm>
				<form.Subscribe selector={state => state.errorMap.onSubmit}>
					{onSubmit => (onSubmit ? <form.FormError error={onSubmit} /> : null)}
				</form.Subscribe>
			</form>
		</Modal>
	)
}

function mapApiErrors(error: unknown): GlobalFormValidationError<CreateUserValues> {
	const err = error as NestHttpError
	switch (err.message) {
		case 'USER_ALREADY_EXISTS':
			return {
				form: "L'email est déjà associé à un compte",
				fields: {},
			}
		default:
			return {
				form: 'Une erreur est survenue. Veuillez réessayer.',
				fields: {},
			}
	}
}
