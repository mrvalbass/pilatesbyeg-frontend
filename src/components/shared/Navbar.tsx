'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { CSSProperties, useEffect, useRef } from 'react'
import { MdSportsGymnastics } from 'react-icons/md'
import { RiMenu4Fill } from 'react-icons/ri'

import { useScrollTrigger } from '@/hooks'
import { useUserStore } from '@/stores/user'

function Navbar() {
	const { scrollTrigger } = useScrollTrigger({})
	const { role } = useUserStore()
	const showNavbar = scrollTrigger === 'up'
	const menuPopoverRef = useRef<HTMLUListElement | null>(null)

	const closePopOver = () => {
		menuPopoverRef.current?.hidePopover()
	}
	useEffect(() => {
		if (!showNavbar && menuPopoverRef.current) {
			closePopOver()
		}
	}, [showNavbar])

	const navbarClasses = clsx(
		'navbar rounded-box w-4/5 md:w-3/5 px-4 transition-transform duration-500 ease-in-out bg-base-100 text-base-content overflow-x-hidden',
		!showNavbar && '-translate-y-25'
	)

	return (
		<div className="text-neutral-content fixed top-8 z-20 flex w-full justify-center" aria-hidden={!showNavbar}>
			<div className={navbarClasses}>
				<div className="navbar-start">
					<Link href={'/'} className="hidden text-xl md:inline-flex">
						Pilates by EG Logo
					</Link>
					<button
						className="btn btn-neutral md:hidden"
						popoverTarget="menu-popover"
						style={{ anchorName: '--menu' } as CSSProperties}
					>
						<RiMenu4Fill size={20} />
					</button>
					<ul
						ref={menuPopoverRef}
						className="dropdown menu bg-neutral rounded-box z-30 mt-1 w-42"
						popover="auto"
						id="menu-popover"
						style={{ positionAnchor: '--menu' } as CSSProperties}
						onClick={closePopOver}
					>
						<li>
							<Link href={'/'} className="text-neutral-content">
								Accueil
							</Link>
						</li>
						<li>
							<Link href={'/planning'} className="text-neutral-content">
								Planning
							</Link>
						</li>
					</ul>
				</div>
				<div className="navbar-center">
					<Link href={'/'} className="text-xl md:hidden">
						Pilates by EG Logo
					</Link>
				</div>
				<div className="navbar-end">
					<div className="hidden items-center gap-4 md:flex">
						<Link href={'/planning'}>Planning</Link>
						{role === null && (
							<Link href={'#cta'} scroll className="btn btn-accent">
								Réservez votre séance d&apos;essai
							</Link>
						)}
					</div>
					{role === null && (
						<Link href={'/#cta'} scroll className="btn btn-accent md:hidden">
							<MdSportsGymnastics size={20} />
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}

export { Navbar }
