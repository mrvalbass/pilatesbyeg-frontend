import AnimatedContent from '@/components/ui/AnimatedContent'
import Card from '@/components/ui/Card'
import FadeContent from '@/components/ui/FadeContent'
import Image from 'next/image'

const AboutSection = () => {
	return (
		<section className="bg-base-200 h-[80svh] p-24">
			<div className="mx-auto flex h-full w-full max-w-[1500px] items-center justify-center gap-24">
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
				<FadeContent blur className="basis-1/2" duration={200} threshold={0.8} delay={500}>
					<AnimatedContent distance={50} animateOpacity={false} delay={500} threshold={0.8}>
						<Card className="basis-1/2">
							<article>
								<div className="flex gap-6">
									<Image
										src="https://res.cloudinary.com/dmftxzhvh/image/upload/v1739613620/pilatesbyeg/EG-picture_hxn10p.jpg"
										alt="EG profile picture"
										width={150}
										height={100}
										className="rounded-box object-cover"
									/>
									<div>
										<h1 className="font-heading text-2xl">Eliane</h1>
										<h2 className="my-2 text-lg">Coach diplômée d&apos;état</h2>
										<p>
											Lorem ipsum dolor sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam
											eos fuga, facilis officiis!
										</p>
									</div>
								</div>
								<p className="mt-6">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. In accusantium delectus et iste magnam eos
									fuga, facilis officiis! Aliquid maiores eveniet accusamus assumenda quibusdam a ipsum voluptate eius
									accusantium officiis.
								</p>
							</article>
						</Card>
					</AnimatedContent>
				</FadeContent>
			</div>
		</section>
	)
}

export default AboutSection
