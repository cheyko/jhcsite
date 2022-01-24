import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const Businessja = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> Doing Business in Jamaica  </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/general">General Information</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;Doing Business in Jamaica </span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        <h1 className="title"> Trade and Investment </h1>
                        <p style={{color:"black"}} className="has-text-left"> Last Updated : August 6, 2021</p>
                        <br />
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Overview</p>
                            </div>
                            <div className="message-body has-text-left">
                                <ul style={{listStyleType:"circle",marginLeft:"3rem"}}>
                                    <li> The World Banks's doing business platform has ranked Jamaica 6th amongst 190 countries
                                        in the topic of Starting a Business and 15th in getting credit. The business climate in Jamaica
                                        is suited for International Trade and Investment.
                                    </li>
                                        <br/>
                                    <li> <a style={{color:"green"}} href="https://dobusinessjamaica.com/about-jampro/">JAMPRO</a> is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                        Investment and Commerce that promotes business opportunities in export and 
                                        investment to the local and international private sector. </li>
                                        <br/>
                                    <li> View <a style={{color:"green"}} href="https://dobusinessjamaica.com/whats-happening/?tab=Success&index=success">success stories</a> of International Businesses in Jamaica and gather all information
                                        in regards to setting up business from JAMPRO <a href="https://dobusinessjamaica.com/"> </a>DoBusiness Jamaica platform.</li>
                                                                      
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
export default withContext(Businessja);