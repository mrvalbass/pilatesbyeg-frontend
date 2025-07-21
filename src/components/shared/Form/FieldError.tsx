import { AnyFieldMeta } from '@tanstack/react-form'
import { ZodError } from 'zod'

interface FieldErrorProps {
	meta: AnyFieldMeta
}

export function FieldError({ meta }: FieldErrorProps) {
	if (!meta.isTouched) return

	return meta.errors.map((error: ZodError | string, index) => {
		return (
			<p key={index} className="text-error">
				{typeof error === 'string' ? error : error.message}
			</p>
		)
	})
}
