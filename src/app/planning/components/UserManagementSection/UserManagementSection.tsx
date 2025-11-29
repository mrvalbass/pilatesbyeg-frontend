'use client'

import { useState } from 'react'

import { useUserStore } from '@/stores/user'
import { UserRole } from '@/stores/user/types'

import { CreateUserModal } from './CreateUserModal'
import { UsersTable } from './UsersTable'

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
		<section className="bg-base-200 relative flex min-h-[50svh] flex-col justify-center gap-10 px-5 py-20 md:gap-16 md:px-20">
			<CreateUserModal isOpen={isCreateUserModalOpen} onClose={handleCloseCreateUserModal} />
			<div className="flex flex-col gap-4">
				<h2 className="text-2xl font-bold">Adhérents</h2>
				<UsersTable />
			</div>
			<button
				type="button"
				className="btn btn-wide btn-neutral rounded-box self-center"
				onClick={handleCreateUserClick}
			>
				Ajouter un adhérent
			</button>
		</section>
	)
}
