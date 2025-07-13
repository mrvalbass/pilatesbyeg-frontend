export interface NestHttpError {
	statusCode: number
	message: string | string[]
	error?: string
}
