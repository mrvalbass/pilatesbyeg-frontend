interface FormErrorProps {
	error: string
}

export function FormError({ error }: FormErrorProps) {
	return <p className="text-error">{error}</p>
}
