import { useEffect } from 'react';  
import { Overlay, OverlayModal, Img } from './Modal.styles'

export const Modal = ({ largeImageURL, tags, onClose }) => {
    useEffect(() => {
        const escapeClose = evt => {
            if (evt.code === 'Escape') {
                onClose();
            };
            
            document.addEventListener('keydown', escapeClose);
            
            return () => {
                document.removeEventListener('keydown', escapeClose);
            }
        };
    },[onClose]);

    const backdropClickClose = evt => {
        if (evt.currentTarget === evt.target) {
            onClose();
        };
    };

    return (    
        <Overlay  onClick={backdropClickClose}>
            <OverlayModal>
                <Img src={largeImageURL} alt={tags} />
            </OverlayModal>
           </Overlay>
       )
}


export default Modal;


