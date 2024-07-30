import React, { useState } from 'react';
import CaratDown from '../utils/icons/caratdown.svg';
import CaratUp from '../utils/icons/caratup.svg';
import '../utils/css/ProductSection.css';
import  {Link} from 'react-router-dom';

const ProductSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(5);

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLoadMore = () => {
    setVisibleProducts(prevVisibleProducts => prevVisibleProducts + 5);
  };

  const products = [
    { id: 1, partNumber: 'DDNG232', description: 'RS232 to DYNET Interface' },
    { id: 2, partNumber: 'XNXXSC1SS', description: 'Gas Detector: 18-32V: NEMA 4X: 20 to 90% RH Non-Condensing: LM25 Aluminum' },
    { id: 3, partNumber: 'DDNG232', description: 'RS232 to DYNET Interface' },
    { id: 4, partNumber: 'XNXXSC1SS', description: 'Gas Detector: 18-32V: NEMA 4X: 20 to 90% RH Non-Condensing: LM25 Aluminum' },
    { id: 5, partNumber: 'DDNG232', description: 'RS232 to DYNET Interface' },
    { id: 6, partNumber: 'XNXXSC1SS', description: 'Gas Detector: 18-32V: NEMA 4X: 20 to 90% RH Non-Condensing: LM25 Aluminum' },
    { id: 7, partNumber: 'DDNG232', description: 'RS232 to DYNET Interface' },
    { id: 8, partNumber: 'XNXXSC1SS', description: 'Gas Detector: 18-32V: NEMA 4X: 20 to 90% RH Non-Condensing: LM25 Aluminum' },
    { id: 9, partNumber: 'DDNG232', description: 'RS232 to DYNET Interface' },
    { id: 10, partNumber: 'XNXXSC1SS', description: 'Gas Detector: 18-32V: NEMA 4X: 20 to 90% RH Non-Condensing: LM25 Aluminum' },

  ];


  return (
    <div className="product-section">
      <div className='filter-section'>
        <h5 className='filter-by-text'>Filter By:</h5>
        
        <div className='dropdown-container'>
          <div className='dropdown-header' onClick={handleDropdownClick}>
            <img
              src={isDropdownOpen ? CaratUp : CaratDown}
              alt="Carat icon"
              className='carat-icon'
            />
            <p className='dropdown-title'>Content Type</p>
            <p className='clear-button'>Clear</p>
          </div>
          <div className={`checkbox-container ${isDropdownOpen ? 'open' : ''}`}>
            <div className='checkbox-item'>
              <input type='checkbox' className='checkbox' id='part-number' />
              <label className='checkbox-label' htmlFor='part-number'>
                Part Number(52959)
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className='product-list-section'>
        <p className='number-text'><span className='num-of-products-text'>{products.length}</span> results</p>

        {products.slice(0, visibleProducts).map(product => (
          <div className='products-item' key={product.id}>
            <div className='part-number-img'>
              <p className="pn-title">Part Number:</p>
              <p className="part-number">{product.partNumber}</p>
            </div>
            <div className='part-item-description'>
              <p className='desc-1'>PART NUMBER</p>
              <p className='desc-2'>{product.partNumber}</p>
              <p className='desc-3'>{product.description}</p>
              <div className='details-button'>
                <Link to={"/search/"+product.id} className='details-link'>Product Details</Link>
              </div>
            </div>
          </div>
        ))}

        {visibleProducts < products.length && (
          <div className='load-button' onClick={handleLoadMore}>
            <p className='load-more-link'>Load More</p>
          </div>
        )}
      </div>
    </div>
  );


}

export default ProductSection;
