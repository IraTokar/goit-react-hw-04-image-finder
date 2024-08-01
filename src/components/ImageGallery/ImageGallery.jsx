import React from "react";
import {GalleryList} from './ImageGallery.styles'


import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
    
const ImageGallery = ({images}) => {
    return (
        <GalleryList>
            {images.map(image => 
               ( <ImageGalleryItem key = {image.id} image = {image}/>)
            
            )}
        </GalleryList>
    )
};

export default ImageGallery;



