interface UserStore {
	firstName: string | null
	lastName: string | null
	role: UserRole | null
	balance: number
	accessToken: string | null
}

enum UserRole {
	ADMIN = 'ADMIN',
	USER = 'USER',
}

export { UserRole }
export type { UserStore }
