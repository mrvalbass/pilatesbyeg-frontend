import { create } from 'zustand'

import { UserActions, UserRole, type UserStore } from './types'

const defaultUserStore: UserStore = {
	firstName: null,
	lastName: null,
	role: null,
	credits: 0,
}

const useUserStore = create<UserStore & UserActions>(set => ({
	...defaultUserStore,
	firstName: 'Jean-Jacques',
	lastName: null,
	role: UserRole.USER,
	credits: 5,
	clearStore: () => set(defaultUserStore),
}))

export { useUserStore }
