import { HTMLInputTypeAttribute } from 'react'

import { useFieldContext } from '@/components/libs/tanstack-form/useAppForm'

import { FieldError } from './FieldError'

interface TextFieldProps {
	placeholder: string
	type?: HTMLInputTypeAttribute
}

export function TextField({ placeholder, type }: TextFieldProps) {
	const field = useFieldContext<string>()
	return (
		<div className="flex w-full flex-col items-center">
			<input
				className="input input-accent bg-base-200 w-full"
				type={type}
				placeholder={placeholder}
				value={field.state.value}
				onChange={e => field.handleChange(e.target.value)}
				onBlur={field.handleBlur}
			/>
			<FieldError meta={field.state.meta} />
		</div>
	)
}
