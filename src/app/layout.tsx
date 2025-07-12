import type { Metadata } from 'next'

import { ClientLayout } from '@/components/libs/ClientLayout'
import { Footer, Navbar } from '@/components/shared'
import '@styles/globals.css'

export const metadata: Metadata = {
	title: 'Pilates by EG',
	description: 'Venez découvrir le pilates dans une ambiance chaleuresue proche de chez vous',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`font-body antialiased md:subpixel-antialiased`}>
				<ClientLayout>
					<Navbar />
					{children}
					<Footer />
				</ClientLayout>
			</body>
		</html>
	)
}
