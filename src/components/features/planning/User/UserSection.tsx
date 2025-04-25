'use client'
import useUserStore from '@/stores/user/store'
import { UserRole } from '@/stores/user/types'
import UserCredit from './UserCredit'
import UserLogin from './UserLogin'
import UserProfile from './UserProfile'

const UserSection = () => {
	const { role } = useUserStore()

	return (
		<section className="bg-neutral text-neutral-content flex min-h-[10svh] items-center justify-between px-5 md:px-20">
			{role ? <UserProfile /> : <UserLogin />}
			<div className="text-lg">{role === UserRole.USER && <UserCredit />}</div>
		</section>
	)
}

export default UserSection
