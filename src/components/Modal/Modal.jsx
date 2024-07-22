import { Component } from 'react';

import PropTypes from 'prop-types';
import {Overlay, OverlayModal, Img} from './Modal.styles'


class Modal extends Component{
    componentDidMount() {
        window.addEventListener('keydown', this.escapeClose);

    };

    componentWillUnmount() {
        window.removeEventListener('keydown', this.escapeClose);

    };

    escapeClose = evt => {
        if (evt.code === 'Escape') {
            this.props.onClose();
        };
    };

    backdropClickClose = evt => {
        if (evt.currentTarget === evt.target) {
            this.props.onClose();
        };
    };

    render() {
        const { largeImageURL, tags } = this.props;
        

       return (    
        <Overlay  onClick={this.backdropClickClose}>
            <OverlayModal>
                <Img src={largeImageURL} alt={tags} />
            </OverlayModal>
           </Overlay>
       )
        
        
    };
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};


export default Modal;


