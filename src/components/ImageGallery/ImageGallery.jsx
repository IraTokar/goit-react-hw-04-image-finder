import React from "react";
import PropTypes from 'prop-types'

import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
    
const ImageGallery = ({images}) => {
    return (
        <ul>
            {images.map(image => 
               ( <ImageGalleryItem key = {image.id} image = {image}/>)
            
            )}
        </ul>
    )
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ImageGallery;



