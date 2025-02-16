import Card from '@/components/ui/Card'
import TiltedCard from '@/components/ui/TiltedCard'
import useIsMobile from '@/hooks/shared/useIsMobile'
import Image from 'next/image'

interface CourseProps {
	handleClicks: Array<() => void>
}

const Courses = ({ handleClicks }: CourseProps) => {
	const [handlePilatesClick, handleCardioClick] = handleClicks
	const isMobile = useIsMobile()

	const pilatesImgUrl = 'https://res.cloudinary.com/dmftxzhvh/image/upload/v1739627851/pilatesbyeg/course-pilates.jpg'
	const cardioImgUrl = 'https://res.cloudinary.com/dmftxzhvh/image/upload/v1739628057/pilatesbyeg/cardio-course.jpg'
	const pilatesAlt = 'pilate image'
	const cardioAlt = 'cardio image'

	const mobileContent = (
		<div className="flex w-full flex-col gap-12">
			<Card className="relative" onClick={handlePilatesClick}>
				<Image
					src={pilatesImgUrl}
					alt={pilatesAlt}
					width={500}
					height={200}
					className="rounded-box aspect-square object-cover"
				/>
				<div className="to-neutral rounded-box absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent" />
				<p className="font-heading text-neutral-content absolute bottom-5 left-5 text-xl font-bold">Pilates</p>
			</Card>
			<Card className="relative" onClick={handleCardioClick}>
				<Image
					src={cardioImgUrl}
					alt={cardioAlt}
					width={500}
					height={200}
					className="rounded-box aspect-square object-cover"
				/>
				<div className="to-neutral rounded-box absolute top-0 h-full w-full bg-gradient-to-b from-transparent via-transparent" />
				<p className="font-heading text-neutral-content absolute bottom-5 left-5 text-xl font-bold">
					Cardio / <br />
					Renforcement Musculaire
				</p>
			</Card>
		</div>
	)

	const webContent = (
		<div className="flex w-full justify-between">
			<TiltedCard
				imageSrc={pilatesImgUrl}
				altText={pilatesAlt}
				showTooltip={false}
				containerHeight="100%"
				imageHeight={'500px'}
				imageWidth={'500px'}
				displayOverlayContent
				scaleOnHover={1}
				overlayContent={
					<p className="font-heading text-neutral-content bg-neutral/90 rounded-box px-6 py-4 text-center text-xl font-bold">
						Pilates
					</p>
				}
				onClick={handlePilatesClick}
			/>
			<TiltedCard
				imageSrc={cardioImgUrl}
				altText={cardioAlt}
				showTooltip={false}
				containerHeight="100%"
				imageHeight={'500px'}
				imageWidth={'500px'}
				scaleOnHover={1}
				displayOverlayContent
				overlayContent={
					<p className="font-heading text-neutral-content bg-neutral/90 rounded-box px-6 py-4 text-center text-xl font-bold">
						Cardio / Renforcement Musculaire
					</p>
				}
				onClick={handleCardioClick}
			/>
		</div>
	)

	return isMobile ? mobileContent : webContent
}

export default Courses
