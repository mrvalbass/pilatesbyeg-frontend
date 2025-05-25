import { FaStar } from 'react-icons/fa'

import { Card } from '@/components/ui'

interface ReviewCardProps {
	review: string
	reviewer: string
	score: number
}

function ReviewCard({ review, reviewer, score }: ReviewCardProps) {
	const BACKGROUNDS = [
		'bg-[#FFD1DC]',
		'bg-[#B5EAD7]',
		'bg-[#C7CEEA]',
		'bg-[#FFDAC1]',
		'bg-[#E2F0CB]',
		'bg-[#FFF1BA]',
		'bg-[#AFCBFF]',
		'bg-[#FFB7B2]',
		'bg-[#D5AAFF]',
		'bg-[#B9FBC0]',
	]

	return (
		<Card className="flex h-fit w-[500px] flex-col gap-4">
			<div className="flex items-center gap-4">
				<div
					className={`flex aspect-square w-10 items-center justify-center rounded-full text-2xl font-bold ${BACKGROUNDS[Math.floor(Math.random() * 10)]}`}
				>
					{reviewer.at(0)?.toUpperCase()}
				</div>
				<div>
					<div className="font-heading text-lg">{reviewer}</div>
					<div className="flex">
						{Array.from(Array(score)).map((_, index) => (
							<FaStar className="fill-amber-300" key={index} />
						))}
					</div>
				</div>
			</div>
			<p>{review}</p>
		</Card>
	)
}

export { ReviewCard }
