import { useMutation } from '@tanstack/react-query'
import * as z from 'zod'

import { api } from '@/api/fetcher'
import { useAppForm } from '@/components/libs/tanstack-form/useAppForm'
import { Modal } from '@/components/shared'
import { components } from '@/types/api/types.generated'

interface UserLoginModalProps {
	isOpen: boolean
	onClose: () => void
}

const loginSchema = z.object({
	email: z.email({ error: 'Email invalide' }),
	password: z.string(),
})

const UserLoginModal = ({ isOpen, onClose }: UserLoginModalProps) => {
	const { mutateAsync } = useMutation({
		mutationKey: ['signIn'],
		mutationFn: async (values: components['schemas']['SignInBody']) => api('/auth/sign-in', 'post', { body: values }),
	})

	const form = useAppForm({
		defaultValues: {
			email: '',
			password: '',
		},
		onSubmit: async ({ value }) => {
			try {
				const data = await mutateAsync(value)
				console.log(data)

				onClose()
			} catch (error) {
				console.error(error)
			}
		},
		validators: {
			onChangeAsync: loginSchema,
			onChangeAsyncDebounceMs: 200,
		},
	})

	return (
		<Modal isOpen={isOpen} onClose={onClose} className="bg-neutral">
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
					{field => <field.TextField placeholder="Mot de passe" type="password" />}
				</form.AppField>
				<form.AppForm>
					<form.SubmitButton label="Se connecter" />
				</form.AppForm>
			</form>
		</Modal>
	)
}

export { UserLoginModal }
