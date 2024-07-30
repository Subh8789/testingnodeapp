import React from 'react';
import Home from '../utils/icons/home.svg';
import CaratRight from '../utils/icons/caratright.svg';
//import { Link } from 'react-router-dom';
import '../utils/css/Breadcrumb.css';
import { Link } from 'react-router-dom';

const Breadcrumb = () => {

    return (
      <div className="Breadcrumb">
  
          <li className='breadcrumb-list'>
              <ul>
              <Link to="/" className='homepage-link'><img src={Home} alt="Homepage icon" className='home-icon'/></Link>
              <img src={CaratRight} alt="Right carat" className='carat-right'/>
              </ul>
              <ul>
                  <p className='top-text'>Search Results</p>
              </ul>
          </li>
      </div>
    );
  }
  
  export default Breadcrumb;