import React, { useState } from 'react';
/*import Logo from 'C:/Users/H539556/hwapp/src/Honeywell_Logo_RGB_Red.jpg';
import Globe from 'C:/Users/H539556/hwapp/src/hon-globe-15px.png';
import User from 'C:/Users/H539556/hwapp/src/user.svg';
import Cart from 'C:/Users/H539556/hwapp/src/ShoppingCart.svg'
import Magify from 'C:/Users/H539556/hwapp/src/magify.svg'*/

import Logo from './Honeywell_Logo_RGB_Red.jpg';

import Globe from './hon-globe-15px.png';
import User from './user.svg';
import Cart from './ShoppingCart.svg'
import Magify from './magify.svg'



const SignInHeader = () => {
  // Manage dropdown visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
 
  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="Header">
      <header className='top-nav'>
        <nav>
          <ul className='top-links'>
           
            <li><span><img src={Globe} alt="Honeywell globe icon"/><a href="https://buildings.honeywell.com/us/en/ecommerce">United States(EN)</a></span></li>
            <li><a href="https://buildings.honeywell.com/us/en/support/supportcenter">Contact</a></li>
            <li className='signIn-link'><a href="https://buildings.honeywell.com/us/en/error/not-permitted"><img src={User} alt="Honeywell user icon" className='user-icon'/>Sign In</a></li>
            <li><a href="https://buildings.honeywell.com/us/en/error/not-permitted">Bulk Order</a></li>
            <li><a href="https://buildings.honeywell.com/us/en/error/not-permitted"><img src={Cart} alt="Honeywell shopping cart icon" className='cart-icon'/></a></li>
          </ul>
        </nav>
      </header>

      <header className='bottom-nav'>
        <nav>
          <ul className='bottom-links'>
            <div className="header-container">
                <div class="logo-container">
                    <a href="https://buildings.honeywell.com/us/en/ecommerce"><img src={Logo} alt="Honeywell Building Automation"/></a>
                </div>
                <div>
                    <h2>Building Automation</h2>
            </div>
            </div>
            <li><a href="#">Product</a></li>
            <li>
              <a href="#" onClick={toggleDropdown}>Industries</a>
              {/* Dropdown menu */}
              {dropdownOpen && (
                <ul className="dropdown-menu">
                  <li><a href="#">Commercial Buildings</a></li>
                  <li><a href="#">Healthcare Facilities</a></li>
                  <li><a href="#">Industrial Facilities</a></li>
                  {/* Add more industry options as needed */}
                </ul>
              )}
            </li>
            <li><a href="#">Automation Solutions</a></li>
            <li><a href="#">Brands</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">News Events</a></li>

          </ul>
        </nav>
      </header>
    </div>
  );
}

export default SignInHeader;
