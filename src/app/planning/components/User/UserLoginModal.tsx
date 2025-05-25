import { FormEventHandler, useRef } from 'react'

import { Modal } from '@/components/shared'

interface UserLoginModalProps {
	isOpen: boolean
	handleCloseClick: () => void
}

const UserLoginModal = ({ isOpen, handleCloseClick }: UserLoginModalProps) => {
	const formRef = useRef<HTMLFormElement | null>(null)
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault()
		handleCloseClick()
		formRef.current?.reset()
	}

	return (
		<Modal isOpen={isOpen} handleCloseClick={handleCloseClick} className="bg-neutral">
			<h1 className="mb-6 text-2xl">Connexion</h1>
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
				<div className="flex w-full flex-col items-center">
					<input
						className="input input-accent validator bg-base-200"
						type="password"
						required
						placeholder="Mot de passe"
					/>
					<div className="validator-hint">Veuillez entrer un mot de passe</div>
				</div>
				<button className="btn btn-wide btn-accent self-center text-base">Se connecter</button>
			</form>
		</Modal>
	)
}

export { UserLoginModal }
