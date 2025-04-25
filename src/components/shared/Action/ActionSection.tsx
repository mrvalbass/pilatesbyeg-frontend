import BlurText from '@/components/ui/BlurText'
import ClickSpark from '@/components/ui/ClickSpark'
import Link from 'next/link'
import ContactForm from './ContactForm'

const ActionSection = () => {
	const tel = typeof window !== undefined ? 'tel:+33649810280' : '#cta'

	return (
		<section
			id="cta"
			className="bg-base-200 relative flex min-h-[50svh] flex-col items-center justify-center gap-10 py-20 md:gap-20"
		>
			<Link href={tel} className="flex w-full items-center justify-center">
				<BlurText
					text="Réservez votre séance d’essai au 06.49.81.02.80"
					delay={50}
					animateBy="words"
					direction="bottom"
					className="text-base-content font-heading z-1 flex max-w-3/5 justify-center text-4xl leading-15 md:text-6xl md:leading-30"
				/>
			</Link>
			<ContactForm />
			<ClickSpark sparkColor="oklch(44% 0.011 73.639)" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400} />
		</section>
	)
}

export default ActionSection
