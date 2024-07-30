import React, { useState } from 'react';
import Logo from  '../utils/icons/Honeywell_Logo_RGB_Red.jpg';
import Globe from '../utils/icons/hon-globe-15px.png';
import User from '../utils/icons/user.svg';
import Cart from '../utils/icons/ShoppingCart.svg';
import Magify from '../utils/icons/magify_black.svg';
import DropdownModel from './DropdownModel';
import SoldToDrpdown from './SoldToDrpdown';
import SearchBar from './SearchBarW';

import { Link } from 'react-router-dom';

const Header = ({detailData,contactData,error}) => {
 
  //console.log("detaildtaa under header",detailData.given_name,detailData.session_valid ) 
  //console.log("contactData under header",contactData) 

 const dropdownOpen1= false;
  
 //const [closeAll, setCloseAll] = useState(false);
  
 // Manage dropdown visibility
  const [signedIn, setSignedIn] = useState(detailData.session_valid);
  //console.log("signedIn",signedIn)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [soldToOpen, setSoldToOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [toggleSearchBox, setToggleSearchBox] = useState(false);

  

  const [selectedAccount, setSelectedAccount] = useState(localStorage.getItem('selectedAccount'));

  console.log("signedin", signedIn)
  // Toggle dropdown visibility
  const toggleDropdown = (e) => {
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen);
    //setCloseAll(!closeAll);
    soldToOpen && setSoldToOpen(false);
    currencyOpen && setCurrencyOpen(false);
  };
  const soldToClick= (e) => {
    e.stopPropagation();
    setSoldToOpen(true);
    //setCloseAll(!closeAll);
    dropdownOpen && setDropdownOpen(false);
    currencyOpen && setCurrencyOpen(false);
  };
  const currencyHandler = (e)=>{
    e.stopPropagation();
    setCurrencyOpen(true);
    dropdownOpen && setDropdownOpen(false);
    soldToOpen && setSoldToOpen(false);
  }
  const ToggleSearchBox = (e) => { 
    e.stopPropagation();
    setToggleSearchBox(true);
  }

  return (
    <div className="Header">
      <header className='top-nav'>
        <nav>
          <ul className='top-links'>
           
            <li><span><img src={Globe} alt="Honeywell globe icon"/><Link to="">United States(EN)</Link></span></li>
            <li><Link to="">Contact</Link></li>
            {detailData.session_valid && <li onClick={currencyHandler}>
                <Link>
                CURRENCY:{"currencydata"}
              <span></span>
                </Link>     
              {detailData.session_valid && dropdownOpen && (
                <DropdownModel signedin={detailData.session_valid} username={detailData.given_name} setSignedIn={setSignedIn}/>
              )}
            </li> }
            {detailData.session_valid && <li onClick={soldToClick}>
                <Link>
                ACCT:{selectedAccount ? selectedAccount : "Select Account"}
              <span></span>
                </Link>     
              {detailData.session_valid && soldToOpen && (
                <SoldToDrpdown  contactData={contactData} setSelectedAccount = {setSelectedAccount} setSoldToOpen={setSoldToOpen} />
              )}
            </li> }
              <li onClick={toggleDropdown}>
                <Link>
                <span> <img src={User} alt="Honeywell user icon" className='user-icon'/></span>
              <span>{!detailData.session_valid ? "Sign In" : detailData.given_name }</span>
                </Link>     
              {dropdownOpen && (
                <DropdownModel signedin={detailData.session_valid} username={detailData.given_name}/>
              )}
            </li>
            <li><Link to="">Bulk Order</Link></li>
            <li><Link to=""><img src={Cart} alt="Honeywell shopping cart icon" className='cart-icon'/></Link></li>
          </ul>
        </nav>

      </header>

      <header className='bottom-nav'>
      <div className="header-container">
        <div className="logo-container">
        <Link to="https://buildings.honeywell.com/us/en/ecommerce"><img src={Logo} alt="Honeywell Building Automation"/></Link>
        </div>
        <div>
          <h2>Building Automation</h2>
        </div>
      </div>
      <div className='navSection'>
      <nav>
          <ul className='bottom-links'>
            <li><Link to="#">Product</Link></li>
            <li>
              <Link to="#">Industries</Link>
              {/* Dropdown menu */}
              {dropdownOpen1 && (
                <ul className="dropdown-menu">
                  <li><Link to="#">Commercial Buildings</Link></li>
                  <li><Link to="#">Healthcare Facilities</Link></li>
                  <li><Link to="#">Industrial Facilities</Link></li>
                  {/* Add more industry options as needed */}
                </ul>
              )}
            </li>
            <li><Link to="#">Brands</Link></li>
            <li><Link to="#">Support</Link></li>
            <li><Link to="#">News Events</Link></li>
            <li onClick={ToggleSearchBox}><Link><img src={Magify} alt="Honeywell search icon" className='search-icon'/></Link>
          {  toggleSearchBox &&    
      <SearchBar setToggleSearchBox={setToggleSearchBox}></SearchBar>
     } 
            </li>
          </ul>
        </nav>
      </div>
     
      </header>

      
    </div>

  );
}

export default Header;
