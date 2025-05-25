'use client'

import { motion, type PanInfo, useMotionValue } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi'

import { CarouselItem } from './CarouselItem'

export interface CarouselItem {
	title: string
	description: string
	id: number
	icon?: React.ReactElement
	score?: number
}

export interface CarouselProps {
	items?: CarouselItem[]
	baseWidth?: number
	autoplay?: boolean
	autoplayDelay?: number
	pauseOnHover?: boolean
	loop?: boolean
	round?: boolean
}

const DEFAULT_ITEMS: CarouselItem[] = [
	{
		title: 'Text Animations',
		description: 'Cool text animations for your projects.',
		id: 1,
		icon: <FiFileText className="h-[16px] w-[16px] text-white" />,
	},
	{
		title: 'Animations',
		description: 'Smooth animations for your projects.',
		id: 2,
		icon: <FiCircle className="h-[16px] w-[16px] text-white" />,
	},
	{
		title: 'Components',
		description: 'Reusable components for your projects.',
		id: 3,
		icon: <FiLayers className="h-[16px] w-[16px] text-white" />,
	},
	{
		title: 'Backgrounds',
		description: 'Beautiful backgrounds and patterns for your projects.',
		id: 4,
		icon: <FiLayout className="h-[16px] w-[16px] text-white" />,
	},
	{
		title: 'Common UI',
		description: 'Common UI components are coming soon!',
		id: 5,
		icon: <FiCode className="h-[16px] w-[16px] text-white" />,
	},
]

const DRAG_BUFFER = 0
const VELOCITY_THRESHOLD = 500
const GAP = 16
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 }

function Carousel({
	items = DEFAULT_ITEMS,
	baseWidth = 300,
	autoplay = false,
	autoplayDelay = 3000,
	pauseOnHover = false,
	loop = false,
	round = false,
}: CarouselProps) {
	const containerPadding = 16
	const itemWidth = baseWidth - containerPadding * 2
	const trackItemOffset = itemWidth + GAP

	const carouselItems = loop ? [...items, items[0]] : items
	const [currentIndex, setCurrentIndex] = useState<number>(0)
	const x = useMotionValue(0)
	const [isHovered, setIsHovered] = useState<boolean>(false)
	const [isResetting, setIsResetting] = useState<boolean>(false)

	const containerRef = useRef<HTMLDivElement>(null)
	useEffect(() => {
		if (!(pauseOnHover && containerRef.current)) {
			return
		}
		const container = containerRef.current
		const handleMouseEnter = () => setIsHovered(true)
		const handleMouseLeave = () => setIsHovered(false)
		container.addEventListener('mouseenter', handleMouseEnter)
		container.addEventListener('mouseleave', handleMouseLeave)
		return () => {
			container.removeEventListener('mouseenter', handleMouseEnter)
			container.removeEventListener('mouseleave', handleMouseLeave)
		}
	}, [pauseOnHover])

	useEffect(() => {
		if (!(autoplay && (!pauseOnHover || !isHovered))) {
			return
		}
		const timer = setInterval(() => {
			setCurrentIndex(prev => {
				if (prev === items.length - 1 && loop) {
					return prev + 1 // Animate to clone.
				}
				if (prev === carouselItems.length - 1) {
					return loop ? 0 : prev
				}
				return prev + 1
			})
		}, autoplayDelay)
		return () => clearInterval(timer)
	}, [autoplay, autoplayDelay, isHovered, loop, items.length, carouselItems.length, pauseOnHover])

	const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS

	const handleAnimationComplete = () => {
		if (loop && currentIndex === carouselItems.length - 1) {
			setIsResetting(true)
			x.set(0)
			setCurrentIndex(0)
			setTimeout(() => setIsResetting(false), 50)
		}
	}

	const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo): void => {
		const offset = info.offset.x
		const velocity = info.velocity.x
		if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
			if (loop && currentIndex === items.length - 1) {
				setCurrentIndex(currentIndex + 1)
			} else {
				setCurrentIndex(prev => Math.min(prev + 1, carouselItems.length - 1))
			}
		} else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
			if (loop && currentIndex === 0) {
				setCurrentIndex(items.length - 1)
			} else {
				setCurrentIndex(prev => Math.max(prev - 1, 0))
			}
		}
	}

	const dragProps = loop
		? {}
		: {
				dragConstraints: {
					left: -trackItemOffset * (carouselItems.length - 1),
					right: 0,
				},
			}

	return (
		<div
			ref={containerRef}
			className={`relative overflow-hidden p-4 ${
				round ? 'rounded-full border border-white' : 'rounded-[24px] border border-[#222]'
			}`}
			style={{
				width: `${baseWidth}px`,
				...(round && { height: `${baseWidth}px` }),
			}}
		>
			<motion.div
				className="flex"
				drag="x"
				{...dragProps}
				style={{
					width: itemWidth,
					gap: `${GAP}px`,
					perspective: 1000,
					perspectiveOrigin: `${currentIndex * trackItemOffset + itemWidth / 2}px 50%`,
					x,
				}}
				onDragEnd={handleDragEnd}
				animate={{ x: -(currentIndex * trackItemOffset) }}
				transition={effectiveTransition}
				onAnimationComplete={handleAnimationComplete}
			>
				{carouselItems.map((item, index) => (
					<CarouselItem
						key={item?.id}
						item={item}
						index={index}
						trackItemOffset={trackItemOffset}
						x={x}
						round={round}
						itemWidth={itemWidth}
						effectiveTransition={effectiveTransition}
					/>
				))}
			</motion.div>
			<div className={`flex w-full justify-center ${round ? 'absolute bottom-12 left-1/2 z-20 -translate-x-1/2' : ''}`}>
				<div className="mt-4 flex w-[150px] justify-between px-8">
					{items.map((_, index) => (
						<motion.div
							key={index}
							className={`h-2 w-2 cursor-pointer rounded-full transition-colors duration-150 ${
								currentIndex % items.length === index
									? round
										? 'bg-white'
										: 'bg-[#333333]'
									: round
										? 'bg-[#555]'
										: 'bg-[rgba(51,51,51,0.4)]'
							}`}
							animate={{
								scale: currentIndex % items.length === index ? 1.2 : 1,
							}}
							onClick={() => setCurrentIndex(index)}
							transition={{ duration: 0.15 }}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export { Carousel }
