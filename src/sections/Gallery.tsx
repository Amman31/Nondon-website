import { useState } from 'react';
import { imagedata } from '../data/GalleryImage';
import { IoClose } from "react-icons/io5";
import './Gallery.css';

const Gallery = () => {
    const [imagePopup, setImagePopup] = useState(false);
    const [imgPopupSrc, setImagePopupSource] = useState('');

    const openImagePopup = (image: string) => {
        setImagePopup(true);
        setImagePopupSource(image);
        document.body.style.overflow = 'hidden';
    };

    const closeImagePopup = () => {
        setImagePopup(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <>
            {imagePopup && (
                <div className="imagePopup">
                    <span className="closeButton" onClick={closeImagePopup}><IoClose /></span>
                    <img className="popupImage" src={imgPopupSrc} alt="No image found" />
                </div>
            )}
            <div className='gallery-main' style={{ width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h1>Gallery</h1>
                <div className="gallery-root">
                    {imagedata.map((image, index) => {
                        return <div className='gallery-div' key={index}>
                            <img src={image} alt="No image" onClick={() => openImagePopup(image)} />
                        </div>
                    })}
                </div>
            </div>
        </>

    )
}

export default Gallery
