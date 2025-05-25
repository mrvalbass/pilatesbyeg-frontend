import { motion, MotionValue, useTransform } from 'motion/react'
import { FaStar } from 'react-icons/fa6'

import { CarouselItem as CarouselItemType } from './Carousel'

interface CarouselItemProps {
	item: CarouselItemType | undefined
	index: number
	trackItemOffset: number
	x: MotionValue<number>
	round: boolean
	itemWidth: number
	effectiveTransition:
		| {
				type: string
				stiffness: number
				damping: number
		  }
		| {
				duration: number
		  }
}
function CarouselItem({ item, index, trackItemOffset, x, round, itemWidth, effectiveTransition }: CarouselItemProps) {
	const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset]
	const outputRange = [90, 0, -90]
	const rotateY = useTransform(x, range, outputRange, { clamp: false })
	return (
		<motion.div
			className={`relative flex shrink-0 flex-col ${
				round
					? 'bg-base-100 items-center justify-center border-0 text-center'
					: 'bg-base-100 items-start justify-between rounded-[12px]'
			} cursor-grab overflow-hidden active:cursor-grabbing`}
			style={{
				width: itemWidth,
				height: round ? itemWidth : '100%',
				rotateY: rotateY,
				...(round && { borderRadius: '50%' }),
			}}
			transition={effectiveTransition}
		>
			<div className="p-5">
				<div className="mb-1 text-lg font-black text-white">{item?.title}</div>
				<div className="mb-1 flex">
					{Array.from(Array(item?.score)).map((_, index) => (
						<FaStar className="fill-amber-300" key={index} />
					))}
				</div>

				<p className="text-md text-white">{item?.description}</p>
			</div>
		</motion.div>
	)
}

export { CarouselItem }
