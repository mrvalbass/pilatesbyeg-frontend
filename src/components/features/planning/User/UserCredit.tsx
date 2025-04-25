import useUserStore from '@/stores/user/store'
import { PiCoin } from 'react-icons/pi'

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

export default UserCredit
