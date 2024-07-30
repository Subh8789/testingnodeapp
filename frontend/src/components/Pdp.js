import React, { useState } from 'react';
import Print from '../utils/icons/print.svg'
import Save from '../utils/icons/save.svg'
import Minus from '../utils/icons/minus.svg'
import Plus from '../utils/icons/plus.svg'
import Success from '../utils/icons/success.svg'
import '../utils/css/pdp.css';

import { Link } from 'react-router-dom';

const Pdp = () => {


  const [activeTab, setActiveTab] = useState('Overview');
  const [quantity, setQuantity] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleDecrease = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  return (
    <div className="BEAMHK-Product">
      <div className='top-beamhk'>

        <div className='products-title-info'>
        <h1>BEAMHK</h1>
        <p>Heater Kit for Beam detector</p>
        </div>

        <div className='print-section'>
          <nav className='print-nav'>
            <ul className='print-nav-items'>
              <li><Link to=""><img src={Print} alt="Honeywell print icon" className='print-icon-1'/><span className='print-W'>Print With Price</span></Link></li>
              <li><Link to=""><img src={Print} alt="Honeywell print icon" className='print-icon-2'/><span className='print-WO'>Print Without Price</span></Link></li>

            </ul>
          </nav>
        </div>

      </div>

      <div className='middle-beamhk'>

        <div className='image-side'>
          <div className='images'>
          <img src='https://honeywell.scene7.com/is/image/Honeywell65/HBT-Fire-BEAMHK-STRAIGHT-HiRes' alt='HBT-Fire-BEAMHK-STRAIGHT-HiRes' className='beamhk-image-2'/>
          <img src='https://honeywell.scene7.com/is/image/Honeywell65/HBT-Fire-BEAMHK-STRAIGHT-HiRes' alt='HBT-Fire-BEAMHK-STRAIGHT-HiRes' className='beamhk-image-1'/>
          </div>
          <div className='add-to-cart-section'>
            <div className='save-icon-box'>
                <img src={Save} alt="Honeywell save icon" className='save-icon'/>
            </div>
          <div className='add-to-cart-button'>
            <p className='add-to-cart-link'>ADD TO CART</p>
          </div>
        </div>

          <div className='compare-checkbox-section'>
            <input
                type='checkbox' 
                className='compare-checkbox'
            />
            <label className='checkbox-label'>
                Compare
            </label>

          </div>
        </div>

        <div className='product-info-side'>
          <nav className='product-navbar'>
            <ul className='product-nav-items'>
              <li className={activeTab === 'Overview' ? 'active' : ''} onClick={() => handleTabClick('Overview')}>Overview</li>
              <li className={activeTab === 'Specifications' ? 'active' : ''} onClick={() => handleTabClick('Specifications')}>Specifications</li>
              <li className={activeTab === 'Resources' ? 'active' : ''} onClick={() => handleTabClick('Resources')}>Resources</li>
              <li>Training</li>
              <li>Replacement Products</li>
            </ul>
          </nav>
          
          <div className='product-content'>
            {activeTab === 'Overview' && (
              <div className='product-overview'>
                <p className='product-desc-title'>Product Description</p>
                <p className='product-desc-info'>Heating kits for use to prevent condensation with the BEAM1224 conventional 
                  beam smoke detectors. They lessen the likelihood of condensation by maintaining 
                  the unit at a temperature that is slightly higher than the surrounding air.</p>
                <p className='feats-and-benefits-title'>Features & Ben*</p>
                <div className='second-level'>
                <p>List Price</p>
                <p>Your Price</p>
                <p>UoM</p>
                <p>Quantity</p>
                <p>Subtotal</p>
                </div>

                <div className='third-level'>
                  <p className='crossed-line-price'>USD 71.43</p>
                  <p>USD 32.50 <span className='discount-text'>(54.5% Discount)</span></p>
                  <p>EA</p>
                  <p className='quantity-box'>
                    <img src={Minus} alt="Minus" onClick={handleDecrease} className='quantity-icon'/>
                    {quantity}
                    <img src={Plus} alt="Plus" onClick={handleIncrease} className='quantity-icon'/>
                  </p>
                  <p>USD 162.50</p>
                </div>

                <div className='fourth-level'>
                  <div className='amount-section'>
                  <p className='amount-available-text'><img src={Success} alt="Honeywell success icon" 
                  className='success-icon'/>5 Available on 08-JUL-2024</p>
                  </div>
                  <p className='product-availability-text'>Product availabilty is estimated on current stock level, 
                    which may be different at time of order processing. No reservation has been performed at this time. Delivery Dates
                    will be advised after order is processed.
                  </p>
                </div>
              </div>

            )}
            {activeTab === 'Specifications' && (
              <div className='product-specifications'>
                <table className='specifications-table'>
                    <tr className='table-rows'>
                      <td className='table-headers'>Nominal Power Consumption</td>
                      <td>1.6 W @ 24 V</td>
                    </tr>
                    <tr>
                      <td className='table-headers'>Maximum Power Consumption</td>
                      <td>3 @ 32 V W</td>
                    </tr>
                    <tr>
                      <td className='table-headers'>Maximum Current Rating</td>
                      <td>924K</td>
                    </tr>
                    <tr>
                      <td className='table-headers'>Maximum Operating Voltage</td>
                      <td>32VLT</td>
                    </tr>
                    <tr>
                      <td className='table-headers'>Minimum Operating Voltage</td>
                      <td>15VLT</td>
                    </tr>
                    <tr>
                      <td className='table-headers'>Brand</td>
                      <td>System Sensor</td>
                    </tr>
                </table>
              </div>
            )}
            {activeTab === 'Resources' && (
              <div className='product-resources'>
                <table className='resources-table'>
                    <tr className='resources-table-rows'>
                      <td className='resources-table-headers'>Name</td>
                      <td className='resources-table-headers'>URL</td>
                    </tr>
                    <tr>
                      <td>Beam Smoke Detectors Applications Guide</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>hbt-fire-BEAMHK-LEFT</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>BEAM1224 and BEAM1224S BEAM Detectors Data Sheet</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>OSI-R-SS Datasheet</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>BEAMHK Heating Kit-Installation Manual</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>BD-SS and BDT-SS Beam Detectors Datasheet</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>_HBT-BP-Fire-BEAMHK-PrimaryPhoto.png</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>hbt-fire-BEAMHK-LEFT</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>
                    <tr>
                      <td>_hbt-fire-beamhk-beam1224-heating-kit-primaryimage.png</td>
                      <td><Link to='' className='download-link'>Download</Link></td>
                    </tr>

                </table>
              </div>
            )}

           {/*
            {activeTab === 'Training' && (
              <div className='product-training'>
                <p>Training content goes here...</p>
              </div>
            )}
            {activeTab === 'Replacement Products' && (
              <div className='product-replacement-products'>
                <p>Replacement Products content goes here...</p>
              </div>
            )}

            */}
          </div>
        </div>
      </div>

      <div className='bottom-beamhk'>

      </div>

    </div>
  );
}

export default Pdp;
