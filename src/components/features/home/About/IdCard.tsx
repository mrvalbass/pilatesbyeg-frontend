'use client'

import AnimatedContent from '@/components/ui/AnimatedContent'
import Card from '@/components/ui/Card'
import FadeContent from '@/components/ui/FadeContent'
import useIsMobile from '@/hooks/shared/useIsMobile'
import Image from 'next/image'

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
			<div className="rounded-t-box to-neutral absolute top-0 h-[300] w-full bg-gradient-to-b from-transparent" />
			<h1 className="font-heading text-neutral-content absolute top-[240] left-6 text-2xl font-bold">Eliane</h1>
			<div className="p-4">
				<h2 className="mb-2 text-lg">Coach diplômée d&apos;état</h2>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam eos fuga,
					facilis officiis!
				</p>
				<p className="mt-4">
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam eos fuga,
					facilis officiis! Aliquid maiores eveniet accusamus assumenda quibusdam a ipsum voluptate eius accusantium
					officiis.
				</p>
			</div>
		</article>
	)

	const webContent = (
		<article>
			<div className="flex gap-6">
				<Image
					src="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739613620/pilatesbyeg/EG-picture_hxn10p.jpg"
					alt="EG profile picture"
					width={150}
					height={100}
					className="rounded-box h-[150] w-[100] object-cover"
				/>
				<div>
					<h1 className="font-heading text-2xl">Eliane</h1>
					<h2 className="my-2 text-lg">Coach diplômée d&apos;état</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam eos fuga,
						facilis officiis!
					</p>
				</div>
			</div>
			<p className="mt-6">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam eos fuga,
				facilis officiis! Aliquid maiores eveniet accusamus assumenda quibusdam a ipsum voluptate eius accusantium
				officiis.
			</p>
		</article>
	)

	return (
		<FadeContent blur className="md:basis-1/2" duration={200} threshold={isMobile ? 0.5 : 0.8} delay={500}>
			<AnimatedContent distance={50} animateOpacity={false} delay={500} threshold={isMobile ? 0.1 : 0.8}>
				<Card className="md:basis-1/2">{isMobile ? mobileContent : webContent}</Card>
			</AnimatedContent>
		</FadeContent>
	)
}

export default IdCard
