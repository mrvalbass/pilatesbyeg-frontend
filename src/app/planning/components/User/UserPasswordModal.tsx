import { FormEventHandler, useRef } from 'react'

import { Modal } from '@/components/shared'

interface UserPasswordModalProps {
	isOpen: boolean
	handleCloseClick: () => void
}

const UserPasswordModal = ({ isOpen, handleCloseClick }: UserPasswordModalProps) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault()
		handleCloseClick()
		formRef.current?.reset()
	}

	return (
		<Modal isOpen={isOpen} handleCloseClick={handleCloseClick} className="bg-neutral">
			<h1 className="mb-6 text-2xl">Mot de passe oublié</h1>
			<form
				className="bg-base-100 rounded-box text-base-content flex w-full min-w-[300px] flex-col items-center gap-5 p-10 shadow-2xl"
				onSubmit={handleSubmit}
				ref={formRef}
			>
				<div className="flex w-full flex-col items-center">
					<input
						className="input input-accent validator bg-base-200"
						type="email"
						required
						placeholder="jean-jacques@example.com"
					/>
					<div className="validator-hint">Veuillez entrer un email valide</div>
				</div>

				<button className="btn btn-wide btn-accent self-center text-base">Réinitialiser</button>
			</form>
		</Modal>
	)
}

export { UserPasswordModal }
