import type ProductsData from '@entities/SportBarData';
import Modal from '../modal/Modal';

interface ImageModalProps {
  imageObj: ProductsData;
  handleClose: () => void;
}

export default function ImageModal({ imageObj, handleClose }: ImageModalProps): JSX.Element {
  return (
    <Modal>
      <button className="close-btn" onClick={handleClose}>
        &times;
      </button>
      <img className="modal-img" src={imageObj.image} alt={imageObj.description} />
      <p className="modal-desc">{imageObj.description}</p>
    </Modal>
  );
}
