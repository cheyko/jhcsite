import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";
import HorizontalCard from "./HorizontalCard";

const CommissionerName = "H. E. Esmond Reid";
const CommissionerTitle = "High Commissioner For The Jamaican High Commission in Nigeria.";
const CommissionerBio = "His Excellency (H.E) Mr. Esmond Reid became High Commissioner of the Jamaican High Commission in Abuja, Federal Republic of Nigeria in March 2019. The High Commissioner, in addition to being accredited to Nigeria, is also non-resident High Commissioner to the Republics of Cameroon and Ghana and non-resident Ambassador to Senegal and Sierra Leone. H.E Esmond Reid, is an International Relations and Business Specialist with over 30 years experience in ...  ";

const AboutPage = props => {

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  return (
    <>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">The Jamaican High Commission</h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;About The Consulate</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article className="message intro is-content is-size-5">
                      <div className="message-header">
                      <p>About the Jamaican High Commision in Abuja, Nigeria.</p>
                    </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                      <p>
                      The Jamaican High Comission in Abuja the capital of the Federal 
                      Republic of Nigeria provides consular services to assist Jamaicans 
                      and non-Jamaican citizens and help to promote Jamaica in the cities 
                      where they have jurisdiction. The Consulate is headed by the 
                      High Commissioner; who in addiotion to be accredited to the <strong>Federal
                      Republic of Nigeria</strong>, is also non-resident High Commissioner to the <strong>Republics 
                      of Cameroon and Ghana </strong> and non-resident Ambassador to <strong>Senegal and Sierra Leone.</strong>
                      <br></br>
                      <br></br>
                      The Jamaica High Commission re-located from the ICON Plaza on 29th 
                      September 2018 to its current location at 13 Hassan Musa Katsina Street, 
                      Asokoro, Abuja, Federal Republic of Nigeria.  
                      The High Commission / Chancery can be contacted via its Nigerian Telephone numbers
                      <strong> <span type="tel">0813 606 3356</span> </strong> or 
                      <strong> <span type="tel">0816 737 4252</span> </strong>. 
                      Persons can also contact the Chancery by email via 
                      <strong> <span href="mailto:consular-jhcnig@mfaft.gov.jm">Send Email</span></strong> or 
                      the <strong> <span href="">contact page</span> </strong> of this website.
                      <em>The Jamaican High Commission is here to serve its Country and its People.</em>
                      </p>
                    </div>
                    </article>
                    <br></br>
                    <article className="message jamaican-services is-content is-size-5">
                      <div className="message-header">
                        <p> General Services offered by the Consulate</p>
                      </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                        <ul style={{listStyleType:"square"}}>
                          <li> <strong> Provide consular services to Jamaican citizens including passport, citizenship and notarial services. </strong> </li>
                          <li> <strong> Provide general information to the Jamaican community specific to their needs and to the public at large. </strong> </li>
                          <li> <strong> Provide support to Jamaicans visiting the country or region where they are located. </strong> </li>
                          <li> <strong> Provide emergency assistance to distressed Jamaican citizens. </strong> </li>
                          <li> <strong> Issue visas and provide general advice to foreigners who wish to visit Jamaica. </strong></li>
                          <li> <strong> Promote the trade, investment, tourism and cultural potential of Brand Jamaica in their location. </strong></li>
                          <li> <strong> Support the local Jamaican community efforts. </strong></li>
                        </ul>
                      </div>
                      
                    </article>
                    
                    <article className="message commissioner is-content is-size-5">
                      <div className="message-header">
                        <p> Consulate Highlights </p>
                      </div>
                      <div className="message-body">

                      </div>
                    </article>
                    <br></br>

                    <br></br>
                    <article className="message commissioner is-content is-size-5">
                      <div className="message-header">
                        <p> The Jamaican High Commissioner</p>
                      </div>
                      <div className="message-body">
                        <HorizontalCard title={CommissionerName} subtitle={CommissionerTitle} body={CommissionerBio}/>
                      </div>
                    </article>
                    <br></br>


                    <Alerts />
                    
                    <br></br> 
                    
                    <ExternalWebsites />
                  
                </div>

                <div className="column is-one-quarter">
                  <SideBar />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
}

export default withContext(AboutPage);