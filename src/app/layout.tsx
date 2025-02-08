import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
	title: 'Pilates by EG',
	description: 'Site de Pilates by EG',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body className={`antialiased md:subpixel-antialiased`}>{children}</body>
		</html>
	)
}
