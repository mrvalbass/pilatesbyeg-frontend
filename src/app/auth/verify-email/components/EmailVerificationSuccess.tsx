import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CiCircleCheck } from 'react-icons/ci'

function EmailVerificationSuccess() {
	const router = useRouter()
	const [countdown, setCountdown] = useState(5)

	useEffect(() => {
		if (countdown === 0) {
			router.push('/planning')
			return
		}

		const timer = setTimeout(() => {
			setCountdown(c => c - 1)
		}, 1000)

		return () => clearTimeout(timer)
	}, [countdown, router])

	return (
		<div className="bg-base-200 text-success flex min-h-[calc(100vh-232px)] flex-col items-center justify-center gap-8 text-2xl">
			<CiCircleCheck size={64} />
			<p>Votre adresse email a bien été vérifiée</p>
			<p>{`Vous allez être redirigé dans ${2}s`}</p>
		</div>
	)
}

export default EmailVerificationSuccess
