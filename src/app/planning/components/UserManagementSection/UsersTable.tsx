import { useMutation, useQuery } from '@tanstack/react-query'
import { PiCheckCircle, PiCoin, PiTrash, PiXCircle } from 'react-icons/pi'

import { api } from '@/api/fetcher'
import { Spinner } from '@/components/shared/Spinner'

export function UsersTable() {
	const { data } = useQuery({
		queryKey: ['users'],
		queryFn: async () => api('/users', 'get'),
	})

	const { mutateAsync: sendSignUpEmail } = useMutation({
		mutationKey: ['deleteUser'],
		mutationFn: async (email: string) => api(`/auth/send-sign-up-email`, 'post', { body: { email } }),
	})

	if (!data) {
		return <Spinner className="self-center" />
	}

	async function handleSendSignUpEmail(email: string) {
		await sendSignUpEmail(email)
	}

	return (
		<div className="overflow-x-auto">
			<table className="table-pin-rows rounded-box border-base-content table overflow-hidden border">
				<thead>
					<tr className="text-base-content">
						<td>Prénom</td>
						<td>Nom</td>
						<td>Email</td>
						<td>Solde</td>
						<td>Email vérifié</td>
						<td>Actions</td>
					</tr>
				</thead>
				<tbody>
					{data.users.map(user => (
						<tr key={user.id}>
							<td>{user.firstName}</td>
							<td>{user.lastName}</td>
							<td>{user.email}</td>
							<td>{user.balance}</td>
							<td>
								{user.emailVerified ? (
									<PiCheckCircle className="text-success" size={20} />
								) : (
									<div className="flex items-center gap-2">
										<PiXCircle className="text-error" size={20} />
										<button className="btn btn-sm btn-neutral" onClick={() => handleSendSignUpEmail(user.email)}>
											Renvoyer l&apos;invitation
										</button>
									</div>
								)}
							</td>
							<td className="flex items-center gap-2">
								<button className="btn btn-sm btn-neutral" title="Ajouter des crédits">
									<PiCoin size={20} />
								</button>
								<button className="btn btn-sm btn-error" title="Supprimer l'adhérent">
									<PiTrash size={20} />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}
