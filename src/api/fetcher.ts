import { paths } from '@/types/api/types.generated'

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3100'

export async function api<TPath extends keyof paths, TMethod extends keyof paths[TPath]>(
	path: TPath,
	method: TMethod,
	options?: {
		body?: paths[TPath][TMethod] extends { requestBody: { content: { 'application/json': infer R } } } ? R : unknown
		token?: string
	}
): Promise<
	paths[TPath][TMethod] extends { responses: { 200: { content: { 'application/json': infer R } } } } ? R : unknown
> {
	const res = await fetch(`${API_URL}${path}`, {
		method: String(method).toUpperCase(),
		headers: {
			'Content-Type': 'application/json',
			...(options?.token && { Authorization: `Bearer ${options.token}` }),
		},
		body: options?.body ? JSON.stringify(options.body) : null,
		credentials: 'include',
	})

	if (!res.ok) {
		throw new Error('API Error: ' + res.statusText)
	}

	return res.json() as paths[TPath][TMethod] extends {
		responses: { 200: { content: { 'application/json': infer R } } }
	}
		? R
		: unknown
}
