'use client'

import RotatingText from '@/components/ui/RotatingText'
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
			<section className="bg-base-200 min-h-[60svh] p-12">
				<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-around gap-12">
					<h2 className="font-heading text-3xl">Les disciplines</h2>
					<Courses handleClicks={[handlePilatesClick, handleCardioClick]} />
					<div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
						<p className="text-xl">Les principes du Pilates </p>
						<RotatingText
							texts={[
								'RESPIRATION',
								'CONTRÔLE',
								'CENTRAGE',
								'CONCENTRATION',
								'PRÉCISION',
								'FLUIDITÉ',
								'ROUTINE',
								'ÉQUILIBRE',
							]}
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
			</section>
		</>
	)
}

export default CourseSection
