'use client'
import FadeContent from '@/components/ui/FadeContent'
import { useState } from 'react'
import ContactModal from './ContactModal'

const ContactForm = () => {
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
			<FadeContent blur duration={200} delay={1200} threshold={0} className="relative z-1">
				<button
					className="text-neutral-content font-heading bg-neutral rounded-box cursor-pointer px-10 py-5 text-xl font-bold shadow-2xl transition-transform hover:scale-105 active:scale-95 md:text-3xl"
					onClick={handleContactClick}
				>
					Une question ?
				</button>
			</FadeContent>
		</>
	)
}

export default ContactForm
