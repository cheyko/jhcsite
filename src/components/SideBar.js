import React from "react";

const SideBar  = props => {

    return (
        <>
                <div className="hero">
                  <article className="message is-link">
                    <div className="message-header">
                      <p> Contact Us</p>
                    </div>
                    <div className="message-body">
                          <dl style={{textAlign:"left"}}>
                                <dd>The Jamaican High Commission</dd>
                                <dd>13 Hassan Musa Katsina Street</dd>
                                <dd>Asokoro, Abuja</dd>
                                <dd>Federal Republic of Nigeria</dd>
                                <br></br>
                                <dd>Telephone 1: 0813 606 3356 </dd>
                                <dd>Telephone 2: 0816 737 4252 </dd>
                                <br></br>
                                <dd>Email Address: <a href="mailto:consular-jhcnig@mfaft.gov.jm">consular-jhcnig@mfaft.gov.jm</a></dd> 
                                <br></br>
                                <dd>Monday - Thursday , 9:00 am - 5:00 pm</dd>
                                <br></br>
                                <dd>Fridays , 9:00 am - 4:00 pm</dd>
                                
                          </dl>
                          <br></br>
                          <dl style={{textAlign:"left"}}>
                              <dd style={{textAlign:"left"}}><strong>Consular Hours :</strong> </dd>
                              <dd>Tuesdays, Wednesdays & Thursdays</dd>
                              <dd>9:00am - 12:00noon</dd>
                              <dd>No Appointments required, visitors must visit within the consular hours.</dd>
                          </dl>
                    </div>
                  </article>
                    <br />
                  <article className="message is-normal">
                    <div className="message-header">
                      <p> Currency</p>
                    </div>
                    <a href="https://boj.org.jm">
                        <div className="message-body">
                            <div className="media">
                                <div className="media-left">
                                <figure className="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder" />
                                </figure>
                                </div>
                                <div className="media-content">
                                <p className="title is-4">FX | Rates</p>
                                <p className="subtitle is-4">Bank of Jamaica</p>
                                </div>
                            </div>
                        </div>
                    </a>
                  </article>
                    <br />
                  <article className="message is-link">
                    <div className="message-header">
                      <p>Additional Resources</p>
                    </div>
                    <div className="message-body">
                      <ul style={{listStyleType:"circle"}}>
                        <li> <strong><a href="https://apps2.rgd.gov.jm/web/birth/lay_birthApplication.cfm"> Birth Certificate </a></strong></li>
                        <li> <strong><a href="https://www.pica.gov.jm/"> Passport, Citizenship and Identity</a></strong></li>
                        <li> <strong><a href="https://www.jamaicatax.gov.jm/"> Motor Vehicle Services</a></strong></li>
                        <li> <strong><a href="https://www.jamaicatax.gov.jm/"> Taxes, Paying Fines and Bills</a></strong></li>
                        <li> <strong><a href="https://www.tradeboard.gov.jm/"> Permits and Licences</a></strong></li>
                        <li> <strong><a href="https://www.jacustoms.gov.jm/"> Import and Export in Jamaica</a></strong></li>
                        <li> <strong><a href="https://ecj.com.jm/"> Voter's Information</a></strong></li>
                      </ul>
                    </div>
                  </article>
                    <br />
                  <article className="message map-box" style={{backgroundColor:"rgb(0,0,0,0)"}}>
                    <div className="message-header">
                      <p>Map of Jamaica</p>
                    </div>
                    <div className="message-body">
                        <a href="http://www.mapsofworld.com/jamaica/">
                          <img alt="map of jamaica" src="https://secureservercdn.net/198.71.233.110/u3v.7d0.myftpupload.com/wp-content/uploads/2016/02/Jamaicaphysicalmap.gif" style={{width: "100%"}} />
                        </a>
                    </div>
                  </article>
                </div>
        </>

    )
}
export default SideBar;