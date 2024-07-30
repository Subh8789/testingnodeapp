import React from "react";

const ImageGrid = () => {
  return (
    /*  <div className="Grid">
      <div className="Grid-1">
        <div className="title-1">Enhanced Responsivness</div>
        <div className="div-level1">
          <img
            src="https://honeywell.scene7.com/is/image/honeywell/airplanes-on-airport-runway-hp-1:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="airplane on airport runway"
            className="image-1"
          />
        </div>
        <div className="title-2">Multi-layer Secuirty System</div>
        <div className="div-level1">
          <img
            src="https://honeywell.scene7.com/is/image/honeywell/data-center-homepage-1:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="data-center"
            className="image-2"
          />
        </div>
        <div className="title-3">Digitized Maintenace</div>
        <div className="div-level1">
          <img
            src="https://buildingsbt.stage.honeywell.com/content/dam/honeywell-building-technology/en-us/images/mosaic/healthcare-restricted-area.jpg"
            alt="healthcare restrcited area"
            className="image-3"
          />
        </div>
      </div>
      <div className="Grid-2">
        <div className="title-4">
          Hackers get stop signs instead of welcome mats
        </div>
        <div className="div-level2">
          <img
            src="https://honeywell.scene7.com/is/image/honeywell/services-cybersecurity-964x%20964:medium-stripe?wid=964&amp;hei=372&amp;dpr=off"
            alt="Honeywell cyber secuirty service"
            className="image-4"
          />
        </div>
        <div className="div-level2">
          <img
            src="https://honeywell.scene7.com/is/image/honeywell/ebi-600-right-rail-964x964:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="ebi-600-right-rail"
            className="image-5"
          />
        </div>
      </div>
      <div className="Grid-3">
        <div className="title-5">
          See the technological innovations
          <span className="span-1"> that will power buildings of</span>{" "}
          <span className="span-2">tomorrow...today</span>
        </div>
        <div className="div-level3">
          <img
            src="https://honeywell.scene7.com/is/image/honeywell/HBT_Alerton_Industries_Tile-2_750x480:1-1-square?wid=480&amp;hei=480&amp;dpr=off"
            alt="HBT Alerton Inustries"
            className="image-6"
          />
        </div>
      </div>
    </div> */
    <div className="collage">
       <img
            src="https://honeywell.scene7.com/is/image/honeywell/airplanes-on-airport-runway-hp-1:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="airplane on airport runway"
            className="collage-image"
          />
    
      <img
            src="https://honeywell.scene7.com/is/image/honeywell/data-center-homepage-1:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="HBT Alerton Inustries"
        className="collage-image"
      />
      <img
            src="https://buildingsbt.stage.honeywell.com/content/dam/honeywell-building-technology/en-us/images/mosaic/healthcare-restricted-area.jpg"
            alt="HBT Alerton Inustries"
        className="collage-image"
      />
      <img
            src="https://honeywell.scene7.com/is/image/honeywell/services-cybersecurity-964x%20964:medium-stripe?wid=964&amp;hei=372&amp;dpr=off"
            alt="HBT Alerton Inustries"
        className="collage-image"
        style={{"width":"66.6%"}}
      />
      <img
        src="https://honeywell.scene7.com/is/image/honeywell/HBT_Alerton_Industries_Tile-2_750x480:1-1-square?wid=480&amp;hei=480&amp;dpr=off"
        alt="HBT Alerton Inustries"
        className="collage-image"
      />
      <img
            src="https://honeywell.scene7.com/is/image/honeywell/ebi-600-right-rail-964x964:1-1-square?wid=711&amp;hei=711&amp;dpr=off"
            alt="HBT Alerton Inustries"
        className="collage-image"
      />
    </div>

  );
};

export default ImageGrid;
