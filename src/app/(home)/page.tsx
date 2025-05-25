import { ActionSection } from '@/components/shared'

import { AboutSection, CourseSection, HeroSection, ReviewSection } from './components'

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
