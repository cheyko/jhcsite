import React, {useEffect} from "react";
import SideBar from "./SideBar";
import {Link} from "react-router-dom";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const DocumentsPage = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> All Documents </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;All Documents</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column">
                  <article className="message is-content is-size-5">
                      <div className="message-header">
                        <p>All Documents </p>
                      </div>
                      <div className="message-body" style={{textAlign:"justify"}}>
                          <ul>
                            <li> 
                              <strong> 
                                <i className="fa fa-file-pdf-o"></i> 
                                <Link to="/test/0"> Citizen Application Form - Descent</Link> 
                              </strong> 
                            </li>
                            <li> 
                              <strong> 
                                <i className="fa fa-file-pdf-o"></i> 
                                <Link to="/test/1"> Citizen Application Form - Marriage</Link> 
                              </strong> 
                            </li>
                            <li> 
                              <strong> 
                                <i className="fa fa-file-pdf-o"></i> 
                                <Link to="/test/2"> Jamaican Passport Form & Guidelines</Link> 
                              </strong> 
                            </li>
                            <li> 
                              <strong> 
                                <i className="fa fa-file-pdf-o"></i> 
                                <Link to="/test/3"> Visa Application Form</Link> 
                              </strong> 
                            </li>
                          </ul>
                      </div>
                    </article>

                    <br></br> 
                    
                    <Alerts />

                    <br></br> 
                    
                    <ExternalWebsites />

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

export default withContext(DocumentsPage);