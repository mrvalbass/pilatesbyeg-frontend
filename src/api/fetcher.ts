import { getAccessToken, refreshAccessToken } from '@/stores/user'
import { NestHttpError } from '@/types/api/error.type'
import { paths } from '@/types/api/types.generated'

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4100'

export async function api<TPath extends keyof paths, TMethod extends keyof paths[TPath]>(
	path: TPath,
	method: TMethod,
	options?: {
		body?: paths[TPath][TMethod] extends { requestBody: { content: { 'application/json': infer R } } } ? R : unknown
		query?: paths[TPath][TMethod] extends { parameters: { query: infer R } } ? R : unknown
	}
): Promise<
	paths[TPath][TMethod] extends { responses: { default: { content: { 'application/json': infer R } } } } ? R : unknown
> {
	const url = new URL(`${API_URL}${path}`)

	if (options?.query) {
		for (const [key, value] of Object.entries(options.query)) {
			if (value !== undefined && typeof value === 'string') {
				url.searchParams.append(key, value)
			}
		}
	}

	function getRequestOptions(path: string): RequestInit {
		const accessToken = getAccessToken()

		return {
			method: String(method).toUpperCase(),
			credentials: path.includes('auth') ? 'include' : 'same-origin',
			headers: {
				'Content-Type': 'application/json',
				...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
			},
			body: options?.body ? JSON.stringify(options.body) : null,
		}
	}

	let res: Response

	res = await fetch(url, getRequestOptions(path))

	if (res.status === 401) {
		await refreshAccessToken()
		res = await fetch(url, getRequestOptions(path))
	}

	if (!res.ok) {
		const error = (await res.json()) as NestHttpError
		throw new Error(typeof error.message === 'string' ? error.message : error.message.join(', '))
	}

	return res.json() as paths[TPath][TMethod] extends {
		responses: { default: { content: { 'application/json': infer R } } }
	}
		? R
		: unknown
}
