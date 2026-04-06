import { motion, useMotionValue, useTransform } from 'motion/react'

import type { CarouselItem } from './Carousel'

const SPRING_OPTIONS = { type: 'spring' as const, stiffness: 300, damping: 30 }

interface CarouselItemProps {
	item: CarouselItem
	index: number
	itemWidth: number
	round: boolean
	trackItemOffset: number
	x: ReturnType<typeof useMotionValue<number>>
	transition: typeof SPRING_OPTIONS | { duration: number }
}
export function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }: CarouselItemProps) {
	const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset]
	const outputRange = [90, 0, -90]
	const rotateY = useTransform(x, range, outputRange, { clamp: false })

	return (
		<motion.div
			key={`${item?.id ?? index}-${index}`}
			className={`relative shrink-0 flex flex-col ${
				round
					? 'items-center justify-center text-center bg-[#060010] border-0'
					: 'items-start justify-between bg-[#222] border border-[#222] rounded-xl'
			} overflow-hidden cursor-grab active:cursor-grabbing`}
			style={{
				width: itemWidth,
				height: round ? itemWidth : '100%',
				transform: `rotateY(${rotateY.get()}deg)`,
				...(round && { borderRadius: '50%' }),
			}}
			transition={transition}
		>
			<div className={`${round ? 'p-0 m-0' : 'mb-4 p-5'}`}>
				<span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#060010]">{item.icon}</span>
			</div>
			<div className="p-5">
				<div className="mb-1 font-black text-lg text-white">{item.title}</div>
				<p className="text-sm text-white">{item.description}</p>
			</div>
		</motion.div>
	)
}
