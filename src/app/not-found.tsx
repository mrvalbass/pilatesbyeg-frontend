'use client'

import { ActionSection } from '@/components/shared'
import FuzzyText from '@/components/ui/FuzzyText'

export default function NotFound() {
	return (
		<>
			<div className="bg-base-200 flex min-h-[100vh] flex-col items-center justify-center gap-12">
				<FuzzyText color="oklch(27% 0.041 260.031)">404</FuzzyText>
				<FuzzyText color="oklch(27% 0.041 260.031)">not found</FuzzyText>
			</div>
			<ActionSection />
		</>
	)
}
