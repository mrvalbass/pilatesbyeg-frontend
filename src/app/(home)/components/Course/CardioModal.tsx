import { Modal } from '@/components/shared'

interface CardioModalProps {
	isOpen: boolean
	handleCloseClick: () => void
}

function CardioModal({ isOpen, handleCloseClick }: CardioModalProps) {
	return (
		<Modal isOpen={isOpen} handleCloseClick={handleCloseClick}>
			<h1 className="mb-6 text-2xl">Cardio / Renforcement Musculaire</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, mollitia. Dignissimos quo suscipit illo ex non
				maxime fuga expedita obcaecati debitis possimus, pariatur iure eaque velit accusantium esse sunt facilis.
			</p>
		</Modal>
	)
}

export { CardioModal }
