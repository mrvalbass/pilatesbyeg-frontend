'use client'

import clsx from 'clsx'
import Image from 'next/image'

import { AnimatedContent, Card, FadeContent } from '@/components/ui'
import { useIsMobile } from '@/hooks'

function IdCard() {
	const isMobile = useIsMobile()

	const articleClasses = clsx(isMobile ? 'relative' : 'flex gap-6')
	const imageClasses = clsx(
		isMobile ? 'rounded-t-box h-[300px] w-full object-cover object-[50%_25%]' : 'rounded-box w-[150px] object-cover'
	)
	const textContainerClass = clsx(isMobile && 'relative z-10 text-neutral-content -mt-18 ml-6')
	const titleClass = clsx('text-lg font-bold', isMobile ? 'mb-2' : 'my-2')
	const bioClasses = clsx(isMobile && 'p-4')

	return (
		<FadeContent
			blur
			className="md:basis-1/2"
			duration={200}
			threshold={isMobile ? 0.5 : 0.8}
			delay={isMobile ? 0 : 500}
		>
			<AnimatedContent distance={50} animateOpacity={false} delay={isMobile ? 0 : 500} threshold={isMobile ? 0.1 : 0.8}>
				<Card className="md:basis-1/2">
					<article className={articleClasses}>
						<Image
							src="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739613620/pilatesbyeg/EG-picture_hxn10p.jpg"
							alt="EG profile picture"
							width={isMobile ? 150 : 200}
							height={100}
							className={imageClasses}
						/>
						{isMobile && (
							<div className="rounded-t-box to-neutral absolute top-0 h-[300px] w-full bg-gradient-to-b from-transparent via-transparent" />
						)}
						<div>
							<div className={textContainerClass}>
								<h1 className="font-heading text-2xl font-bold">Eliane</h1>
								<h2 className={titleClass}>Coach</h2>
							</div>
							<p className={bioClasses}>
								Coach sportif, diplômée d’un BPJEPS AGFF (activité gymnique de la forme et de la force), depuis 2012.{' '}
								<br />
								Formée à enseigner la méthode Pilates depuis 2014.
							</p>
						</div>
					</article>
				</Card>
			</AnimatedContent>
		</FadeContent>
	)
}

export { IdCard }
