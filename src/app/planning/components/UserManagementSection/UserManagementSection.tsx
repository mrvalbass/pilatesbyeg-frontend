'use client'

import { useUserStore } from '@/stores/user'
import { UserRole } from '@/stores/user/types'

export function UserManagementSection() {
	const role = useUserStore(state => state.role)
	if (role !== UserRole.ADMIN) {
		return null
	}
	return (
		<section className="bg-base-200 relative flex min-h-[50svh] flex-col items-center justify-center gap-10 py-20 md:gap-20">
			UserManagementSection
		</section>
	)
}
