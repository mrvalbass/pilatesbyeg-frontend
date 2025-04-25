const HeroSection = () => {
	return (
		<section className="relative flex min-h-[40svh] items-center justify-center">
			<video
				autoPlay
				loop
				muted
				className="absolute -z-10 h-full w-full object-cover"
				src="https://res.cloudinary.com/dmftxzhvh/video/upload/v1740299315/pilatesbyeg/planning.mp4"
			/>
			<div className="bg-neutral/60 absolute -z-10 h-full w-full" />
			<h1 className="font-heading text-neutral-content text-6xl">Planning</h1>
		</section>
	)
}

export default HeroSection
