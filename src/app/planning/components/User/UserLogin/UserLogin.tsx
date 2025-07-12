import { useState } from 'react'

import { UserPasswordModal } from '../UserPasswordModal'
import { UserLoginModal } from './UserLoginModal'

const UserLogin = () => {
	const [userLoginModalIsOpen, setUserLoginModalIsOpen] = useState(false)

	const handleUserLoginClick = () => {
		setUserLoginModalIsOpen(true)
	}

	const handleUserLoginClose = () => {
		setUserLoginModalIsOpen(false)
	}

	const [userPasswordModalIsOpen, setUserPasswordModalIsOpen] = useState(false)

	const handleUserPasswordClick = () => {
		setUserPasswordModalIsOpen(true)
	}

	const handleUserPasswordClose = () => {
		setUserPasswordModalIsOpen(false)
	}

	return (
		<>
			<UserLoginModal isOpen={userLoginModalIsOpen} onClose={handleUserLoginClose} />
			<UserPasswordModal isOpen={userPasswordModalIsOpen} onClose={handleUserPasswordClose} />
			<div className="flex gap-4">
				<button className="btn text-base" onClick={handleUserLoginClick}>
					Se connecter
				</button>
				<button
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
