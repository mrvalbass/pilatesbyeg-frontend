import Image from 'next/image'

import { Card, TiltedCard } from '@/components/ui'
import { useIsMobile } from '@/hooks'

interface CourseCardProps {
	img: string
	alt: string
	title?: string
	onClick: () => void | undefined
}

function CourseCard({ img, alt, title, onClick }: CourseCardProps) {
	const isMobile = useIsMobile()

	return isMobile ? (
		<Card className="relative w-fit" onClick={onClick}>
			<Image src={img} alt={alt} width={500} height={200} className="rounded-box aspect-square object-cover" />
			<div className="to-neutral rounded-box absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent" />
			<p className="font-heading text-neutral-content absolute bottom-5 left-5 text-xl font-bold">
				{title} <sup>ⓘ</sup>
			</p>
		</Card>
	) : (
		<TiltedCard
			imageSrc={img}
			altText={alt}
			showTooltip={false}
			containerHeight="100%"
			imageHeight={'500px'}
			imageWidth={'500px'}
			displayOverlayContent={!!title}
			scaleOnHover={1}
			overlayContent={
				<p className="font-heading text-neutral-content bg-neutral/90 rounded-box px-6 py-4 text-center text-xl font-bold">
					{title}
				</p>
			}
			onClick={onClick}
		/>
	)
}

export { CourseCard }
