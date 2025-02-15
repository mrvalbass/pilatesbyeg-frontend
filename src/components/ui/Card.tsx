import { ReactNode } from 'react'

interface CardProps {
	children: ReactNode
	className: string
}

const Card = ({ children, className }: CardProps) => {
	return <div className={`bg-base-100 rounded-box text-base-content p-12 ${className}`}>{children}</div>
}

export default Card
