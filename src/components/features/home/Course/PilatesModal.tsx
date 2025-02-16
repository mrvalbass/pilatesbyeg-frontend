import Modal from '@/components/shared/Modal'

interface PilatesModalProps {
	isOpen: boolean
	handleCloseClick: () => void
}

const PilatesModal = ({ isOpen, handleCloseClick }: PilatesModalProps) => {
	return (
		<Modal isOpen={isOpen} handleCloseClick={handleCloseClick}>
			<h1 className="mb-6 text-2xl">Pilates</h1>
			<p>
				Créée par Joseph Pilates en 1926, le Pilates connaît beaucoup de succès auprès des danseurs et athlètes. <br />A
				partir de 1968 la méthode ne cesse de se développer à travers le monde. <br />
				Cette méthode favorise le travail de l’intérieur vers l’extérieur, il faut commencer par renforcer les muscles
				stabilisateurs, profonds du tronc pendant que les muscles du mouvement s’activent. <br /> De ce fait le Pilates
				développe tous les muscles et de façon harmonieuse.
			</p>
		</Modal>
	)
}

export default PilatesModal
