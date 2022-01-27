import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const Covidja = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> The Coronavirus Disease 2019 (COVID-19)  </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/general">General Information</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;Covid-19 in Jamaica</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        <h1 className="title"> COVID-19 in Jamaica</h1>
                        <p style={{color:"black"}} className="has-text-left"> Last Updated : August 6, 2021 </p>
                        <br />
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Overview</p>
                            </div>
                            <div className="message-body has-text-left">
                                <ul style={{listStyleType:"circle"}}>
                                <li> A Travel Authorisation document is required for all persons Travelling to Jamaica.
                                  This Travel Authorisation is NOT required to book your flight, however it is required
                                  for check-in and boarding the flight. To obtain a Travel Authorisation document, persons 
                                  who reside in Jamaica (nationals as well as non-nationals; residents by virtue of marriage,
                                  work permit, etc.) should apply on the <a style={{color:"green"}} href="https://jamcovid19.moh.gov.jm/">JAM-COVID Portal</a>. 
                                  While non-residents should apply on <a style={{color:"green"}} href="https://www.visitjamaica.com/">visitjamaica.com</a>.
                                </li>
                                        <br/>
                                    <li> The Government of Jamaica has developed “<a style={{color:"hotpink"}} href="https://www.visitjamaica.com/travelauthorization/resilient-corridors">Resilient Corridors</a>”
                                      for tourism. Visitors should expect their movement around the island 
                                      to be limited.</li>
                                        <br/>
                                    <li> Large gatherings are restricted and there are limits on the number 
                                      of attendees for funerals and weddings.</li>
                                        <br/>
                                    <li>  Wearing mask in public is mandatory in Jamaica and other Covid protocols are well observed.
                                      For information on Quarantine in Jamaica, view <a style={{color:"green"}}  href="https://jamcovid19.moh.gov.jm/safety-measures.html">Safety Measures</a> imposed 
                                      by the Jamaican Health Authorities.  </li>
                                                                      
                                </ul>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Entry Requirements</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                Along with an approved Travel Authorization form prior to boarding a flight to Jamaica, 
                                ALL travelers ages 12 and up regardless of nationality, are required to show proof of a 
                                negative COVID-19 molecular (PCR, NAA, RNA) or Antigen test performed by an accredited 
                                lab for which the sample was collected within 3 days of the travel date. Know that we are 
                                well-equipped to accommodate on-island testing prior to your return flight, as well.
                                </p>
                                <br/>
                                <p className="p-format">
                                Learn more about <a style={{color:"green"}} href="https://www.visitjamaica.com/travelauthorization/tas/">Travel Authorizations</a> and the Covid-19 test requirements. 
                                All travelers to Jamaica are reminded that the Government of Jamaica <a style={{color:"orange"}} href="https://www.visitjamaica.com/travelauthorization/traveller-categories/" >Controlled 
                                Entry Programme protocols </a> must be observed at all times.
                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Travelling around</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                Central to the risk management efforts are the Controlled Entry Programme initiatives.
                                 These include the categorization and assignment of all arriving travelers based on 
                                 their purpose of visit and intended accommodation type of the Travel Authorization 
                                 application. Visitors staying at approved accommodation within the resilient corridor 
                                 can freely enjoy the many comforts of their stay, and to visit approved Covid-19 protocol 
                                 compliant attractions within the "corridor".
                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Testing</p>
                            </div>
                            <div className="message-body has-text-left">
                              <p className="p-format">
                                For travellers departing the island, many countries and airlines require 
                                the presentation of a recent negative Covid-19 test result to board a flight. 
                                Jamaica has adequate testing locations and capacity available to meet the 
                                demand. In addition, many of the resorts and hotels offer approved testing 
                                services on property.
                              </p>
                            </div>
                        </div>
                    </article>
                                        <br />
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Vaccination</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                  """""" The Vaccination efforts in Jamaica are very much comendable. A large number of persons
                                  have now decided to take the vaccine and we are seeing a large influx of applications. """"""""
                                </p>
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
export default withContext(Covidja);