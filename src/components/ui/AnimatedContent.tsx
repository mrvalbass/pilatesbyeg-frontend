'use client'
import type { SpringConfig } from '@react-spring/web'
import { animated, useSpring } from '@react-spring/web'
import { ReactNode, useEffect, useRef, useState } from 'react'

interface AnimatedContentProps {
	children: ReactNode
	distance?: number
	direction?: 'vertical' | 'horizontal'
	reverse?: boolean
	config?: SpringConfig
	initialOpacity?: number
	animateOpacity?: boolean
	scale?: number
	threshold?: number
	delay?: number
}

const defaultConfig: SpringConfig = { tension: 50, friction: 25 }

const AnimatedContent: React.FC<AnimatedContentProps> = ({
	children,
	distance = 100,
	direction = 'vertical',
	reverse = false,
	config = defaultConfig,
	initialOpacity = 0,
	animateOpacity = true,
	scale = 1,
	threshold = 0.1,
	delay = 0,
}) => {
	const [inView, setInView] = useState(false)
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		let timeout: NodeJS.Timeout
		const element = ref.current
		if (!element) return

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry?.isIntersecting) {
					observer.unobserve(element)
					timeout = setTimeout(() => {
						setInView(true)
					}, delay)
				}
			},
			{ threshold }
		)

		observer.observe(element)

		return () => {
			if (timeout) clearTimeout(timeout)
			observer.disconnect()
		}
	}, [threshold, delay])

	const directions: Record<'vertical' | 'horizontal', string> = {
		vertical: 'Y',
		horizontal: 'X',
	}

	const springProps = useSpring({
		from: {
			transform: `translate${directions[direction]}(${reverse ? `-${distance}px` : `${distance}px`}) scale(${scale})`,
			opacity: animateOpacity ? initialOpacity : 1,
		},
		to: inView
			? {
					transform: `translate${directions[direction]}(0px) scale(1)`,
					opacity: 1,
				}
			: undefined,
		config,
	})

	const AnimatedDiv = animated.div as React.ElementType

	return (
		<AnimatedDiv ref={ref} style={springProps}>
			{children}
		</AnimatedDiv>
	)
}

export { AnimatedContent }
