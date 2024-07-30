
import React from "react";
import './Testingdrop.css'  ;

export default function SoldToDrpdown(soldData) {
    return (
        <>
        <div className="soldto-table-scroll-y soldto-acc-scrollbar">
            <table className="table table-striped" id="soldto-sort">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col" onclick="sortNumber()" className="accountno-sorting">Account#
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_up"></span>
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_down"></span>
                        </th>
                        <th scope="col" onclick="sortString(1)" className="accountname-sorting">Account Name
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_up"></span>
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_down"></span>
                        </th>
                      	<th scope="col" onclick="sortString(2)" className="cx-city-selector">City
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_up"></span>
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_down"></span>
                        </th>
                      	<th scope="col" onclick="sortNumber()" className="cx-zip-code">Zip/Post Code
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_up"></span>
                            <span aria-hidden="true" tabindex="-1" className="mvp-icon-carat_down"></span>
                        </th>                      	
                    </tr>
                </thead>
                <tbody id="soldTo-Dropdown-dt">
                    <tr>
                    <th scope="row">
                    <input type="radio" aria-label="soldto-selector" name="soldToGroup" value="0000004550" onclick="soldToRadio()"/>
                    </th>
                    <td>4550</td>
                    <td>Building Technology Systems</td>
                    <td>Warrington</td><td>WA5 7TN</td>
                    </tr>
                </tbody>
            </table>
</div>
        </>
    )
}

