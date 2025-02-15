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
				Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit laudantium ullam enim, ea natus quaerat
				neque nobis voluptates temporibus! Debitis natus doloremque quaerat itaque rem autem libero eligendi quia
				mollitia?
			</p>
		</Modal>
	)
}

export default PilatesModal
