'use client'

import Image from 'next/image'

import { AnimatedContent, Card, FadeContent } from '@/components/ui'
import { useIsMobile } from '@/hooks'

const IdCard = () => {
	const isMobile = useIsMobile()

	const mobileContent = (
		<article className="relative">
			<Image
				src="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739613620/pilatesbyeg/EG-picture_hxn10p.jpg"
				alt="EG profile picture"
				width={150}
				height={100}
				className="rounded-t-box h-[300] w-full object-cover object-[50%_25%]"
			/>
			<div className="rounded-t-box to-neutral absolute top-0 h-[300] w-full bg-gradient-to-b from-transparent via-transparent" />
			<h1 className="font-heading text-neutral-content absolute top-[225] left-6 text-2xl font-bold">Eliane</h1>
			<h2 className="text-neutral-content absolute top-[260] left-6 mb-2 text-lg font-bold">Coach</h2>
			<div className="p-4">
				Coach sportif, diplômée d’un BPJEPS AGFF (activité gymnique de la forme et de la force), depuis 2012. <br />
				Formée à enseigner la méthode Pilates depuis 2014.
			</div>
		</article>
	)

	const webContent = (
		<article>
			<div className="flex gap-6">
				<Image
					src="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739613620/pilatesbyeg/EG-picture_hxn10p.jpg"
					alt="EG profile picture"
					width={200}
					height={100}
					className="rounded-box w-[150] object-cover"
				/>
				<div>
					<h1 className="font-heading text-2xl">Eliane</h1>
					<h2 className="my-2 text-lg">Coach</h2>
					<p>
						Coach sportif, diplômée d’un BPJEPS AGFF (activité gymnique de la forme et de la force), depuis 2012. <br />
						Formée à enseigner la méthode Pilates depuis 2014.
					</p>
				</div>
			</div>
		</article>
	)

	return (
		<FadeContent
			blur
			className="md:basis-1/2"
			duration={200}
			threshold={isMobile ? 0.5 : 0.8}
			delay={isMobile ? 0 : 500}
		>
			<AnimatedContent distance={50} animateOpacity={false} delay={isMobile ? 0 : 500} threshold={isMobile ? 0.1 : 0.8}>
				<Card className="md:basis-1/2">{isMobile ? mobileContent : webContent}</Card>
			</AnimatedContent>
		</FadeContent>
	)
}

export { IdCard }
