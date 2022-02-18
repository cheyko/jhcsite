import React from "react";
import withContext from "../withContext";
import {Link} from "react-router-dom";
import MapModal from "./MapModal";

const Footer = props => {
    return (
        <>
            <div className="hero" style={{marginBlock:"1rem"}}>
                <div className="box footer-container">
                    <div className="columns">
                        <div className="column">
                            <hr></hr>
                            <b >Consulate Information</b>
                            <hr></hr>
                            <div className="has-text-left">
                                <b style={{textDecoration:"underline"}}>Address</b> 
                                <dl style={{marginLeft:"1rem"}}>
                                    <dd>The Jamaican High Commission</dd>
                                    <dd>13 Hassan Musa Katsina Street</dd>
                                    <dd>Asokoro, Abuja</dd>
                                    <dd>Federal Republic of Nigeria</dd>
                                    
                                    <MapModal />
                                </dl>
                                <br />
                                <b style={{textDecoration:"underline"}}>Telephone Numbers</b> 
                                <dl style={{marginLeft:"1rem"}}>
                                    <dd>Tel1: 0813 606 3356 </dd>
                                    <dd>Tel2: 0816 737 4252 </dd>
                                </dl>
                            </div>
                        </div>
                        
                        <div className="column">
                            <hr></hr>
                            <b> Quick Links </b>
                            <hr></hr>
                            <dl className="links" style={{textAlign:"left"}}>
                                <dd><Link to="/about"><span> About Us </span></Link></dd>
                                <br />
                                <dd><Link to="/documents"><span> Forms & Documents </span></Link></dd>
                                <br />
                                <dd><Link to="/postings"><span> Latest News </span></Link></dd>
                                <br />
                                <dd><Link to="/terms"><span> Terms and Conditions </span></Link></dd>
                            </dl>
                        </div>
                        
                        <div className="column">
                            <hr></hr>
                            <b> Jamaican Government Services </b>
                            <hr></hr>
                            <dl className="links" style={{textAlign:"left"}}>
                                <dd><a href="https://www.gov.jm/"><span> Government of Jamaica </span></a></dd>
                                <br />
                                <dd><a href="https://www.jacustoms.gov.jm/"><span> Jamaica Customs </span></a></dd>
                                <br />
                                <dd><a href="https://dobusinessjamaica.com/"><span> Jamaica Trade & Invest (JAMPRO) </span></a></dd>
                                <br />
                                <dd><a href="https://www.pica.gov.jm/"><span> Passport Immigration & Citizenship (PICA) </span></a></dd>
                                <br />
                                <dd><a href="https://www.tradeboard.gov.jm/"><span> Trade Board</span></a></dd>
                                <br />
                                <dd><a href="https://www.jamaicatax.gov.jm/"><span> Tax Administration Jamaica</span></a></dd>
                                <br />
                                <dd><a href="https://www.rgd.gov.jm/"><span> Registrar General's Department</span></a></dd>
                            </dl>
                        </div>
                    </div>
                    <hr></hr>
                     <div>&copy; 2022 Jamaican High Commission, Nigeria</div>
                     <br />
                     <div style={{width:"100%"}} className="blkYellow"> 
                        <p>Website developed by Ariel Carmichael Wilson</p>
                     </div>
                </div>
            </div>
        </>    
    );
}

export default withContext(Footer);