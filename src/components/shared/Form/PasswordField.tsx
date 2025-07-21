import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'

import { useFieldContext } from '@/components/libs/tanstack-form/useAppForm'

import { FieldError } from './FieldError'

interface TextFieldProps {
	placeholder: string
	isPasswordVisible: boolean
	onEyeClick: () => void
}

export function PasswordField({ placeholder, isPasswordVisible, onEyeClick }: TextFieldProps) {
	const field = useFieldContext<string>()
	return (
		<div className="flex w-full flex-col items-center">
			<div className="relative w-full">
				<input
					className="input input-accent bg-base-200 w-full"
					type={isPasswordVisible ? 'text' : 'password'}
					placeholder={placeholder}
					value={field.state.value}
					onChange={e => field.handleChange(e.target.value)}
					onBlur={field.handleBlur}
				/>
				<button
					type="button"
					className="text-accent absolute top-1/2 right-4 z-10 -translate-y-1/2"
					onClick={onEyeClick}
				>
					{isPasswordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
				</button>
			</div>
			<FieldError meta={field.state.meta} />
		</div>
	)
}
