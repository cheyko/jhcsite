import React from "react";
import { Link } from "react-router-dom";

const Alerts  = props => {

    return (
        <>
            <div className="hero">
                <article className="is-normal is-size-5">
                    <div className="box grnBkgn hero-body">
                      <h3> Alerts and Messages </h3>
                    </div>
                      <div>
                        <dl>
                          <dt className="card yellowbkgn"> <h3> LEAVING NIGERIA </h3> </dt>
                          <dd>
                            <ul>
                              <li>
                                <div>
                                  <article className="message is-success hero-body">
                                    <div className="message-header">
                                      <p> Travel Advisory </p>

                                      <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                    </div>
                                    <div className="message-body" >
                                      <p style={{textAlign:"left"}}>As of December 5, 2021; All passengers age 10 and up, irregardless of 
                                      requirements of destination countries, must present a 
                                      Negative PCR Test, Completed within 48 Hours before departure. Or provide
                                      proof of full vaccination. Children under the age of 10 years old are exempt 
                                      from testing. {" "} </p>
                                      <br />
                                     <Link style={{color:"blue"}} to="/covidwa">Click</Link> to see more details about Jamaica's Response to the Coronavirus.
                                    </div>
                                  </article>
                                </div>
                              </li>
                      
                            </ul>
                          </dd>
                        </dl>
                        <dl>
                          <br></br>
                          <dt className="card yellowbkgn"> <h3> COVID-19 INFORMATION </h3> </dt>
                           
                        <dd>
                          <ul>
                            <li> 
                              <div>
                                <article className="message is-danger hero-body">
                                  <div className="message-header">
                                    <p>What is COVID-19 ? </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                    <p style={{textAlign:"left"}}>The coronavirus disease 2019 or 
                                    more commmonly known as COVID-19 is a new strain of the coronavirus. 
                                    It was discovered in 2019 hence given the name COVID-19 (COVID for Coronavirus 
                                    Disease and -19 represents the year 2019). For more details on Covid-19 click on the link below.</p>
                                    <br />
                                    <p><Link style={{color:"blue"}} to="/covid19">Covid Details</Link></p>
                                  </div>

                                </article>
                              </div>
                            </li>
                            
                            <li> 
                              <div>
                                <article className="message is-warning hero-body">
                                  <div className="message-header">
                                    <p> COVID-19 Information - Jamaica </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                   <p> The Government of Jamaica has developed “<a style={{color:"blue"}} href="https://www.visitjamaica.com/travelauthorization/resilient-corridors">Resilient Corridors</a>”
                                      for tourism. </p>
                                      <br />
                                      <Link style={{color:"blue"}} to="/covidja">Click</Link> to see more details about Jamaica's Response to the Coronavirus.
                                  </div>
                                </article>
                              </div>
                            </li>
                          
                            <li> 
                              <div>
                                <article className="message is-warning hero-body">
                                  <div className="message-header">
                                    <p>COVID-19 Information - West Africa </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                  <p>African countries have been using experiences from past epidemics to build resilience and response strategies 
                                      which may be the contributing factor why the continent’s health systems are not overwhelmed. </p>
                                      <br />
                                      <Link style={{color:"blue"}} to="/covidwa">Read More</Link>
                                  </div>
                                </article>
                              </div>   
                            </li>
                          </ul>
                        </dd>
                        </dl>
                    </div>
                </article>
            </div>
        </>

    )
}
export default Alerts;