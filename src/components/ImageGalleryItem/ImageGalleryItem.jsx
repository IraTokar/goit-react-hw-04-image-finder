import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import {GalleryItem, GalleryImg} from './ImageGalleryItem.styled'

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
            <GalleryItem onClick= {this.toggleModal}>
                    <GalleryImg src={webformatURL} alt={tags} />
                    </GalleryItem>
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


