'use client'

import { useState } from 'react'

import { RotatingText } from '@/components/ui'

import { CardioModal } from './CardioModal'
import { CourseCard } from './CourseCard'
import { PilatesModal } from './PilatesModal'

function CourseSection() {
	const [pilatesModalIsOpen, setPilatesModalIsOpen] = useState(false)
	const [cardioModalIsOpen, setCardioModalIsOpen] = useState(false)

	const handlePilatesClick = () => {
		setPilatesModalIsOpen(true)
	}

	const handlePilatesCloseClick = () => {
		setPilatesModalIsOpen(false)
	}

	const handleCardioClick = () => {
		setCardioModalIsOpen(true)
	}

	const handleCardioCloseClick = () => {
		setCardioModalIsOpen(false)
	}

	const courses = [
		{
			title: 'Pilates',
			img: 'https://res.cloudinary.com/dmftxzhvh/image/upload/v1739627851/pilatesbyeg/course-pilates.jpg',
			alt: 'pilate image',
			onClick: handlePilatesClick,
		},
		{
			title: 'Cardio / Renforcement Musculaire',
			img: 'https://res.cloudinary.com/dmftxzhvh/image/upload/v1739628057/pilatesbyeg/cardio-course.jpg',
			alt: 'cardio image',
			onClick: handleCardioClick,
		},
	]

	const PRINCIPLES = [
		'RESPIRATION',
		'CONTRÔLE',
		'CENTRAGE',
		'CONCENTRATION',
		'PRÉCISION',
		'FLUIDITÉ',
		'ROUTINE',
		'ÉQUILIBRE',
	]

	return (
		<>
			<PilatesModal isOpen={pilatesModalIsOpen} handleCloseClick={handlePilatesCloseClick} />
			<CardioModal isOpen={cardioModalIsOpen} handleCloseClick={handleCardioCloseClick} />
			<section className="bg-base-200 min-h-[60svh] p-12">
				<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-around gap-12">
					<h2 className="font-heading text-3xl">Les disciplines</h2>
					<div className="flex w-full flex-col flex-wrap items-center gap-12 md:flex-row md:justify-around">
						{courses.map((course, index) => (
							<div key={course.title} style={{ order: index * 2 }}>
								<CourseCard {...course} />
							</div>
						))}
						<div className="order-1 flex w-full flex-col items-center justify-center gap-4 md:order-4 md:flex-row md:gap-2">
							<p className="text-xl">Les principes du Pilates : </p>
							<RotatingText
								texts={PRINCIPLES}
								rotationInterval={5000}
								staggerDuration={0.025}
								transition={{ type: 'spring', damping: 30, stiffness: 400 }}
								initial={{ y: '100%' }}
								animate={{ y: 0 }}
								exit={{ y: '-120%' }}
								mainClassName="px-3 md:px-3 bg-neutral text-neutral-content overflow-hidden py-1 md:py-2 justify-center rounded-box font-heading font-bold text-2xl"
								splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	)
}

export { CourseSection }
