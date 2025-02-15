import Navbar from '@/components/shared/Navbar'
import '@styles/globals.css'
import type { Metadata } from 'next'

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
				<Navbar />
				{children}
			</body>
		</html>
	)
}
