'use client'

import { useState } from 'react'

import { useUserStore } from '@/stores/user'
import { UserRole } from '@/stores/user/types'

import { CreateUserModal } from './CreateUserModal'

export function UserManagementSection() {
	const role = useUserStore(state => state.role)
	const [isCreateUserModalOpen, setIsCreateUserModalOpen] = useState(false)

	if (role !== UserRole.ADMIN) {
		return null
	}

	function handleCreateUserClick() {
		setIsCreateUserModalOpen(true)
	}

	function handleCloseCreateUserModal() {
		setIsCreateUserModalOpen(false)
	}

	return (
		<section className="bg-base-200 relative flex min-h-[50svh] flex-col items-center justify-center gap-10 py-20 md:gap-20">
			<CreateUserModal isOpen={isCreateUserModalOpen} onClose={handleCloseCreateUserModal} />
			<button
				type="button"
				className="btn btn-wide btn-neutral rounded-box self-center"
				onClick={handleCreateUserClick}
			>
				Ajouter un utilisateur
			</button>
		</section>
	)
}
