import { ReactNode } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface ModalProps {
	children: ReactNode
	isOpen: boolean
	handleCloseClick: () => void
}

const Modal = ({ children, isOpen, handleCloseClick }: ModalProps) => {
	return (
		<dialog id="my_modal_1" className="modal" open={isOpen}>
			<div className="modal-box">
				<div className="absolute top-3 right-3">
					<IoIosCloseCircleOutline className="cursor-pointer" onClick={handleCloseClick} size={25} />
				</div>
				{children}
			</div>
			<button className="modal-backdrop bg-neutral/60" onClick={handleCloseClick} />
		</dialog>
	)
}

export default Modal
