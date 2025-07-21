import { create } from 'zustand'

import { NestHttpError } from '@/types/api/error.type'

import type { UserStore } from './types'

const defaultState: UserStore = {
	firstName: null,
	lastName: null,
	role: null,
	balance: 0,
	accessToken: null,
}

const useUserStore = create<UserStore>(() => defaultState)

function getAccessToken() {
	return useUserStore.getState().accessToken
}

function setUser(user: Partial<UserStore>) {
	useUserStore.setState(state => ({ ...state, ...user }))
}

function clearStore() {
	useUserStore.setState(() => defaultState)
}

async function refreshAccessToken() {
	const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3100'

	const refreshRes = await fetch(`${API_URL}/auth/refresh-token`, {
		method: 'POST',
		credentials: 'include',
	})

	if (!refreshRes.ok) {
		clearStore()
		const error = (await refreshRes.json()) as NestHttpError
		throw new Error(typeof error.message === 'string' ? error.message : error.message.join(', '))
	}

	const { accessToken, user } = (await refreshRes.json()) as { accessToken: string; user: Partial<UserStore> }
	useUserStore.setState(state => ({ ...state, accessToken, ...user }))
}

export { clearStore, getAccessToken, refreshAccessToken, setUser, useUserStore }
