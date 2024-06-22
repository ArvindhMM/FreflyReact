import React, { useState } from 'react';
import ProductDetailsPopup from '../ProductsDetailPopup';
import './index.css'

const Product = ({title}) => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };
    return (
        <div className="product">
            <img src="https://res.cloudinary.com/dhs1xv9et/image/upload/v1719065501/Frame_7_ylqjgw.png" alt="Raju RassiBomb" className="product-image"/>
            <div className="productInfo">
                <h3>{title}</h3>
            <button type='button' className="productButton" id='product1QuickView'  onClick={toggleModal}>Quick View</button>
            </div>
            <ProductDetailsPopup isOpen={isOpen} onClose={toggleModal} title={title} />
        </div>
    );
};

export default Product