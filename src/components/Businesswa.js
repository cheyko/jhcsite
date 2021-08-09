import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";
import { green } from "@material-ui/core/colors";
import { Business } from "@material-ui/icons";

const Businesswa = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> Doing Business in West Africa  </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/general">General Information</Link></li>
              <li className="is-active"><a href="#" aria-current="page">Doing Business in West Africa</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column">
                    
                    <article>
                        <h1 className="title"> Trade and Investment</h1>
                        <p style={{color:"black"}} className="has-text-left"> Last Updated : August 6, 2021</p>
                        <br />
                        <div className="message is-info">
                            <div className="message-header">
                                <p>ECOWAS</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                ECOWAS stands for The Economic Community of West African States and it is a 
                                15-member regional organisation established on May 28 1975 via the treaty of Lagos.
                                ECOWAS has a mandate of promoting economic integration in all fields of activity of the constituting countries.
                                </p>
                                <br />
                                <p className="p-format">
                                    Member countries making up ECOWAS are Benin, Burkina Faso, Cape Verde, Cote d’ Ivoire, The Gambia, Ghana, 
                                    Guinea, Guinea Bissau, Liberia, Mali, Niger, Nigeria, Sierra Leone, Senegal and Togo.
                                </p>
                                <br />
                                <p className="p-format">
                                    <a style={{color:"green"}} href="https://www.ecowas.int/">ECOWAS</a> is regarded as a staple in the African Economic Community, 
                                    it was set up to foster the ideal of collective self-sufficiency for its member states. As a trading union, it is also meant 
                                    to create a single, large trading bloc through economic cooperation.
                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Nigeria</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format"> 
                                 In Nigeria, the national public health response to the Coronavirus pandemic is lead by 
                                 The Nigeria Centre for Disease Control (NCDC) through the National Emergency Operations Centre 
                                 (EOC) with oversight of the Presidential Task Force on COVID-19 (PTF-COVID-19). 
                                 Working closely with all states of the Federation to support their response activities to the 
                                 Covid-19 is also one of the major roles of the NCDC.
                                </p>
                                <br/>
                                <p className="p-format">
                                    Nigeria is a democratic country which operates the presidential system of government. 
                                    Nigerian government depends largely on revenue from oil and gas. Changes have been
                                    proposed to drive economic growth, attract investment and diversify the economy (with
                                    more focus on the non-oil sector including Agriculture, Mining, Manufacturing and
                                    promotion of capital projects and infrastructure).

                                </p>
                                <br />
                                <p className="p-format">
                                The Federal Ministry of Trade and Investment was created to promote trade and investment with special emphasis on increased 
                                production and export of non-oil and gas products. The mandate of the FMITI is to formulate policies that will help create wealth and employment, 
                                reduce poverty and ensure enhanced service delivery in a manner that will stimulate the growth of the domestic economy through industrialization, trade and investment.
                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Ghana</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                Ghana's wealth of resources, democratic political system and dynamic economy, makes it undoubtedly one of Africa's leading lights. Gaining the world's confidence with a peaceful political transition and a grounded and firm commitment to democracy has helped in expediting Ghana's growth in foreign direct investment (FDI) in recent years.
                                </p>
                                <br />
                                <p className="p-format">
                                Ghana has attracted the attention of well-known international businesses, investing in all sectors of our economy. All these investors have come to Ghana because they know we have a wonderful conducive social, political and economic environment in which they can invest, grow and be successful.
                                </p>
                                <br />
                                <p className="p-format">
                                Ghana has a solid tradition of investments in agriculture and agro-processing. The financial services and telecommunications sectors are fast gaining ground, providing dynamic and innovative services to the most diverse customers in the world. Further opportunities exist in manufacturing, ICT, and Tourism. Mineral deposits including gold and diamond abound, and with the discovery of oil, Ghana's famous black star has never shone brighter.
                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Cameroon</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">

                                </p>
                                <br/>
                                <p className="p-format">

                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Senegal</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">

                                </p>
                                <br />
                                <p className="p-format">

                                </p>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Sierra Leone</p>
                            </div>
                            <div className="message-body has-text-left">
                              <p className="p-format">
                                
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
export default withContext(Businesswa);