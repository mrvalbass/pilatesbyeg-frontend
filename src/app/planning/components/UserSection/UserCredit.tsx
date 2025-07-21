import { PiCoin } from 'react-icons/pi'

import { useUserStore } from '@/stores/user'

const UserCredit = () => {
	const balance = useUserStore(state => state.balance)

	return (
		<div className="flex items-center gap-1">
			<p className="text-base md:text-lg">
				Crédits : <strong>{balance}</strong>
			</p>
			<PiCoin />
		</div>
	)
}

export { UserCredit }
