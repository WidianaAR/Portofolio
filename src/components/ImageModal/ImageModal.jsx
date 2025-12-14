import './ImageModal.css';
import { Modal } from "react-bootstrap";

function ImageModal({ img, onClose }) {
    return (
        <Modal show={!!img} onHide={onClose} centered size="xl" animation className='image-modal'>
            <img src={img} alt="" />
        </Modal>
    );
}

export default ImageModal;
