import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const GeneralInfo = props => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> General Information </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><a href="#" aria-current="page">General Information</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column">
                    <article>
                        <h1 className="subtitle is-size-3"> Health and Wellness</h1>
                        <div className="message is-content">
                            <div className="message-header">
                                <p>COVID-19</p>
                            </div>
                            <div className="message-body has-text-left">
                                <ul>
                                  <span className="box">
                                    <li> <Link to="/covid19" className="subtitle"> What is COVID-19 ? </Link> </li>
                                    <li style={{marginLeft:"3rem"}}> The coronavirus disease 2019 (COVID-19) is a 
                                    new strain of the coronavirus that has not been previously identified in humans. </li>
                                    <li style={{marginLeft:"3rem"}}><Link to="/covid19"><span style={{color:"blue"}}>Read more ...</span></Link> </li>
                                    </span>
                                    <span className="box">
                                    <li> <Link to="/covidja" className="subtitle"> COVID-19 in Jamaica </Link> </li>
                                    <li style={{marginLeft:"3rem"}}> The Government of Jamaica has developed “<a style={{color:"hotpink"}} href="https://www.visitjamaica.com/travelauthorization/resilient-corridors">Resilient Corridors</a>”
                                      for tourism. Visitors should expect their movement around the island 
                                      to be limited. Large gatherings are restricted and there are limits on the number 
                                      of attendees for funerals and weddings. Wearing mask in public is mandatory in Jamaica and other Covid protocols are well observed.
                                      For information on Quarantine in Jamaica, view <a style={{color:"green"}}  href="https://jamcovid19.moh.gov.jm/safety-measures.html"> Safety Measures</a> imposed 
                                      by the Jamaican Health Authorities. </li>
                                    <li style={{marginLeft:"3rem"}}><Link to="/covidja"><span style={{color:"blue"}}>Read more ...</span></Link> </li>
                                    </span>
                                    <span className="box">
                                    <li> <Link to="/covidwa" className="subtitle"> COVID-19 in West Africa </Link> </li>    
                                    <li style={{marginLeft:"3rem"}}> The Covid-19 pandemic continues to rage across the World. Africa was the last continent 
                                to be hit by the virus and has not experienced as much devestation as other continents. 
                                Meanwhile many countries are currently experiencing the second wave of the outbreak and 
                                a new variant called the 'Delta Variant'. </li>  
                                    <li style={{marginLeft:"3rem"}}><Link to="/covidwa"><span style={{color:"blue"}}>Read more ...</span></Link> </li>                                 
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <br />
                    <hr />
                    <br />
                    
                    <article>
                        <h1 className="subtitle is-size-3"> Trade and Investment</h1>
                        <div className="message is-content">
                            <div className="message-header">
                                <p>Business Oportunities</p>
                            </div>
                            <div className="message-body has-text-left">
                                <ul>
                                <span className="box">
                                    <li> <Link to="/businessja" className="subtitle"> Doing Business in Jamaica </Link> </li>
                                    <li style={{marginLeft:"3rem"}}> - </li>
                                    </span>
                                    <span className="box">
                                    <li> <Link to="/businesswa" className="subtitle"> Doing Business in West Africa </Link> </li>
                                    <li className="left-margin"> - </li>
                                    </span>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <br />
                    <hr />
                    <br />
                    <article>
                        <h1 className="subtitle is-size-3"> Frequently Asked Questions</h1>
                        <div className="message is-content">
                            <div className="message-header">
                                <i className="fa fa-info"></i>
                            </div>
                            <div className="message-body has-text-left">
                              <ul>
                                <Link onClick={ e => { props.context.showQues1Func(e); }}>
                                  <li className="box" style={{padding:"1rem",margin:"1rem"}}>
                                    <span className="subtitle"> <i class="fa fa-angle-down" aria-hidden="true"> </i> Question 1 </span> 
                                  </li>
                                </Link>
                                <li className={`left-margin ${ props.context.showQues1 ? "" : "hide-element" }`}> - </li>
                                
                                <Link onClick={ e => { props.context.showQues2Func(e); }}>
                                  <li className="box" style={{padding:"1rem",margin:"1rem"}}>
                                    <span className="subtitle"> <i class="fa fa-angle-down" aria-hidden="true"></i> Question 2 </span> 
                                  </li>
                                </Link>
                                <li className={`left-margin ${ props.context.showQues2 ? "" : "hide-element" }`}> - </li>
                                
                                <Link onClick={ e => { props.context.showQues3Func(e); }}>
                                  <li className="box" style={{padding:"1rem",margin:"1rem"}}>
                                    <span className="subtitle"> <i class="fa fa-angle-down" aria-hidden="true"></i> Question 3 </span> 
                                  </li>
                                </Link>
                                <li className={`left-margin ${ props.context.showQues3 ? "" : "hide-element" }`}> - </li>

                              </ul>
                            </div>
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
  )
}
export default withContext(GeneralInfo);