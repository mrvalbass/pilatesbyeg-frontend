const HeroSection = () => {
	return (
		<section className="relative flex h-[75svh] items-center justify-center">
			<video
				autoPlay
				loop
				muted
				className="absolute -z-10 h-full w-full object-cover"
				src="https://res.cloudinary.com/dmftxzhvh/video/upload/v1739554403/pilatesbyeg/hero-pilatesbyeg.mp4"
			/>
			<div className="bg-neutral/60 absolute -z-10 h-full w-full" />
			<h1 className="text-neutral-content font-heading text-5xl md:text-6xl">Pilates by EG</h1>
		</section>
	)
}

export default HeroSection
