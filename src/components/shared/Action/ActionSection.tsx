'use client'
import BlurText from '@/components/ui/BlurText'
import ClickSpark from '@/components/ui/ClickSpark'
import FadeContent from '@/components/ui/FadeContent'
import { useState } from 'react'
import ContactModal from './ContactModal'

const ActionSection = () => {
	const [contactModalIsOpen, setContactModalIsOpen] = useState(false)

	const handleContactClick = () => {
		setContactModalIsOpen(true)
	}

	const handleContactCloseClick = () => {
		setContactModalIsOpen(false)
	}

	return (
		<>
			<ContactModal isOpen={contactModalIsOpen} handleCloseClick={handleContactCloseClick} />
			<section id="cta" className="bg-base-200 relative flex min-h-[50svh] flex-col items-center justify-center gap-20">
				<BlurText
					text="Réservez votre séance d’essai au 06.49.81.02.80"
					delay={50}
					animateBy="words"
					direction="bottom"
					className="text-base-content font-heading z-1 flex max-w-3/5 justify-center text-4xl leading-15 md:text-6xl md:leading-30"
				/>
				<FadeContent blur duration={200} delay={1200} threshold={0} className="relative z-1 mb-20">
					<button
						className="text-neutral-content font-heading bg-neutral rounded-box cursor-pointer px-10 py-5 text-xl font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95 md:text-3xl"
						onClick={handleContactClick}
					>
						Une question ?
					</button>
				</FadeContent>
				<ClickSpark
					sparkColor="oklch(44% 0.011 73.639)"
					sparkSize={10}
					sparkRadius={20}
					sparkCount={8}
					duration={400}
				/>
			</section>
		</>
	)
}

export default ActionSection
