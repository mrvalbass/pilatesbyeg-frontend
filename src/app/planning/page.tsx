import { ActionSection } from '@/components/shared'

import { HeroSection, PlanningSection, UserManagementSection, UserSection } from './components'

export default function Planning() {
	return (
		<>
			<HeroSection />
			<UserSection />
			<PlanningSection />
			<UserManagementSection />
			<ActionSection />
		</>
	)
}
