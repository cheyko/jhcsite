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