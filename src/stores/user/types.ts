interface UserStore {
	firstName: string | null
	lastName: string | null
	role: UserRole | null
	credits: number
}

interface UserActions {
	clearStore: () => void
}

enum UserRole {
	ADMIN = 'admin',
	USER = 'user',
}

export { UserRole }
export type { UserActions, UserStore }
