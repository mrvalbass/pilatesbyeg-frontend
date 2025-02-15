import AboutSection from '@/components/features/home/About/AboutSection'
import ActionSection from '@/components/features/home/Action/ActionSection'
import CourseSection from '@/components/features/home/Course/CourseSection'
import HeroSection from '@/components/features/home/Hero/HeroSection'
import ReviewSection from '@/components/features/home/Review/ReviewSection'

function Home() {
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

export default Home
