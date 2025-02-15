'use client'

import { useScrollTrigger } from '@/hooks/features/navbar'
import clsx from 'clsx'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { MdSportsGymnastics } from 'react-icons/md'
import { RiMenu4Fill } from 'react-icons/ri'

function Navbar() {
	const { scrollTrigger } = useScrollTrigger({})
	const showNavbar = scrollTrigger === 'up'

	const navbarClasses = clsx(
		'navbar rounded-box w-4/5 md:w-3/5 px-4 transition-transform duration-500 ease-in-out bg-base-100 text-base-content overflow-x-hidden',
		!showNavbar && '-translate-y-25'
	)

	return (
		<div className="text-neutral-content fixed top-8 z-20 flex w-full justify-center" aria-hidden={!showNavbar}>
			<div className={navbarClasses}>
				<div className="navbar-start">
					<Link href={'/'} className="hidden text-xl md:inline-flex">
						Pilates by EG
					</Link>
					<button
						className="btn btn-neutral md:hidden"
						popoverTarget="menu-popover"
						style={{ anchorName: '--menu' } as CSSProperties}
					>
						<RiMenu4Fill size={20} />
					</button>
					<ul
						className="dropdown menu bg-neutral rounded-box z-30 mt-1 w-42"
						popover="auto"
						id="menu-popover"
						style={{ positionAnchor: '--menu' } as CSSProperties}
					>
						<li>
							<Link href={'/planning'} className="text-neutral-content">
								Planning
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-center">
					<Link href={'/'} className="text-xl md:hidden">
						Pilates by EG
					</Link>
				</div>
				<div className="navbar-end">
					<div className="hidden items-center gap-4 md:flex">
						<Link href={'/planning'}>Planning</Link>
						<Link href={'#cta'} scroll className="btn btn-accent">
							Réservez votre séance d&apos;essai
						</Link>
					</div>
					<Link href={'/#cta'} scroll className="btn btn-accent md:hidden">
						<MdSportsGymnastics size={20} />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Navbar
