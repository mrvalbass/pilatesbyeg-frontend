import type { Config } from 'jest'
import nextJest from 'next/jest'

const createJestConfig = nextJest({
	dir: './',
})

const config: Config = {
	bail: 1,
	clearMocks: true,
	testEnvironment: 'jest-environment-jsdom',
	testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@pages/(.*)$': '<rootDir>/src/pages/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
		'@hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'@styles/(.*)$': '<rootDir>/src/styles/$1',
		'@types/(.*)$': '<rootDir>/src/types/$1',
		'@constants/(.*)$': '<rootDir>/src/constants/$1',
	},
	transform: { '^.+\\.(t|j)sx?$': '@swc/jest' },

	//Coverage
	coverageProvider: 'v8',
	coverageDirectory: '<rootDir>/src/tests/coverage',
	collectCoverageFrom: ['src/**/*.{js,jsx,ts,tsx}', '!src/**/*.test.{js,jsx,ts,tsx}'],
	coveragePathIgnorePatterns: ['/node_modules/', '/.next/', '/__tests__/', '/types/', '/constants/', '\\.d\\.ts$'],
	coverageThreshold: {
		global: {
			branches: 70,
			functions: 70,
			lines: 70,
			statements: 70,
		},
	},
	coverageReporters: ['text', 'json'],
}

export default createJestConfig(config)
