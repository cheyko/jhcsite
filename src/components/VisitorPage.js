import React, {useEffect} from "react";
import SideBar from "./SideBar";
import {Link} from "react-router-dom";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const VisitorPage = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">Consular Services For Visitors to Jamaica </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><a href="#" aria-current="page">Visiting Jamaica</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column">
                  <article className="message special-notice is-content is-size-5">
                    <div className="message-header">
                      <p> Entry to Jamaica </p>
                    </div>
                    <div className="message-body" style={{textAlign:"justify"}}>
                      <p>
                          <strong> All persons from The West African States of 
                            Nigeria, Cameroon, Ghana, Senegal and Sierra Leone 
                            seeking to Travel to Jamaica must obtain a
                            Visa from the Consular Section of the Jamaican High Commission.
                            With addition to the Aquisition of a Visa to Jamaica, Persons are 
                            required to follow Jamaica's COVID-19 Entry Requirements before being 
                            permitted entry to the Island of Jamaica. COVID-19 requirements change 
                            ocassionally hence it is recommended to view the latest requirements from the 
                            <a href="https://jamcovid19.moh.gov.jm/"> JamCovid19 </a>Webiste of the Ministry of Health and Wellness in Jamaica.
                          </strong>
                      </p>
                    </div>
                  </article>
                  <br></br> 
                  <article className="message intro is-content is-size-5">
                      <div className="message-header">
                      <p> Consular Section of The Jamaican High Commision</p>
                    </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                      <p>
                          The Consular section is open on Tuesdays and Thursday, between the 
                          hourse of 9:00am to 12:00 noon. The Consular Section is responsible 
                          for Processing Visa Applications for residents of Countries that fall under
                          its jurisdiction. These residents include Nigerians, Ghanians, Sengalese, 
                          Cameroonians and Sierra Leoneans. Other persons from other west-african states
                          can also apply for visa through the Jamaican Consulate once they meet all
                          valid requirements.
                      </p>
                      <br></br>  
                      <p>
                      The Jamaican High Commission in Abuja, Nigeria is closed on all Jamaican and Nigerian 
                      holidays, thank you for your cooperation.
                      </p>
                    </div>
                    </article>
                    <br></br> 
                  <article className="message visitor-notice is-content is-size-5">
                      <div className="message-header">
                      <p> Validity of Documents</p>
                    </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                      <p>
                      Based on international standards, persons wishing to visit Jamaica must 
                      be in possession of a passport  or other travel document with validity 
                      for the period of intended stay in Jamaica. In respect of persons entering 
                      for the purpose of employment and/or on work permits, passports must have 
                      a validity of at least 6 months.
                      </p>
                    </div>
                    </article>
                    <br></br> 
                  <article className="message visitor-requirements is-content is-size-4">
                      <div className="message-header">
                      <p> Visa Requirements for Jamaica</p>
                    </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                        <p>Below are the visa requirements for african nationals seeking to travel to
                          the beautiful Island of Jamaica.
                        </p>
                        <ol style={{marginLeft:"3rem"}}>
                          <li> A Valid Passport from his/her Country of Residence </li>
                          <li> Completed Visa Application Form, signed by the applicant </li>
                          <li> Two (2) References in Jamaica </li>
                          <li> One passport-sized photograph </li>
                          <li> Flight itinerary; and proof of sufficient funds to cover the visit</li>
                          <li> *The visa fee is $20.00 USD. </li>
                          <li> *Passport(s) not required for Nigerian nationals on submission; only a copy of the bio-data page.
                                Applicants outside of Nigeria are encouraged to include their passports along with the application
                                form in order to eliminate the cost of sending twice. </li>
                            <li>
                              <p> Supporting documents </p>
                              <ul style={{listStyleType:"square",marginLeft:"3rem"}}>
                                <li> If you have previously travelled to Jamaica, kindly include a copy 
                                  of current or previous passport, specifically the pages showing the 
                                  Jamaican visas and the relevant immigration entry stamps.</li>
                                  <li> Copy of transit visa, if applicable. </li>
                                  <li> A letter of invitation from a person or organization 
                                    in Jamaica (if applicable) or confirmation of accommodation reservation</li>
                                  <li> Proof of Financial Status (i.e. current bank statements) </li>
                              </ul>
                            </li>
                        </ol>
                        <br />
                        <div className="columns">
                          <div className="column has-text-centered">
                            <button style={{color:"black",margin:"0 auto"}} className="button is-large is-rounded is-outlined is-primary">
                              Download Form
                            </button>
                          </div>
                          <div className="column has-text-centered">
                            <button style={{color:"black",margin:"0 auto"}} className="button is-large is-rounded is-outlined is-primary">
                              Contact Us
                            </button>
                          </div>

                        </div>
                    </div>
                    </article>
                    <br></br> 
                  <Alerts />

                  <br></br> 
                    
                  <ExternalWebsites />
                  <br></br> 
                  <article className="message is-content is-size-5">
                      <div className="message-header">
                        <p> Documents </p>
                      </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                          <ul>
                            <li> <strong> <i className="fa fa-file-pdf-o"></i> <a href=""> Visa Application Form </a> </strong> </li>
                          </ul>
                      </div>
                    </article>
                  
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

export default withContext(VisitorPage);