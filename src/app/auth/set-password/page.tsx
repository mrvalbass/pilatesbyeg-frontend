'use client'

import { useQuery } from '@tanstack/react-query'
import { useSearchParams } from 'next/navigation'
import { CiWarning } from 'react-icons/ci'

import { api } from '@/api/fetcher'
import { Spinner } from '@/components/shared/Spinner'

import { SetPassword } from './components/SetPassword'

export default function VerifyEmail() {
	const token = useSearchParams().get('token')

	const { data, error, isLoading } = useQuery({
		queryKey: ['verifyEmail'],
		queryFn: () => api('/auth/verify-email', 'get', { query: { token: token ?? '' } }),
	})

	if (isLoading) {
		return (
			<div className="bg-base-200 text-error flex min-h-[calc(100vh-232px)] flex-col items-center justify-center gap-2 text-2xl">
				<Spinner />
			</div>
		)
	}

	if (error || !data?.emailVerified) {
		return (
			<div className="bg-base-200 text-error flex min-h-[calc(100vh-232px)] flex-col items-center justify-center gap-8 px-12 text-2xl">
				<CiWarning size={64} />
				<p className="text-center">Nous n&apos;avons pas pu vérifier votre adresse email</p>
				{error && <p>{error.message}</p>}
			</div>
		)
	}

	return <SetPassword />
}
