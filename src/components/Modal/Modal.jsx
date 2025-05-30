import { useEffect } from 'react';  
import { Overlay, OverlayModal, Img } from './Modal.styles'

export const Modal = ({ largeImageURL, tags, onClose }) => {
    useEffect(() => {
        const escapeClose = evt => {
            if (evt.code === 'Escape') {
                onClose();
            }
        };
            
        window.addEventListener('keydown', escapeClose);
            
        return () => {
            window.removeEventListener('keydown', escapeClose);
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


