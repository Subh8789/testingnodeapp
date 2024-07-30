import React from 'react';
import '../utils/css/dropdownmodel.css';
import { Link } from 'react-router-dom';
function DropdownModel({ signedin,username,setSignedIn }) {

    //console.log("signedin under dropdownmodel",signedin)
    const signOutHandler = () => {
      setSignedIn &&  setSignedIn(false);
    }

    return (
        <div className="card">
            {signedin && <div className="card-header">
                <h3>Welcome Aboard, {username}</h3>
            </div>}
            <div className="card-body">
                <ul>
                  { !signedin && <> <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="" >Create an Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Legacy Account</Link>
                    </li>
                   </>}
                    { signedin && <> 
                        <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    <li className="list-item">
                        <span className="person-icon"></span>
                        <Link to="">My Account</Link>
                    </li>
                    <li className="list-item">
                        <span className="document-icon"></span>
                        <Link to="">My Profile</Link>
                    </li>
                    </>}
                </ul>
            </div>
            {<div className="card-footer">
                <div onClick={signOutHandler} className='btn-signin'><Link to="">{signedin ? "SIGN OUT" : "Sign in to MyBuildings"}</Link></div>
            </div>}
        </div>
    );
}

export default DropdownModel;
