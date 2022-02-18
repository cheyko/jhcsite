import React, { useEffect } from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import withContext from "../withContext";

const Terms = props => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> Terms and Conditions </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;Terms and Conditions</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        
                        <div className="message is-content">
                            <div className="message-header">
                                <p> Privacy of this Information </p>
                            </div>
                            <div className="message-body has-text-left">
                            The Information presented in Articles, Notices and Albums
                             on this website are all property of the Jamaican High 
                             Commission in Abuja Nigeria. The Re-use or Re-production 
                             of these information are strictly prohibited unless 
                             otherwise approved officially by the consulate by way of 
                             official means. Concerns relating to any information 
                             presented in Articles, Notice or Albums can be forwarded 
                             to the Consulate and these issues will be addressed as 
                             best as possible.
                            </div>
                        </div>
                    </article>
                    <br />
                    <hr />
                    <br />
                    
                    <article>
                        <div className="message is-content">
                            <div className="message-header">
                                <p>Disclaimer</p>
                            </div>
                            <div className="message-body has-text-left">
                            The Stakeholders of this website; 
                            The Developer: Ariel Carmichael Wilson and 
                            Owner: The Jamaican High Commission in Abuja Nigeria 
                            do not Warrant that the Performance of this website 
                            as it relates to Functioning without Delays, 
                            Disruptions or imperfection are not a guarantee 
                            nor do the stakeholders accepts responsibility for 
                            any performance issues when browsing this website. 
                            The Stakeholders have ensured that the user experience 
                            is as best as possible and if any challenges may arise 
                            then the Consulate welcomes any feedback that will improve usability of the website. 
                            </div>
                        </div>
                    </article>
                    <br />
                    <hr />
                    <br />
                    <article>
                        
                        <div className="message is-content">
                            <div className="message-header">
                                <p>Acknowledgement</p>
                            </div>
                            <div className="message-body has-text-left">
                              The Developer Ariel Carmichael Wilson accepts all comments,
                              questions, concerns, or suggestions as it relates to the 
                              content presented on this website. If you are browsing 
                              this website and come across any information or media that
                               is not accurately reflecting its intentions on the website, 
                               then you are obliged to contact the Developer via email at 
                               ariel.wilson.jc@gmail.com or by cellphone at 1-876-858-0785.
                              <br /><br />
                              <strong> Address: </strong> Creary’s Road, Above Rocks, St. Catherine, Jamaica.

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
export default withContext(Terms);