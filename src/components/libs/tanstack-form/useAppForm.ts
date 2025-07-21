import { createFormHook, createFormHookContexts } from '@tanstack/react-form'

import { FormError } from '@/components/shared/form/FormError'
import { PasswordField } from '@/components/shared/form/PasswordField'
import { SubmitButton } from '@/components/shared/form/SubmitButton'
import { TextField } from '@/components/shared/form/TextField'

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
