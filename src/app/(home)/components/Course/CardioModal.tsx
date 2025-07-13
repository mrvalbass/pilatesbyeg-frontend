import { Modal } from '@/components/shared'

interface CardioModalProps {
	isOpen: boolean
	onClose: () => void
}

function CardioModal({ isOpen, onClose }: CardioModalProps) {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<h1 className="mb-6 text-2xl">Cardio / Renforcement Musculaire</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia. Dignissimos quo suscipit illo ex non
				maxime fuga expedita obcaecati debitis possimus, pariatur iure eaque velit accusantium esse sunt facilis.
			</p>
		</Modal>
	)
}

export { CardioModal }
