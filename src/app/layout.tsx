import '@styles/globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'VG template',
	description: 'Template for NextJS Projects',
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
