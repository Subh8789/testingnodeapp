import React from 'react';
import '../App.css';
import linkedin from '../utils/icons/linkedin.svg';
import Facebook from '../utils/icons/facebook.svg';
import Twitter from '../utils/icons/twitter.svg';
import Instagram from '../utils/icons/instagram.svg';
import YouTube from '../utils/icons/youtube.svg';

const Footer = () => {
  return (
    <div className="Footer">
      <div className='top-footer'>
        <div className='column-1'>
          <div className='Products'> 
          <h1>Products</h1>
          <ul>
             <li>By Brand</li>
             <li>By Category</li>
          </ul>
          </div>
          <div className='Automation Solutions'>
            <h1>Solutions</h1>
            <ul>
                <li>Case Studies</li>
                <li>Comfort</li>
                <li>Fire</li>
                <li>Integrated Operations</li>
                <li>Healthy Buildings</li>
                <li>Optimization</li>
                <li>Safety</li>
                <li>Security</li>
                <li>Services</li>
            </ul>
          </div>

        </div>
        <div className='column-2'>
          <div className='Industries'>
            <h1>Industries</h1>
            <ul>
                <li>Airports</li>
                <li>Commercial Buildings</li>
                <li>Data Centers</li>
                <li>Education</li>
                <li>Government and Military</li>
                <li>Healthcare</li>
                <li>Higher Education</li>
                <li>Hospitality</li>
                <li>Industrial & Manufacturing</li>
                <li>Justice And Corrections</li>
                <li>Retail</li>
                <li>Smart Cities</li>
            </ul>
          </div>

        </div>
        <div className='column-3'>
          <div className='Support'>
            <h1>Support</h1>
            <ul>
                <li>Download Center</li>
                <li>FAQ</li>
                <li>Find A Partner</li>
                <li>Training</li>
                <li>Tech Support</li>
            </ul>
          </div>
          <div className='Careers'>
            <h1>Careers</h1>
            <ul>
              <li>Careers</li>
            </ul>
          </div>
          <div className='Company'>
            <h1>Company</h1>
            <ul>
                <li>About</li>
                <li>Events</li>
                <li>News</li>
                <li>Our Brands</li>
            </ul>
          </div>

        </div>
        <div className='column-4'>
          <div className='Contact Us'>
            <h1>Contact Us</h1>
            <ul>
              <li>Business Inquiries</li>
              <li>Employee Access</li>
              <li>Subscribe</li>
              <li>Unsubscribe</li>
            </ul>

          </div>
          <div className='Legal'>
            <h1>Legal</h1>
            <ul>
              <li>Certifications</li>
              <li>Patents</li>
              <li>Quality & Saftey</li>
              <li>Warranties</li>
            </ul>
          </div>
          <div className='space'>

          </div>
          <div className='Follow Us'>
            <h1>Follow Us</h1>
            <div>
            <ul className='media-links'>
              <li className='link-1'><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYUDdcGhz2CAAAAZAtwa2QJEDfIgk_G3u5K6xjZgnq2iM82LvePsMHt0wKvz8xtu1gZUA7cpxhmDE_EdBkgfnqdfqoCtYYkReM1XCJyrVdtU_4dv6Ktoy-4wXYfj6aVB_OlFM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhoneywell'><img src={linkedin} alt='Honeywell LinkedIn' className='linkedin-icon'/></a></li>
              <li className='link-2'><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYUDdcGhz2CAAAAZAtwa2QJEDfIgk_G3u5K6xjZgnq2iM82LvePsMHt0wKvz8xtu1gZUA7cpxhmDE_EdBkgfnqdfqoCtYYkReM1XCJyrVdtU_4dv6Ktoy-4wXYfj6aVB_OlFM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhoneywell'><img src={Facebook} alt='Honeywell Facebook' className='facebook-icon'/></a></li>
              <li className='link-3'><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYUDdcGhz2CAAAAZAtwa2QJEDfIgk_G3u5K6xjZgnq2iM82LvePsMHt0wKvz8xtu1gZUA7cpxhmDE_EdBkgfnqdfqoCtYYkReM1XCJyrVdtU_4dv6Ktoy-4wXYfj6aVB_OlFM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhoneywell'><img src={Twitter} alt='Honeywell Twitter' className='twitter-icon'/></a></li>
              <li className='link-4'><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYUDdcGhz2CAAAAZAtwa2QJEDfIgk_G3u5K6xjZgnq2iM82LvePsMHt0wKvz8xtu1gZUA7cpxhmDE_EdBkgfnqdfqoCtYYkReM1XCJyrVdtU_4dv6Ktoy-4wXYfj6aVB_OlFM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhoneywell'><img src={Instagram} alt='Honeywell Instagram' className='instagram-icon'/></a></li>
              <li className='link-5'><a href='https://www.linkedin.com/authwall?trk=bf&trkInfo=AQEYUDdcGhz2CAAAAZAtwa2QJEDfIgk_G3u5K6xjZgnq2iM82LvePsMHt0wKvz8xtu1gZUA7cpxhmDE_EdBkgfnqdfqoCtYYkReM1XCJyrVdtU_4dv6Ktoy-4wXYfj6aVB_OlFM=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fhoneywell'><img src={YouTube} alt='Honeywell YouTube' className='youtube-icon'/></a></li>
            </ul>
            </div>
            
          </div>

        </div>

      </div>

      <div className="bottom-footer">
        <div className="links">
          <p><a href="https://www.honeywell.com/us/en/terms-and-conditions">Terms &amp; Conditions</a></p>
          <p><a href="https://www.honeywell.com/us/en/privacy-statement">Privacy Statement</a></p>
          <p><a href="https://honeywellhub.secure.force.com/PrivacyInformationRequestForm?lang=en">Your Privacy Choices</a></p>
          <p><a href="https://www.honeywell.com/us/en/cookie-notice">Cookie Notice</a></p>
          <p><a href="https://pages1.honeywell.com/GlobalHoneywellUnsubscribe.html">Global Unsubscribe</a></p>
        </div>
        <div>
        <p className="copyright">Copyright &copy; 2024 Honeywell International Inc.</p>

        </div>
      </div>


    </div>

  );

}

export default Footer;