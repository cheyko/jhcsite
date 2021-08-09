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
                                <dd>Monday - Friday , 9:00 am - 4:00 pm</dd>
                          </dl>
                          <br></br>
                          <dl style={{textAlign:"left"}}>
                            <dd>For Consular Services, Please Schedule an appointment</dd>
                            <br></br>
                            <b> Consular Days and Hours</b>
                            <dd> Tuesdays and Thurdays , 9:00 am - 12:00 noon </dd>

                          </dl>
                    </div>
                  </article>

                  <article className="message is-normal">
                    <div className="message-header">
                      <p> Currency</p>
                    </div>
                    <a href="https://boj.org.jm">
                        <div className="message-body">
                            <div class="media">
                                <div class="media-left">
                                <figure class="image is-48x48">
                                    <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                </figure>
                                </div>
                                <div class="media-content">
                                <p class="title is-4">FX | Rates</p>
                                <p class="subtitle is-4">Bank of Jamaica</p>
                                </div>
                            </div>
                        </div>
                    </a>
                  </article>

                  <article className="message is-link">
                    <div className="message-header">
                      <p>Additional Resources</p>
                    </div>
                    <div className="message-body">
                      <ul style={{listStyleType:"circle"}}>
                        <li> <strong><a href=""> Passport, Citizenship and Identity</a></strong></li>
                        <li> <strong><a href=""> Motor Vehicle Services</a></strong></li>
                        <li> <strong><a href=""> Taxes, Paying Fines and Bills</a></strong></li>
                        <li> <strong><a href=""> Permits and Licences</a></strong></li>
                        <li> <strong><a href=""> Import and Export in Jamaica</a></strong></li>
                        <li> <strong><a href=""> Voter's Information</a></strong></li>
                      </ul>
                    </div>
                  </article>
                  
                  <article className="message" style={{backgroundColor:"rgb(0,0,0,0)"}}>
                    <div className="message-header">
                      <p>Map of Jamaica</p>
                    </div>
                    <div className="message-body">
                      
                        <a href="http://www.mapsofworld.com/jamaica/">
                          <img src="https://secureservercdn.net/198.71.233.110/u3v.7d0.myftpupload.com/wp-content/uploads/2016/02/Jamaicaphysicalmap.gif" style={{width: "100%"}} />
                        </a>
                     
                    </div>
                  </article>
                </div>
        </>

    )
}
export default SideBar;