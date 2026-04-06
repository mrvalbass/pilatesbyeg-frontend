interface UserStore {
	firstName: string | null
	lastName: string | null
	role: UserRole | null
	balance: number
	accessToken: string | null
	isLoading: boolean
}

enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export type { UserStore }
export { UserRole }
