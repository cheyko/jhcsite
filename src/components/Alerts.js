import React from "react";
import { Link } from "react-router-dom";

const Alerts  = props => {

    return (
        <>
            <div className="hero">
                <article className="message is-normal is-size-5">
                      <div className="message-header">
                      <p> Alerts and Messages </p>
                    </div>
                      <div className="message-body">
                        <dl>
                          <dt> <h3> COVID-19 INFORMATION</h3> </dt>
                        <dd>
                          <ul>
                            <li> 
                              <div>
                                <article className="message is-danger">
                                  <div className="message-header">
                                    <p>What is COVID-19 ? </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                    <p>The coronavirus disease 2019 or 
                                    more commmonly known as COVID-19 is a new strain of the coronavirus 
                                    and was discovered in 2019 hence given the name COVID-19 (COVID for Coronavirus 
                                    Disease and -19 represents the year 2019). For more details on Covid-19 click on the link below.</p>
                                    <br />
                                    <p><Link style={{color:"blue"}} to="/covid19">Covid Details</Link></p>
                                  </div>

                                </article>
                              </div>
                            </li>
                            <br></br>
                            <li> 
                              <div>
                                <article className="message is-warning">
                                  <div className="message-header">
                                    <p> COVID-19 Information - Jamaica </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                  The Government of Jamaica has developed “<a style={{color:"blue"}} href="https://www.visitjamaica.com/travelauthorization/resilient-corridors">Resilient Corridors</a>”
                                      for tourism. <Link style={{color:"blue"}} to="/covidja">Click</Link> to see more details about Jamaica's Response to the Coronavirus.
                                  </div>
                                </article>
                              </div>
                            </li>
                            <br></br>
                            <li> 
                              <div>
                                <article className="message is-warning">
                                  <div className="message-header">
                                    <p>COVID-19 Information - West Africa </p>
                                    <button className="fa fa-exclamation-triangle" aria-label="exclamation-triangle"></button>
                                  </div>
                                  <div className="message-body">
                                  <p>African countries have been using experiences from past epidemics to build resilience and response strategies 
                                which may be contributing to protecting the continent’s health systems from being overwhelmed. <Link style={{color:"blue"}} to="/covidwa">Read More</Link></p>

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