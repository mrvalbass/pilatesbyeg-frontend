import AnimatedContent from '@/components/ui/AnimatedContent'
import FadeContent from '@/components/ui/FadeContent'
import IdCard from './IdCard'

const AboutSection = () => {
	return (
		<section className="bg-base-200 min-h-[80svh] p-12 md:p-24">
			<div className="mx-auto flex h-full w-full max-w-[1500px] flex-col items-center justify-center gap-12 md:flex-row md:gap-24">
				<FadeContent blur className="basis-1/2" duration={200} threshold={0.8}>
					<AnimatedContent distance={50} animateOpacity={false} threshold={0.8}>
						<article className="basis-1/2">
							<h1 className="font-heading text-2xl">Le concept</h1>
							<p className="mt-6">
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quo sit nostrum suscipit temporibus
								voluptatem, impedit dolorum sunt molestiae, saepe porro amet ullam incidunt cum tenetur ad nulla sint
								asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde veritatis iure exercitationem
								expedita voluptatibus, voluptate ullam enim nulla, explicabo dignissimos et fuga eligendi velit fugiat
								necessitatibus? Quo error est cumque?
							</p>
						</article>
					</AnimatedContent>
				</FadeContent>
				<IdCard />
			</div>
		</section>
	)
}

export default AboutSection
