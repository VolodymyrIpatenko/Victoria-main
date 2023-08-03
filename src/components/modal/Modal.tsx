import Backdrop from './Backdrop';
import { ReactNode } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

interface ModalProps {
  children: ReactNode;
  onClose: () => void;
}

const Modal = ({ children, onClose }: ModalProps) => {
  return (
    <Backdrop>
      <AiOutlineClose className="close-icon" onClick={onClose}></AiOutlineClose>
      {children}
    </Backdrop>
  );
};

export default Modal;
