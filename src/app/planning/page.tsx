'use client'

import { AnimatePresence, motion } from 'motion/react'

import { ActionSection } from '@/components/shared'
import { Spinner } from '@/components/shared/Spinner'
import { useUserStore } from '@/stores/user'

import { HeroSection, PlanningSection, UserManagementSection, UserSection } from './components'

export default function Planning() {
	const isLoading = useUserStore(state => state.isLoading)

	return (
		<>
			<AnimatePresence>
				{isLoading && (
					<motion.div
						initial={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="bg-primary fixed inset-0 z-30 flex items-center justify-center"
					>
						<Spinner />
					</motion.div>
				)}
			</AnimatePresence>
			<HeroSection />
			<UserSection />
			<PlanningSection />
			<UserManagementSection />
			<ActionSection />
		</>
	)
}
