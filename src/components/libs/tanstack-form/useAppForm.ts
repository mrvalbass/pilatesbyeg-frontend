import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { FormError, PasswordField, SubmitButton, TextField } from '@/components/shared/form'

export const { fieldContext, useFieldContext, formContext, useFormContext } = createFormHookContexts()

export const { useAppForm } = createFormHook({
	fieldComponents: {
		TextField,
		PasswordField,
	},
	formComponents: {
		SubmitButton,
		FormError,
	},
	fieldContext,
	formContext,
})
