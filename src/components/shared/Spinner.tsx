export function Spinner({ className }: { className?: string }) {
	return (
		<div className={`border-accent h-8 w-8 animate-spin rounded-full border-4 border-t-transparent ${className}`} />
	)
}
