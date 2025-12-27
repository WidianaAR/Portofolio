import './ImageModal.css';
import { Modal } from "react-bootstrap";
import { LazyLoadImage } from "react-lazy-load-image-component";

function ImageModal({ img, onClose }) {
    return (
        <Modal show={!!img} onHide={onClose} centered size="xl" animation className='image-modal'>
            <LazyLoadImage effect="blur" src={img} alt="" threshold={100} visibleByDefault={false} wrapperClassName="lazy-wrapper" />
        </Modal>
    );
}

export default ImageModal;
