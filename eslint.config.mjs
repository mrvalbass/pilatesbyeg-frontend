import { FlatCompat } from '@eslint/eslintrc'
import tsparser from '@typescript-eslint/parser'
import imports from 'eslint-plugin-import'
import jsxa11y from 'eslint-plugin-jsx-a11y'
import prettier from 'eslint-plugin-prettier'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: {},
})

const eslintConfig = [
	...compat.config({
		extends: [
			'eslint:recommended',
			'plugin:react/recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:@typescript-eslint/recommended-requiring-type-checking',
			'next/core-web-vitals',
			'next/typescript',
			'plugin:jsx-a11y/recommended',
			'plugin:import/recommended',
			'plugin:import/typescript',
			'prettier',
		],
	}),
	{
		ignores: ['*.config.mjs'],
		languageOptions: {
			parser: tsparser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: { prettier, jsxa11y, imports },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/require-await': 'off',
			'import/no-unresolved': 'error',
			'import/named': 'error',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
			'jsx-a11y/click-events-have-key-events': 'off',
			'prettier/prettier': 'warn',
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
]

export default eslintConfig
