import { useState } from 'react'

import { UserForgotPasswordModal } from './UserForgotPasswordModal'
import { UserLoginModal } from './UserLoginModal'

const UserLogin = () => {
	const [userLoginModalIsOpen, setUserLoginModalIsOpen] = useState(false)

	const handleUserLoginClick = () => {
		setUserLoginModalIsOpen(true)
	}

	const handleUserLoginClose = () => {
		setUserLoginModalIsOpen(false)
	}

	const [userForgotPasswordModalIsOpen, setUserPasswordModalIsOpen] = useState(false)

	const handleUserPasswordClick = () => {
		setUserPasswordModalIsOpen(true)
	}

	const handleUserPasswordClose = () => {
		setUserPasswordModalIsOpen(false)
	}

	return (
		<>
			<UserLoginModal isOpen={userLoginModalIsOpen} onClose={handleUserLoginClose} />
			<UserForgotPasswordModal isOpen={userForgotPasswordModalIsOpen} onClose={handleUserPasswordClose} />
			<div className="flex gap-4">
				<button type="button" className="btn rounded-box text-base" onClick={handleUserLoginClick}>
					Se connecter
				</button>
				<button
					type="button"
					className="btn-ghost text-neutral-content/60 cursor-pointer text-sm underline"
					onClick={handleUserPasswordClick}
				>
					Mot de passe oublié
				</button>
			</div>
		</>
	)
}

export { UserLogin }
