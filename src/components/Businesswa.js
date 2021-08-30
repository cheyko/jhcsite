import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

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
              <li className="is-active"><span aria-current="page">&nbsp;Doing Business in West Africa</span></li>
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
                                    Cameroon is a strategic bridge between west and central african markets hence making it
                                    a unique hub for trading within Africa. With English and French as its official languages,
                                    it has become one of largest and most diversified markets on the African continent. Cameroon 
                                    also has strong ties to the United Kingdom, and the commmonwealth at large with an very educated 
                                    workforce and an aspiring growth agenda.
                                </p>
                                <br/>
                                <p className="p-format">
                                    There is a rising energy sector in cameroon, facilitated by the creation of new dams. The agriculture 
                                    sector accounts for the bulk of economic activity. This sector includes industrial scale plantation agriculture to artisanal subsistence farming and
                                    crops such as bananas and cocoa are exported to Europe and other parts of the world.
                                    The mining sector is active, along with the long standing oil and gas sectors.
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
                                    Senegal's location is "business spot on" due to its proximity with other 
                                    west africa countries and also with Europe. Senegal is home to numerous 
                                    non-governmental organisations and the united nations representations. The country 
                                    has a strong political system committed democratic values at its core. And is one 
                                    of the most attractive country on the african continent for investors.  
                                </p>
                                <br />
                                <p className="p-format">
                                    Senegal is a member of WAEMU (West African Economic and Monetary Union) and 
                                    ECOWAS (Economic Community of West Africa), this exposes potential investors to an even
                                    broader economic spectrum with over 300 million consumers. Added compliments to senegals economy is the
                                    Organisation for the Harmonisation of Corporate Law in Africa (Organisation pour l’Harmonisation du Droit des Affaires en Afrique (“OHADA“)) 
                                    which has established through these uniform acts and its various institutions a much welcomed harmonised legal framework in many areas of business law 
                                    (commercial law, collective proceedings and securities among others) and dispute settlement (with arbitration).
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
                                English is the main language of Sierra Leone and the agriculture sector employs 
                                two thirds of the workforce. Coffee, Cocoa, Palm Oil and cashew nuts are the main crops that 
                                are cultivated. The fishing Industry also plays a major role in the economy of Sierra Leone.
                                The main industrial activity is mining: the country have some of the world's most valuealbe 
                                diamond mines as well as deposits of gold and titanium ore.
                              </p>
                              <br />
                              <p className="p-format">
                                Sierre Leone was able to commence rebuilding its economy are a long standing civil war which saw
                                rebel forces and the government fight for control of diamond mines and the other vast resources that
                                are in the country. 
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