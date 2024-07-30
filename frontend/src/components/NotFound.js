import React from 'react';
import '../utils/css/NotFound.css';
import  {Link} from 'react-router-dom';

const NotFound = ({error}) => {


  return (
    <div className="not-found-page">
        <div className='lost-search'>
            <h3 className='lost-title'>You certainly weren't expecting this page</h3>
            <h5 className='lost-info'>While we're all about integrating buildings, somehow this connection was lost to a misspelled entry or a page we removed. Try again?</h5>
            <h5 className='lost-info'>{error}</h5>
            <div className='lost-buttons'>
                <Link to="" className='lost-search-button'>Search</Link>
                <Link to="" className='lost-contact-us-button'>Contact Us</Link>
            </div>

            <div className='lost-suggestion-box'>
                <p className='suggestion-box-1'>You may try these...</p>
                <p className='suggestion-box-2'>Popular Keywords</p>
            </div>

        </div>

    </div>
  );
  


}

export default NotFound;