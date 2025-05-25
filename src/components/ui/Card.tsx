'use client'
import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className?: string
	onClick?: (() => void) | undefined
}

const Card = ({ children, className, onClick }: CardProps) => {
	const handleClick = () => {
		onClick?.()
	}

	return (
		<div
			tabIndex={0}
			role="button"
			className={`bg-base-100 rounded-box text-base-content md:p-8 ${className}`}
			onClick={handleClick}
		>
			{children}
		</div>
	)
}

export { Card }
