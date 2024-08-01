import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import { GalleryItem, GalleryImg } from './ImageGalleryItem.styled'

const ImageGalleryItem = ({ image: { webformatURL, tags, largeImageURL } }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => setIsModalOpen(!isModalOpen);

    return (
        <>
            <GalleryItem onClick={toggleModal}>
                <GalleryImg src={webformatURL} alt={tags} />
            </GalleryItem>
            {isModalOpen &&
                <Modal
                    largeImageURL={largeImageURL}
                    tags={tags}
                    onClose={toggleModal}
                />
            }
                
        </>
    )

}



// class ImageGalleryItem extends Component {
//     state = {
//         isModalOpen: false,
//     };

//     toggleModal = () => {
//        this.setState(({isModalOpen})=>({isModalOpen: !isModalOpen}))
//    }


//     render() {
        
//         const { isModalOpen } = this.state;
//         const { image: {webformatURL, tags, largeImageURL} } = this.props;

//         return (
//             <>
//             <GalleryItem onClick= {this.toggleModal}>
//                     <GalleryImg src={webformatURL} alt={tags} />
//                     </GalleryItem>
//                 {isModalOpen &&
//                     <Modal
//                         largeImageURL={largeImageURL} 
//                         tags={tags} 
//                         onClose={this.toggleModal}
//                     />
//                 }
                
//                 </>
//         )
//     }
// };



export default ImageGalleryItem;

