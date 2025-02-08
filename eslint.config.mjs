import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { FlatCompat } from '@eslint/eslintrc'
import prettierPlungin from 'eslint-plugin-prettier'
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y'
import importPlugin from 'eslint-plugin-import'
import tsESLintParser from '@typescript-eslint/parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: {},
})

const eslintConfig = [
	...compat.extends(
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
		'next/core-web-vitals',
		'next/typescript',
		'plugin:jsx-a11y/recommended',
		'plugin:import/recommended',
		'plugin:import/typescript',
		'prettier'
	),
	{
		languageOptions: {
			parser: tsESLintParser,
			parserOptions: {
				project: './tsconfig.json',
			},
		},
		plugins: { prettier: prettierPlungin, 'jsx-a11y': jsxA11yPlugin, import: importPlugin },
		rules: {
			'react/react-in-jsx-scope': 'off',
			'react/prop-types': 'off',
			'react-hooks/rules-of-hooks': 'error',
			'react-hooks/exhaustive-deps': 'warn',
			'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'import/order': [
				'error',
				{
					groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
					alphabetize: { order: 'asc', caseInsensitive: true },
				},
			],
			'import/no-unresolved': 'error',
			'import/named': 'error',
			'no-console': ['warn', { allow: ['warn', 'error'] }],
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
