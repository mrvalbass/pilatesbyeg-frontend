import AboutSection from '@/components/features/home/AboutSection'
import ActionSection from '@/components/features/home/ActionSection'
import CourseSection from '@/components/features/home/CourseSection'
import HeroSection from '@/components/features/home/HeroSection'
import ReviewSection from '@/components/features/home/ReviewSection'

export default function Home() {
	return (
		<>
			<HeroSection />
			<AboutSection />
			<CourseSection />
			<ReviewSection />
			<ActionSection />
		</>
	)
}
