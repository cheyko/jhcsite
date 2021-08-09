import React from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";
import HorizontalCard from "./HorizontalCard";

const CommissionerName = "H. E. Esmond Reid";
const CommissionerTitle = "High Commissioner For The Jamaican High Commission in Nigeria.";
const CommissionerBio = " testing ";

const AboutPage = props => {

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
              <li className="is-active"><a href="#" aria-current="page">About The Consulate</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column">
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
                      <strong> <a type="tel">0813 606 3356</a> </strong> or 
                      <strong> <a type="tel">0816 737 4252</a> </strong>. 
                      Persons can also contact the Chancery by email via 
                      <strong> <a href="mailto:consular-jhcnig@mfaft.gov.jm">Send Email</a></strong> or 
                      the <strong> <a href="">contact page</a> </strong> of this website.
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

                    <article className="message commissioner is-content is-size-5">
                      <div className="message-header">
                        <p> Consulate Highlights </p>
                      </div>
                      <div className="message-body">

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