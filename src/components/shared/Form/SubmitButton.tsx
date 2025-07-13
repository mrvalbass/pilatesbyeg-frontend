import { useStore } from '@tanstack/react-form'

import { useFormContext } from '@/components/libs/tanstack-form/useAppForm'

import { Spinner } from '../Spinner'

interface SubmitButtonProps {
	label: string
}

export function SubmitButton({ label }: SubmitButtonProps) {
	const form = useFormContext()

	const [isSubmitting, canSubmit] = useStore(form.store, state => [state.isSubmitting, state.canSubmit])
	return (
		<button className="btn btn-wide btn-accent self-center text-base" disabled={isSubmitting || !canSubmit}>
			{isSubmitting ? <Spinner /> : label}
		</button>
	)
}
