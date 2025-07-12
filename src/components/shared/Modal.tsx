import { ReactNode } from 'react'
import { IoIosCloseCircleOutline } from 'react-icons/io'

interface ModalProps {
	children: ReactNode
	className?: string
	isOpen: boolean
	onClose: () => void
}

const Modal = ({ children, className, isOpen, onClose }: ModalProps) => {
	return (
		<dialog className="modal" open={isOpen}>
			<div className={`modal-box ${className}`}>
				<div className="absolute top-3 right-3">
					<IoIosCloseCircleOutline className="cursor-pointer" onClick={onClose} size={25} />
				</div>
				{children}
			</div>
			<button className="modal-backdrop bg-neutral/60" onClick={onClose} />
		</dialog>
	)
}

export { Modal }
