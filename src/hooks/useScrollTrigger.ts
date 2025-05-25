import { useEffect, useRef, useState } from 'react'

interface UseScrollTriggerProps {
	containerId?: string
}

function useScrollTrigger({ containerId }: UseScrollTriggerProps) {
	const [scrollTrigger, setScrollTrigger] = useState<'down' | 'up'>('up')
	const lastScrollY = useRef(0)
	const lastDirection = useRef<'down' | 'up'>('up')
	const timeout = useRef<NodeJS.Timeout | null>(null)
	const container = useRef<HTMLElement | Window | null>(null)

	useEffect(() => {
		container.current = containerId ? (document.getElementById(containerId) ?? window) : window

		const handleScroll = () => {
			if (timeout.current || !container.current) return

			const scrollY = 'scrollY' in container.current ? container.current.scrollY : container.current.scrollTop
			const scrollDirection = lastScrollY.current - scrollY > 0 ? 'up' : 'down'
			if (scrollDirection !== lastDirection.current) {
				setScrollTrigger(scrollDirection)
				lastDirection.current = scrollDirection
			}
			lastScrollY.current = scrollY

			timeout.current = setTimeout(() => {
				timeout.current = null
			}, 100)
		}
		container.current.addEventListener('scroll', handleScroll)
		return () => container.current?.removeEventListener('scroll', handleScroll)
	}, [containerId])

	return { scrollTrigger }
}

export { useScrollTrigger }
