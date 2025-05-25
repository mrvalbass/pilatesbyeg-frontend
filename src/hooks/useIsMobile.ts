import { useEffect, useState } from 'react'

const useIsMobile = (breakpoint = 768) => {
	const [isMobile, setIsMobile] = useState(true)

	useEffect(() => {
		setIsMobile(window.innerWidth < breakpoint)

		const handleResize = () => {
			setIsMobile(window.innerWidth < breakpoint)
		}

		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [breakpoint])

	return isMobile
}

export { useIsMobile }
