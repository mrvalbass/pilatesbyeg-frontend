import eslintReact from '@eslint-react/eslint-plugin'
import { FlatCompat } from '@eslint/eslintrc'
import eslint from '@eslint/js'
import tsparser from '@typescript-eslint/parser'
import nextVitals from 'eslint-config-next/core-web-vitals'
import prettier from 'eslint-config-prettier/flat'
import imports from 'eslint-plugin-import'
import jsxa11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import { dirname } from 'path'
import tseslint from 'typescript-eslint'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
			'*.config.*',
			'**/*.generated.ts',
			'.yarn/**',
		],
	},
	eslint.configs.recommended,
	...tseslint.configs.recommendedTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	eslintReact.configs['recommended-typescript'],
	eslintReact.configs['recommended-type-checked'],
	...nextVitals,
	{
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
	},
	{
		plugins: { jsxa11y, imports, 'react-hooks': reactHooks, react },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/require-await': 'off',
			'@typescript-eslint/no-misused-promises': [
				'error',
				{ checksVoidReturn: { arguments: false, attributes: false } },
			],
			'import/no-unresolved': 'error',
			'import/named': 'error',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal'],
					'newlines-between': 'always',
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'jsx-a11y/click-events-have-key-events': 'off',
			'jsx-a11y/no-noninteractive-element-interactions': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
			'import/parsers': {
				'@typescript-eslint/parser': ['.ts', '.tsx'],
			},
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.json',
				},
				node: true,
			},
		},
	},
	prettier,
]

export default eslintConfig
