'use client'

import { Carousel } from '@/components/ui'
import { useIsMobile } from '@/hooks'

import { ReviewCard } from './ReviewCard'

export function ReviewSection() {
	const isMobile = useIsMobile()
	const reviews = [
		{
			reviewer: 'Marine F.',
			review:
				"Super prof. Elle s'adapte à vos attentes et à vos difficultés. J'apprécie vraiment le peu de personnes que nous sommes à chaque cours afin qu'elle puisse bien s'occuper de nous et éviter les mauvaises postures et les douleurs qui suivent. Beaux locaux. Bonne ambiance. Parfait.",
			score: 5,
		},
		{
			reviewer: 'Géraldine G.',
			review:
				'Cours de qualité. Quel que soit notre niveau, Eliane adapte ses cours. Cours très conviviaux. On passe un bon moment tout en travaillant nos muscles en profondeur 😊.',
			score: 5,
		},
		{
			reviewer: 'Alain C.',
			review:
				'Super prof dans une superbe ambiance😍. Le nombre restreint de pilateurs permet une progression rapide. Merci Eliane.😉',
			score: 5,
		},
		{
			reviewer: 'Fred',
			review: 'Des cours en petits groupes hyper adaptés à chacun, et dans la bonne humeur. Top 👌',
			score: 5,
		},
	]

	const carouselItems = reviews.map((review, index) => ({
		title: review.reviewer,
		description: review.review,
		id: index,
		score: review.score,
		icon: <p className="text-primary font-bold">{review.reviewer.at(0)?.toUpperCase()}</p>,
	}))

	return (
		<section className="bg-base-200 min-h-[20svh] overflow-hidden py-24">
			{isMobile ? (
				<div className="flex items-center justify-center p-6">
					<Carousel items={carouselItems} autoplay autoplayDelay={5000} loop />
				</div>
			) : (
				<div className="animate-banner flex w-fit items-center gap-24 px-12">
					{[...reviews, ...reviews].map((review, index) => (
						<ReviewCard key={`${review.reviewer}-${index}`} {...review} />
					))}
				</div>
			)}
		</section>
	)
}
