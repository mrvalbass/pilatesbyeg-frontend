import { AnimatedContent, FadeContent } from '@/components/ui'

import { IdCard } from './IdCard'

function AboutSection() {
	return (
		<section className="bg-base-200 flex min-h-[60svh] items-center p-12 md:px-24">
			<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
				<FadeContent blur className="h-full basis-1/2" duration={200} threshold={0.8}>
					<AnimatedContent distance={50} animateOpacity={false} threshold={0.8}>
						<article className="h-full basis-1/2">
							<h1 className="font-heading text-2xl">Le concept</h1>
							<p className="mt-6">
								Cours de Pilates et de Renforcement musculaire <br />
								<br />
								Les cours de Pilates sont proposés à mon domicile, dans un cadre calme et chaleureux, propice au travail
								corporel en profondeur. Les séances se déroulent en petits groupes de 5 à 6 personnes maximum, afin de
								garantir un suivi personnalisé et une qualité d’enseignement optimale. <br />
								Le planning hebdomadaire comprend 6 créneaux dédiés au Pilates et 1 créneau spécifique de renforcement
								musculaire. <br />
								Les cours sont ouverts à tous les âges et adaptables en fonction des pathologies ou besoins
								particuliers. <br />
								Chaque séance met l’accent sur le gainage, la mobilisation des muscles profonds et la maîtrise du
								mouvement, avec une attention particulière portée à la posture et à la stabilité. <br />
								<br />
								Un cadre idéal pour progresser à son rythme, en toute sécurité.
							</p>
						</article>
					</AnimatedContent>
				</FadeContent>
				<IdCard />
			</div>
		</section>
	)
}

export { AboutSection }
