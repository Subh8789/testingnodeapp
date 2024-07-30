import React from "react";
import "../utils/css/soldToDropdown.css";
//import Testindrop from "./Testindrop";
import Close from "../utils/icons/close.svg";

function SoldToDrpdown({contactData,setSelectedAccount,setSoldToOpen}) {

  //console.log("contactData under soldto",contactData)
  //console.log("soldtoacoount data under soldto",contactData.soldToAccounts)
  const soldToAccounts = contactData.soldToAccounts;

  const [selectedValue, setSelectedValue] = React.useState(null);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
    //setSelectedAccount(event.target.value);
    
  };
  const onCloseHandler = (e) => { 
    e.stopPropagation();
    setSoldToOpen(false);
    //console.log("soldToOpen",setSoldToOpen)
   };
  const updateSoldToAccount = () => {  
    localStorage.setItem('selectedAccount', selectedValue);
    setSelectedAccount(selectedValue);
  }
  //console.log("selectedValue",selectedValue)
  return (
    <div className="soldToCard">
       
        <div className="card-header">
          <div className="soldtoheader">
          <h3>Select Account</h3>
          <span onClick={onCloseHandler}> <img src={Close} alt="Honeywell close icon" className="close-icon"/></span>

          </div>
          
          <p>
            Switching accounts will update the product catalog available to you.
            When switching accounts, your current cart will not move to the new
            account you select. Your current cart will be available if you log
            back into this account again.
          </p>
        </div>
      
      <div className="card-body">
        <table className="account-table">
          <thead>
            <tr>
              <th></th>
              <th>Account#</th>
              <th>Account Name</th>
              <th>City</th>
              <th>Zip/Post Code</th>
            </tr>
          </thead>
          <tbody>
           
         {soldToAccounts.map((soldToAccount) => (
               <tr key={soldToAccount.soldToNumber}>
              <td><input
            type="radio"
            name="option"
            value={soldToAccount.soldToNumber}
            checked={selectedValue === soldToAccount.soldToNumber}
            onChange={handleChange}
          /></td>
              <td>{soldToAccount.soldToNumber.replace(/^0+/, '')}</td>
              <td>{soldToAccount.name}</td>
              <td>{soldToAccount.city}</td>
              <td>{soldToAccount.postalCode}</td>
            </tr>
          ))}
           


          
        {/*    <tr>
              <td><input type="radio" name="account" /></td>
            <td>4550</td>
              <td>Building Technology Systems</td>
              <td>Warrington</td>
              <td>WA5 7TN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>5612</td>
              <td>Wessex Water Services Ltd</td>
              <td>Bath</td>
              <td>BA2 7WW</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>32468</td>
              <td>Marlowe Fire & Security Ltd</td>
              <td>London</td>
              <td>SW1X 7HN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>4550</td>
              <td>Building Technology Systems</td>
              <td>Warrington</td>
              <td>WA5 7TN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>5612</td>
              <td>Wessex Water Services Ltd</td>
              <td>Bath</td>
              <td>BA2 7WW</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>32468</td>
              <td>Marlowe Fire & Security Ltd</td>
              <td>London</td>
              <td>SW1X 7HN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>4550</td>
              <td>Building Technology Systems</td>
              <td>Warrington</td>
              <td>WA5 7TN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>5612</td>
              <td>Wessex Water Services Ltd</td>
              <td>Bath</td>
              <td>BA2 7WW</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>32468</td>
              <td>Marlowe Fire & Security Ltd</td>
              <td>London</td>
              <td>SW1X 7HN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>4550</td>
              <td>Building Technology Systems</td>
              <td>Warrington</td>
              <td>WA5 7TN</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>5612</td>
              <td>Wessex Water Services Ltd</td>
              <td>Bath</td>
              <td>BA2 7WW</td>
            </tr>
            <tr>
              <td><input type="radio" name="account" /></td>
              <td>32468</td>
              <td>Marlowe Fire & Security Ltd</td>
              <td>London</td>
              <td>SW1X 7HN</td>
            </tr>


        */}
          </tbody>
        </table> 
        {/*<Testindrop></Testindrop>*/}
      </div>
       
        <div className="button-container">
        <button className="button cancel-button">CANCEL</button>
        <button onClick={updateSoldToAccount} className="button proceed-button">PROCEED</button>
      </div>
     
    </div>
  );
}

export default SoldToDrpdown;
