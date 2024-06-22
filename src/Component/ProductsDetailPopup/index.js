
import React, { useState } from 'react';
import './index.css';

const ImagesArray = [{
    id:1,
    url:'https://res.cloudinary.com/dhs1xv9et/image/upload/v1719065501/Frame_7_ylqjgw.png'
  },
  {
    id:2,
    url:'https://res.cloudinary.com/dhs1xv9et/image/upload/v1719065499/Frame_6_gyh5pp.png'
  },
  {
    id:3,
    url:'https://res.cloudinary.com/dhs1xv9et/image/upload/v1719093004/Screenshot_2024-06-23_031934_n59s3v.png'
  },
  {
    id:4,
    url:'https://res.cloudinary.com/dhs1xv9et/image/upload/v1719093004/Screenshot_2024-06-23_031934_n59s3v.png'
  }]

const ProductDetailsPopup = ({ isOpen, onClose, title }) => {
    const [selectedImageId, setSelectedImageId] = useState(ImagesArray[0].id);

    const selectImage = (id) => {
        setSelectedImageId(id);
      };


  return (
    <>
      {isOpen && (
        <div className="ProductPopup-overlay">
          <div className="ProductPopup">
            <div className='imagesContainer'>
                <div className="main-image">
                    <img
                    src={ImagesArray.find((image) => image.id === selectedImageId).url}
                    alt={`Selected Product`}
                    className="selected-image"
                    />
                </div>
                <div className='imagesOptions'>
                {ImagesArray.map((image) => (
                    <img
                        key={image.id}
                        src={image.url}
                        alt={`Product`}
                        className={image.id === selectedImageId ? 'selected image' : 'image'} 
                        onClick={() => selectImage(image.id)}
                    />
                    ))}
                </div>
            </div>
            <div className='productDetailsContainer'>
                <div className='productNameConatiner'>
                    <h1>
                        {title}
                    </h1> 
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className='productDetails'>
                    <h2>
                        MRP:
                    </h2>
                    <h1>
                        Raju's Dreams/-
                    </h1>
                    <hr className='line'/>
                    <h4>
                        Product Description:
                    </h4>
                    <p>
                        This product packs an extra punch, thanks to the literal blood,sweat and tears of a young boy
                    </p>
                    <hr/>
                    <h4>
                        ProDuct Contents:
                    </h4>
                    <ul>
                        <li>10 hand-hurting pieces of {`${title}s`}</li>
                        <li>Jilled with great pain</li>
                        <li>Raju's hopes</li>
                    </ul>
                    <hr/>
                    <h4>
                        Shipping Time:
                    </h4>
                    <p>
                        Before Raju understands that his dreams do not matter.
                    </p>
                    <button type='button' className='chooseNowButton'>
                            Choose Now
                    </button>
                </div>
            </div> 
          </div>
          
        </div>
      )}
    </>
  );
};

export default ProductDetailsPopup;
