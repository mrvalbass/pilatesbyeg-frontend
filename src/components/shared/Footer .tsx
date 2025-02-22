import Link from 'next/link'
import { FaEnvelope, FaPhone } from 'react-icons/fa6'

const Footer = () => {
	const tel = typeof window !== undefined ? 'tel:+33649810280' : '#cta'
	const mail = typeof window !== undefined ? 'mailto:eliane-guillot@hotmail.fr' : '#cta'

	return (
		<footer className="bg-neutral text-neutral-content flex flex-col gap-12 px-10 py-16 md:flex-row md:gap-42 md:px-20">
			<aside>
				<h1>Pilates by EG Logo</h1>
				<p className="font-heading text-2xl">Pilates by EG</p>
			</aside>
			<nav>
				<h6 className="footer-title mb-2">Contact</h6>
				<div className="flex flex-col gap-4">
					<Link href={tel} className="flex items-center gap-2">
						<FaPhone /> 06.49.81.02.80
					</Link>
					<Link href={mail} className="flex items-center gap-2">
						<FaEnvelope /> eliane-guillot@hotmail.fr
					</Link>
				</div>
			</nav>
		</footer>
	)
}

export default Footer
