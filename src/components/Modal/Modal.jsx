import { useEffect } from 'react';  
import { Overlay, OverlayModal, Img } from './Modal.styles'

export const Modal = ({ largeImageURL, tags, onClose }) => {
    useEffect(() => {
        const escapeClo se = evt => {
            if (evt.code === 'Escape') {
                onClose();
            };
            
            window.addEventListener('keydown', escapeClose);
            
            return () => {
                window.removeEventListener('keydown', escapeClose);
            }
        };
    }, [onClose]);

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


// class Modal extends Component{
//     componentDidMount() {
//         window.addEventListener('keydown', this.escapeClose);

//     };

//     componentWillUnmount() {
//         window.removeEventListener('keydown', this.escapeClose);

//     };

//     escapeClose = evt => {
//         if (evt.code === 'Escape') {
//             this.props.onClose();
//         };
//     };

//     backdropClickClose = evt => {
//         if (evt.currentTarget === evt.target) {
//             this.props.onClose();
//         };
//     };

//     render() {
//         const { largeImageURL, tags } = this.props;
        

//        return (    
//         <Overlay  onClick={this.backdropClickClose}>
//             <OverlayModal>
//                 <Img src={largeImageURL} alt={tags} />
//             </OverlayModal>
//            </Overlay>
//        )
        
        
//     };
// };


export default Modal;


