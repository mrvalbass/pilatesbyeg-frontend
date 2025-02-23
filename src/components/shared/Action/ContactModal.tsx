import { FormEventHandler } from 'react'
import Modal from '../Modal'

interface ContactModalProps {
	isOpen: boolean
	handleCloseClick: () => void
}

const ContactModal = ({ isOpen, handleCloseClick }: ContactModalProps) => {
	const handleSubmit: FormEventHandler = e => {
		e.preventDefault()
	}
	return (
		<Modal isOpen={isOpen} handleCloseClick={handleCloseClick}>
			<h1 className="mb-6 text-2xl">Formulaire de contact</h1>
			<form
				className="bg-neutral rounded-box flex w-full min-w-[300px] flex-col gap-5 p-10 shadow-2xl"
				onSubmit={handleSubmit}
			>
				<div>
					<input className="input input-accent validator bg-base-200" type="text" required placeholder="Jean Jacques" />
					<div className="validator-hint">Veuillez entrer un nom valide</div>
				</div>
				<div>
					<input
						className="input input-accent validator bg-base-200"
						type="email"
						required
						placeholder="jean-jacques@example.com"
					/>
					<div className="validator-hint">Veuillez entrer une adresse email valide</div>
				</div>
				<textarea className="textarea input-accent bg-base-200 mb-5 w-full" placeholder="Votre question"></textarea>
				<button className="btn btn-wide btn-accent self-center">Envoyer</button>
			</form>
		</Modal>
	)
}

export default ContactModal
