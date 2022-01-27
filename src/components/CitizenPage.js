import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const CitizenPage = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">Consular Services For Jamaican Citizens </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><span href="#" aria-current="page">&nbsp;Jamaican Nationals</span></li>
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
                      <p>The Jamaican High Commision in Abuja, Nigeria Welcomes 
                        all Jamaicans in Nigeria, Cameroon, Ghana, Senegal and Sierre Leone.</p>
                    </div>
                      <div className="message-body">
                      <p className="p-format">
                      The Jamaican High Comission in Abuja the capital of the Federal 
                      Republic of Nigeria provides information and assistance to Jamaican 
                      Nationals in the West African States under its jurisdiction. These countries 
                      include the <strong> Federal Republic of Nigeria, Republics of Cameroon, Ghana, 
                      Senegal and Sierre Leone</strong>. For visit to the Consular Office, Jamaicans
                      can schedule an appointment by contacting the chancery at telephone numbers
                      <strong> <span type="tel">0813 606 3356</span> </strong> or 
                      <strong> <span type="tel">0816 737 4252</span> </strong>. 
                      Citizens of Jamaica can also contact the Chancery by email via 
                      <strong> <a href="mailto:consular-jhcnig@mfaft.gov.jm">Send Email</a></strong> or 
                      the <strong> <span href="">contact page</span> </strong> of this website.
                      <em>The Jamaican High Commission is here to serve its Country and its People.</em>
                      </p>
                      <br></br>  
                      <p>
                      The Jamaican High Commission in Abuja, Nigeria is closed on all Jamaican and Nigerian 
                      holidays, thank you for your cooperation.
                      </p>
                    </div>
                    </article>
                    <br></br>
                    <article className="message jamaican-services is-content is-size-5">
                      <div className="message-header">
                      <p> Services provided to Jamaicans</p>
                    </div>
                      <div className="message-body" style={{padding:"0"}}>
                        <ul style={{padding:"1rem"}}>
                          <li> <strong> <Link to="/test/2"> Passport Services </Link> </strong> </li>
                          <li> <strong> <Link to="/test/1">Citizen Application - Marriage</Link> </strong> </li>
                          <li> <strong> <Link to="/test/0">Citizen Application - Descent</Link> </strong> </li>
                          <li> <strong> <Link to="/general">Covid Updates and Information</Link> </strong> </li>
                          <li> <strong> <a href="https://www.jacustoms.gov.jm/service/returning-resident"><span>Returning Residents</span> </a></strong> </li>
                        </ul>
                    </div>
                    </article>
                    <br></br>
                    <Alerts />
                    
                    <br></br> 
                    <br></br>
                    <ExternalWebsites />
                    <br></br>
                    <article className="message is-content is-size-5">
                      <div className="message-header">
                        <p> Documents </p>
                      </div>
                      <div className="message-body">
                          <ul>
                            <li> <strong> <i className="fa fa-file-pdf-o"></i> <a download href={process.env.PUBLIC_URL + '/documents/Jamaican-Citizenship-Application-Descent.pdf'}> Citizen Application Form - Descent</a> </strong> </li>
                            <li> <strong> <i className="fa fa-file-pdf-o"></i> <a download href={process.env.PUBLIC_URL + '/documents/Jamaican-Citizenship-Application-Marriage.pdf'}> Citizen Application Form - Marriage</a> </strong> </li>
                            <li> <strong> <i className="fa fa-file-pdf-o"></i> <a download href={process.env.PUBLIC_URL + '/documents/Jamaican-Passport-Form&Guidelines.pdf'}> Jamaican Passport Form & Guidelines</a> </strong> </li>
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

export default withContext(CitizenPage);