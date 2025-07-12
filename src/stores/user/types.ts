interface UserStore {
	firstName: string | null
	lastName: string | null
	role: UserRole | null
	credits: number
}

enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

export { UserRole }
export type { UserStore }
