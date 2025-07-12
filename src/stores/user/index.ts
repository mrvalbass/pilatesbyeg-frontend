import { create } from 'zustand'

import { type UserStore } from './types'

const defaultUserStore: UserStore = {
	firstName: null,
	lastName: null,
	role: null,
	credits: 0,
}

const useUserStore = create<UserStore>(() => defaultUserStore)

function clearStore() {
	useUserStore.setState(() => defaultUserStore)
}

export { clearStore, useUserStore }
