'use client'

import { useState } from 'react'
import CardioModal from './CardioModal'
import Courses from './Courses'
import PilatesModal from './PilatesModal'

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
			<PilatesModal isOpen={pilatesModalIsOpen} handleCloseClick={handlePilatesCloseClick} />
			<CardioModal isOpen={cardioModalIsOpen} handleCloseClick={handleCardioCloseClick} />
			<section className="bg-base-200 min-h-[80svh] p-12">
				<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-around gap-12">
					<h2 className="font-heading text-3xl">Les disciplines</h2>
					<Courses handleClicks={[handlePilatesClick, handleCardioClick]} />
				</div>
			</section>
		</>
	)
}

export default CourseSection
