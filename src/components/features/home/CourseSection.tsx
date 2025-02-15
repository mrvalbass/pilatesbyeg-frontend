'use client'

import Modal from '@/components/shared/Modal'
import TiltedCard from '@/components/ui/TiltedCard'
import { useState } from 'react'

const CourseSection = () => {
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

	return (
		<>
			<Modal isOpen={pilatesModalIsOpen} handleCloseClick={handlePilatesCloseClick}>
				<h1 className="mb-6 text-2xl">Pilates</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit laudantium ullam enim, ea natus
					quaerat neque nobis voluptates temporibus! Debitis natus doloremque quaerat itaque rem autem libero eligendi
					quia mollitia?
				</p>
			</Modal>
			<Modal isOpen={cardioModalIsOpen} handleCloseClick={handleCardioCloseClick}>
				<h1 className="mb-6 text-2xl">Cardio / Renforcement Musculaire</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia. Dignissimos quo suscipit illo ex non
					maxime fuga expedita obcaecati debitis possimus, pariatur iure eaque velit accusantium esse sunt facilis.
				</p>
			</Modal>
			<section className="bg-base-200 h-[80svh] p-12">
				<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-around">
					<h2 className="font-heading text-3xl">Les disciplines</h2>
					<div className="flex w-full justify-between">
						<TiltedCard
							imageSrc="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739627851/pilatesbyeg/course-pilates.jpg"
							showTooltip={false}
							containerHeight="100%"
							imageHeight={'500px'}
							imageWidth={'500px'}
							displayOverlayContent
							scaleOnHover={1}
							overlayContent={
								<p className="font-heading text-neutral-content bg-neutral/80 rounded-box p-6 text-center text-xl font-bold">
									Pilates
								</p>
							}
							onClick={handlePilatesClick}
						/>
						<TiltedCard
							imageSrc="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739628057/pilatesbyeg/cardio-course.jpg"
							showTooltip={false}
							containerHeight="100%"
							imageHeight={'500px'}
							imageWidth={'500px'}
							scaleOnHover={1}
							displayOverlayContent
							overlayContent={
								<p className="font-heading text-neutral-content bg-neutral/80 rounded-box p-4 text-center text-xl font-bold">
									Cardio / Renforcement Musculaire
								</p>
							}
							onClick={handleCardioClick}
						/>
					</div>
				</div>
			</section>
		</>
	)
}

export default CourseSection
