import BlurText from '@/components/ui/BlurText'
import ClickSpark from '@/components/ui/ClickSpark'

const ActionSection = () => {
	return (
		<section id="cta" className="bg-base-200 relative flex h-[50svh] items-center justify-center">
			<BlurText
				text="Réservez votre séance d’essai au 06.49.81.02.80"
				delay={50}
				animateBy="words"
				direction="bottom"
				className="text-base-content font-heading flex max-w-3/5 justify-center text-4xl leading-30 md:text-6xl"
			/>
			<ClickSpark sparkColor="oklch(44% 0.011 73.639)" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400} />
		</section>
	)
}

export default ActionSection
