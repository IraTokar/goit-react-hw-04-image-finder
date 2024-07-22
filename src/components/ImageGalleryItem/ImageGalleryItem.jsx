import { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends Component {
    state = {
        isModalOpen: false,
    };

    toggleModal = () => {
       this.setState(({isModalOpen})=>({isModalOpen: !isModalOpen}))
   }


    render() {
        
        const { isModalOpen } = this.state;
        const { image: {webformatURL, tags, largeImageURL} } = this.props;

        return (
            <>
            <li onClick= {this.toggleModal}>
                    <img src={webformatURL} alt={tags} />
                    </li>
                {isModalOpen &&
                    <Modal
                        largeImageURL={largeImageURL} 
                        tags={tags} 
                        onClose={this.toggleModal}
                    />
                }
                
                </>
        )
    }
};



export default ImageGalleryItem;


