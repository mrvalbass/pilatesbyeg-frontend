import path from 'path'
import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: [],
		include: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[tj]s?(x)'],
		exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
		bail: 1,
		clearMocks: true,
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json'],
			include: ['src/**/*.{js,jsx,ts,tsx}'],
			exclude: [
				'node_modules/',
				'tests/coverage',
				'**/*.test.{js,jsx,ts,tsx}',
				'**/*.spec.{js,jsx,ts,tsx}',
				'**/types/',
				'**/constants/',
				'**/*.d.ts',
			],
			thresholds: {
				lines: 70,
				functions: 70,
				branches: 70,
				statements: 70,
			},
		},
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src'),
			'@components': path.resolve(__dirname, './src/components'),
			'@pages': path.resolve(__dirname, './src/pages'),
			'@utils': path.resolve(__dirname, './src/utils'),
			'@hooks': path.resolve(__dirname, './src/hooks'),
			'@styles': path.resolve(__dirname, './src/styles'),
			'@types': path.resolve(__dirname, './src/types'),
			'@constants': path.resolve(__dirname, './src/constants'),
			'@store': path.resolve(__dirname, './src/store'),
		},
	},
})
