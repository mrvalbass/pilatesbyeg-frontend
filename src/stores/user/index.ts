import { create } from 'zustand'

import { type UserStore } from './types'

const defaultUserStore: UserStore = {
	firstName: null,
	lastName: null,
	role: null,
	credits: 0,
}

const useUserStore = create<UserStore>(() => defaultUserStore)

function setUser(user: Partial<UserStore>) {
	useUserStore.setState(state => ({ ...state, ...user }))
}

function clearStore() {
	useUserStore.setState(() => defaultUserStore)
}

export { clearStore, setUser, useUserStore }
