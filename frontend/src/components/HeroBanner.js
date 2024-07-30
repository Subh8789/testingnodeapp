import React from "react";

import "../utils/css/home.css";

export default function HeroBanner({ data }) {
   //console.log("under herobanner data",data)
    return (
       /* <div className="hero-banner">
           <div className="bannertext">
           <h1 className="header1">
              <span className="text-red">A SAFER</span>
              <span className="text-red">MORE</span>
              <span className="text-red">CONFIDENT</span>
              <span className="text-white">WELCOME BACK.</span>
           </h1>
           <p className="text-white para">
              As we go back to work, back to travel and even back to play, let's
              also go forward. To embrace new opportunities. Together.
            </p>
           </div>
           
            
        </div> */
        <>
        <div className="hero-image">
  <img src="https://honeywell.scene7.com/is/image/honeywell/street-view-buildings-2880x1440:5-2-hero" alt="Photographer" style={{"width":"100%", "height":"100%", "objectFit":"cover"}}/>
  <div className="bannertext">
           <h1 className="header1">
              <span className="text-red">A SAFER</span>
              <span className="text-red">MORE</span>
              <span className="text-red">CONFIDENT</span>
              <span className="text-white">WELCOME BACK.</span>
           </h1>
           <p className="text-white para">
              As we go back to work, back to travel and even back to play, let's
              also go forward. To embrace new opportunities. Together.
              {data}
            </p>
           </div>
</div>
        </>
    );
}

