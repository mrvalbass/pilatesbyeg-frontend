import BlurText from '@/components/ui/BlurText'
import ClickSpark from '@/components/ui/ClickSpark'
import Link from 'next/link'

const ActionSection = () => {
	const tel = typeof window !== undefined ? 'tel:+33649810280' : '#cta'
	return (
		<section id="cta" className="bg-base-200 relative flex h-[50svh] items-center justify-center">
			<Link className="flex w-fit justify-center" href={tel}>
				<BlurText
					text="Réservez votre séance d’essai au 06.49.81.02.80"
					delay={50}
					animateBy="words"
					direction="bottom"
					className="text-base-content font-heading relative z-1 flex max-w-3/5 justify-center text-4xl leading-15 md:text-6xl md:leading-30"
				/>
			</Link>
			<ClickSpark sparkColor="oklch(44% 0.011 73.639)" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400} />
		</section>
	)
}

export default ActionSection
