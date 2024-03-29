import React from 'react';
//import Geocode from "react-geocode";


const Map = props => {

    const address = '13 Hassan Musa Katsina Street, Asokoro, Abuja, Nigeria';
    
    const searchUrl = `https://maps.google.com/maps?q=${address}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
    
    return (
        <div className="mapouter">
          <div className="gmap_canvas">
            <iframe
              title={address}
              src={searchUrl}
              width="100%"
              height="500rem"
              id="gmap_canvas"
            />
          </div>
        </div>
    )
}

export default Map;