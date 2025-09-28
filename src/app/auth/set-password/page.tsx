import { Suspense } from 'react'

import { SetPassword } from './components/SetPassword'

export default function VerifyEmail() {
	return (
		<Suspense>
			<SetPassword />
		</Suspense>
	)
}
