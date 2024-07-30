import React, { useState } from 'react';
import CaratDown from '../utils/icons/caratdown.svg';
import CaratUp from '../utils/icons/caratup.svg';
import Magify from '../utils/icons/magify.svg';
import '../utils/css/SearchBarB.css';

const SearchBar2 = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [searchPlaceHolder, setSearchPlaceHolder] = useState('Search for a Product (i.e. Cameras)');
  
    const selectHandler = (e) => {
      //console.log("selectHandler", e.target.value)
      setSearchPlaceHolder(e.target.value)
    }

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
        
    };

    return (
        <div className="search-page2">
            <div className='search-container2'>
                <div className='searchby-dropdown2'>
                    <select
                        className="select-picker2"
                        data-style="btn-primary"
                        onClick={handleDropdownClick}
                        onChange={selectHandler}
                        style={{
                            backgroundImage: `url(${isDropdownOpen ? CaratUp : CaratDown})`
                        }}
                    >
                                   <option value="Search for a Product (i.e. Cameras)">Products</option>
            <option value="Search for a Trending Topic (i.e. Sustainable Buildings)">General Content</option>
            <option default value="Search for a Part Number (i.e. H4L2GR1V)">Part Numbers</option>
                    </select>
                </div>
                <div className='search-box2'>
                    <input
                        id="search-box2"
                        type="text"
                        className="form-control2"
                        placeholder={searchPlaceHolder}
                        value={searchTerm}
                        onChange={handleChange}
                    />
                    <div className="button-container2">
                        <img src={Magify} alt="Honeywell search icon" className="search-icon2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SearchBar2;
