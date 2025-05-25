import { PiCoin } from 'react-icons/pi'

import { useUserStore } from '@/stores/user'

const UserCredit = () => {
	const { credits } = useUserStore()

	return (
		<div className="flex items-center gap-1">
			<p className="text-base md:text-lg">
				Crédits : <strong>{credits}</strong>
			</p>
			<PiCoin />
		</div>
	)
}

export { UserCredit }
