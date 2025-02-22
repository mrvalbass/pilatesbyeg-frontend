import BlurText from '@/components/ui/BlurText'
import ClickSpark from '@/components/ui/ClickSpark'

const ActionSection = () => {
	return (
		<section id="cta" className="bg-base-200 relative flex min-h-[50svh] flex-col items-center justify-center gap-10">
			<BlurText
				text="Réservez votre séance d’essai "
				delay={50}
				animateBy="words"
				direction="bottom"
				className="text-base-content font-heading relative z-1 flex max-w-3/5 justify-center text-4xl leading-15 md:text-6xl md:leading-30"
			/>
			<form className="bg-accent rounded-box z-1 mb-20 flex min-w-[300px] flex-col items-center p-10 shadow-2xl md:w-1/3">
				<input className="input validator" type="text" required placeholder="Jean Jacques" />
				<div className="validator-hint">Veuillez entrer un nom valide</div>
				<input className="input validator" type="email" required placeholder="jean-jacques@example.com" />
				<div className="validator-hint mb-5">Veuillez entrer une adresse email valide</div>
				<button className="btn btn-wide btn-neutral">Envoyer</button>
			</form>
			<ClickSpark sparkColor="oklch(44% 0.011 73.639)" sparkSize={10} sparkRadius={20} sparkCount={8} duration={400} />
		</section>
	)
}

export default ActionSection
