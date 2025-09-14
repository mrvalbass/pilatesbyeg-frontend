'use client'

import { isServer, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { useEffect } from 'react'

import { refreshAccessToken } from '@/stores/user'

function makeQueryClient() {
	return new QueryClient({
		defaultOptions: { queries: { staleTime: 60 * 1000, refetchOnWindowFocus: false } },
	})
}

let browserQueryClient: QueryClient | undefined = undefined

function getQueryClient() {
	if (isServer) {
		return makeQueryClient()
	} else {
		if (!browserQueryClient) {
			browserQueryClient = makeQueryClient()
		}
		return browserQueryClient
	}
}

export function ClientLayout({ children }: { children: React.ReactNode }) {
	const queryClient = getQueryClient()

	useEffect(() => {
		void (async () => {
			try {
				await refreshAccessToken()
			} catch (err) {
				console.error('Failed to refresh auth token:', err)
			}
		})()
	}, [])

	return (
		<>
			<QueryClientProvider client={queryClient}>
				{children}
				<ReactQueryDevtools initialIsOpen={false} />
			</QueryClientProvider>
		</>
	)
}
