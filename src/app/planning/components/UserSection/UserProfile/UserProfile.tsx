import { useMutation } from '@tanstack/react-query'
import { clsx } from 'clsx'
import { CSSProperties, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

import { api } from '@/api/fetcher'
import { clearStore, useUserStore } from '@/stores/user'

import { UserResetPasswordModal } from './UserResetPasswordModal'
// Comments are the implementation of the css position anchoring
// which is not currently supported in all major browsers

export function UserProfile() {
	const firstName = useUserStore(state => state.firstName)
	const [menuIsOpen, setMenuIsOpen] = useState(false)
	const [userResetPasswordModalIsOpen, setUserResetPasswordModalIsOpen] = useState(false)

	const { mutateAsync: signOut } = useMutation({
		mutationKey: ['signOut'],
		mutationFn: async () => api('/auth/sign-out', 'get'),
	})

	const handleToggle = () => {
		setMenuIsOpen(prev => !prev)
	}

	const handleMenuElementClick = () => {
		setMenuIsOpen(false)
		// userMenuPopoverRef.current?.hidePopover()
	}

	async function handleLogoutClick() {
		await signOut()
		clearStore()
		handleMenuElementClick()
	}

	function handleResetPasswordClick() {
		setUserResetPasswordModalIsOpen(true)
	}

	function handleResetPasswordClose() {
		setUserResetPasswordModalIsOpen(false)
	}

	const chevronClasses = clsx('cursor-pointer duration-200', !menuIsOpen && '-rotate-x-180')
	const menuClasses = clsx(
		'dropdown menu bg-accent rounded-box absolute z-30 flex flex-col p-2 text-base shadow-2xl top-[150%] -ml-2 transition-opacity duration-200',
		!menuIsOpen && 'opacity-0 -z-30'
	)
	const menuElementClasses = clsx(
		'hover:bg-neutral/50 rounded-box p-2 whitespace-nowrap text-sm md:text-base',
		!menuIsOpen && 'pointer-events-none cursor-default',
		menuIsOpen && 'cursor-pointer'
	)

	return (
		<>
			<UserResetPasswordModal isOpen={userResetPasswordModalIsOpen} onClose={handleResetPasswordClose} />
			<div className="relative flex items-center gap-2">
				<p className="md:text-lg" style={{ anchorName: '--userMenu' } as CSSProperties}>
					Bonjour <strong className="font-heading">{firstName}</strong>
				</p>
				<button
					type="button"
					// popoverTarget="userMenu-popover"
				>
					<FaChevronDown className={chevronClasses} size={12} onClick={handleToggle} />
				</button>
				<ul
					className={menuClasses}
					id="userMenu-popover"
					onToggle={handleToggle}
					// ref={userMenuPopoverRef}
					// popover="auto"
					// style={{ positionAnchor: '--userMenu' } as CSSProperties}
				>
					<li className={menuElementClasses} onClick={handleResetPasswordClick}>
						Changer son mot de passe
					</li>
					<li className={menuElementClasses} onClick={handleLogoutClick}>
						Se déconnecter
					</li>
				</ul>
			</div>
		</>
	)
}
