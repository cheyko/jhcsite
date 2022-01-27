import React from "react";
import withContext from "../withContext";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import ExternalWebsites from "./ExternalWebsites";
import Alerts from "./Alerts";

const Staff = props => {

    return(
        <div className="hero">
            <div className="header">
                <div className="hero blkYellow page-header" >
                    <div className="page-header-body container">
                        <h4 className="title"> General Staff </h4>
                    </div>
                </div>
                <br />
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                    <li><Link to="/">Home</Link></li>
                    <li className="is-active"><span aria-current="page">&nbsp;General Staff</span></li>
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
                                        <p>Diplomatic Staff</p>
                                    </div>
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <span className="box info-link">
                                                
                                                <li style={{marginLeft:"3rem"}}> Staff </li>
                                            </span>
                                            <span className="box info-link">
                                                <li style={{marginLeft:"3rem"}}> Staff </li>
                                            </span>
                                            <span className="box info-link">
                                                <li style={{marginLeft:"3rem"}}> Staff </li>  
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </article>
                            
                            <hr />
                            <br />
                            <Alerts />
        
                            <hr />
                            <br />
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
    )
}
export default withContext(Staff);