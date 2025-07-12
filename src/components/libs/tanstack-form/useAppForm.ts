import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { SubmitButton } from '@/components/shared/Form/SubmitButton'
import { TextField } from '@/components/shared/Form/TextField'

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
	},
	formComponents: {
		SubmitButton,
	},
	fieldContext,
	formContext,
})
