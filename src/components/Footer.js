import React from "react";
import withContext from "../withContext";
import {Link} from "react-router-dom";

const Footer = props => {
    return (
        <>
            <div className="hero" style={{marginBlock:"1rem"}}>
                <div className="box footer-container">
                    <div className="columns">
                        <div class="column">
                            <b>Consulate Information</b>
                            <hr></hr>
                            <b>Address</b> 
                            <dl style={{textAlign:"left"}}>
                                <dd>The Jamaican High Commission</dd>
                                <dd>13 Hassan Musa Katsina Street</dd>
                                <dd>Asokoro</dd>
                                <dd>Federal Republic of Nigeria</dd>
                                <dd><Link to="/contact"><img className="image is-64x64" src="/images/location.png"></img><span>Click to see location on Map</span></Link></dd>
                            </dl>
                            <br />
                            <b>Telephone Numbers</b> 
                            <dl style={{textAlign:"left"}}>
                                <dd>Tel1: 0813 606 3356 </dd>
                                <dd>Tel2: 0816 737 4252 </dd>
                            </dl>
                        </div>
                        
                        <div class="column">
                            <b> Documents </b>
                            <hr></hr>
                        </div>
                        
                        <div class="column">
                            <b> J.H.C in Nigeria </b>
                            <hr></hr>
                            <dl className="links" style={{textAlign:"left"}}>
                                <dd><Link to="/"><span>Link 1 </span></Link></dd>
                                <dd><Link to="/"><span>Link 2 </span></Link></dd>
                                <dd><Link to="/"><span>Link 3 </span></Link></dd>
                                <dd><a href="https://www.gov.jm/"><span> Government of Jamaica </span></a></dd>
                            </dl>
                        </div>
                    </div>
                    <hr></hr>
                     &copy; 2021 Jamaican High Commission, Nigeria
                </div>
            </div>
        </>    
    );
}

export default withContext(Footer);