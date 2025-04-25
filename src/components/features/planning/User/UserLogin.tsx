import { useState } from 'react'
import UserLoginModal from './UserLoginModal'
import UserPasswordModal from './UserPasswordModal'

const UserLogin = () => {
	const [userLoginModalIsOpen, setUserLoginModalIsOpen] = useState(false)

	const handleUserLoginClick = () => {
		setUserLoginModalIsOpen(true)
	}

	const handleUserLoginCloseClick = () => {
		setUserLoginModalIsOpen(false)
	}

	const [userPasswordModalIsOpen, setUserPasswordModalIsOpen] = useState(false)

	const handleUserPasswordClick = () => {
		setUserPasswordModalIsOpen(true)
	}

	const handleUserPasswordCloseClick = () => {
		setUserPasswordModalIsOpen(false)
	}

	return (
		<>
			<UserLoginModal isOpen={userLoginModalIsOpen} handleCloseClick={handleUserLoginCloseClick} />
			<UserPasswordModal isOpen={userPasswordModalIsOpen} handleCloseClick={handleUserPasswordCloseClick} />
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

export default UserLogin
