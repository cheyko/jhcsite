import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const Covidwa = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> The Coronavirus Disease 2019 (COVID-19)  </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/general">General Information</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;Covid-19 in West Africa</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    
                    <article>
                        <h1 className="title"> COVID-19 in West Africa</h1>
                        <p style={{color:"black"}} className="has-text-left"> Last Updated : August 6, 2021</p>
                        <br />
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Overview</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                The Covid-19 pandemic continues to rage across the World. Africa was the last continent 
                                to be hit by the virus and has not experienced as much davestation as other continents. 
                                Meanwhile many countries are currently experiencing the second wave of the outbreak and 
                                a new variant called the 'Delta Variant'. West Africa, with a population of 367 million 
                                people, had confirmed 412 178 cases of COVID-19 with 5363 deaths as of 14 March 2021; 
                                compared with the USA which had recorded almost 30 million cases and 530 000 deaths, 
                                despite having a slightly smaller population (328 million). Several reasons have been 
                                made in an attempt to explain this phenomenon. One was that African countries have 
                                leveraged on experiences from past epidemics to build resilience and response strategies 
                                which may be contributing to protecting the continent’s health systems from being overwhelmed.
                                </p>
                                <br />
                                <p className="p-format">
                                  The Economic Community of West African States (ECOWAS) has been monitoring the situation in the region 
                                  as well as the <a style={{color:"green"}} href="https://www.afro.who.int/health-topics/coronavirus-covid-19"> regional offices</a> of The World Health Organisation. The ECOWAS website has daily updates and various Covid-19 
                                  information available on its <a style={{color:"green"}} href="https://www.ecowas.int/covid-19/">Covid-19 page</a>.
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
                                 In Nigeria, the national public health response to the Coronavirus pandemic is led by 
                                 The Nigeria Centre for Disease Control (NCDC) through the National Emergency Operations Centre 
                                 (EOC) with oversight of the Presidential Task Force on COVID-19 (PTF-COVID-19). 
                                 Working closely with all states of the Federation to support their response activities to the 
                                 Covid-19 is also one of the major roles of the NCDC.
                                </p>
                                <br/>
                                <p className="p-format">
                                  The Federal Government of Nigeria through the PTF-COVID-19 together with the Federal 
                                  Ministry of Health have instituted several measures to curtail the spread of the disease 
                                  and protect the health of Nigerians. This includes an initial lockdown of non-essential activities; 
                                  closure of schools; a ban on international flights etc. However to ensure a balance between 
                                  livelihoods and preserving lives Nigeria has commenced the gradual easing of lockdown measures 
                                  initially instituted at the beginning of the COVID-19 pandemic. This is to address 
                                  socio-economic disruptions caused by the outbreak as done by other countries.

                                </p>
                                <br />
                                <p className="p-format">
                                  For more information on Nigeria's response to the Covid-19 visit the Government of 
                                  The Federal Republic of Nigeria's <a style={{color:"green"}} href="https://covid19.ncdc.gov.ng/">Covid-19 Web Portal</a>.
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
                                The Ministry of Health in Ghana has mandated the use of facemasks in public. 
                                The police are enforcing this directive. Accra Kotoka International Airport is open 
                                for regular international passenger travel, passenger are required to be tested at the Airport
                                before they can enter the Country. Ghana’s land and sea borders remain closed 
                                until further notice. See the Entry and Exit Requirements section below.
                                </p>
                                <br />
                                <p className="p-format">
                                    Restaurants are operating with appropriate social distancing precautions.
                                     Weddings, concerts, theatrical performances, and parties are banned. 
                                     Large sporting events, political rallies, and festivals are suspended 
                                     until further notice. Nightclubs, bars, beaches, and cinemas also remain closed 
                                     until further notice. Private burials, with no more than 25 people, can take place, 
                                     with the enforcement of the social distancing, hygiene and mask-wearing protocols. 
                                     Religious services may operate at full capacity for up to two hours per service.
                                    Large sporting events, political rallies, and festivals are suspended until further 
                                    notice. Nightclubs, bars, beaches, and cinemas must also remain closed until further notice.
                                </p>
                                <br />
                                <p className="p-format">
                                  For more information on Covid-19 in Ghana, visit <a style={{color:"green"}} href="https://www.ghanahealthservice.org/covid19/"> www.ghanahealthservice.org/covid19/</a>.
                                  
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
                                    As of March 18, 2020, all land, sea, and air borders 
                                    are closed until further notice due to COVID-19. This announcement was made by The 
                                    Cameroonian Prime Minister, however many airlines have been given permission 
                                    to resume limited flights, officially the borders’ status is still “closed.”  
                                    Cameroon’s Ministry of Public Health has been responding to the COVID-19 outbreak 
                                    through active surveillance, screening at points of entry, laboratory testing, 
                                    and case management at designated isolation and treatment centers. The World Health Organization 
                                    (WHO) and the U.S. Centers for Disease Control and Prevention (CDC) are providing technical 
                                    support to control the outbreak in Cameroon.
                                </p>
                                <br/>
                                <p className="p-format">
                                    The Government of Cameroon now requires all outbound passengers to present a negative COVID-19 PCR test result 
                                    dated within 72 hours of boarding an international flight.  Travelers must use a government-approved testing 
                                    site and register their results in one of two databases depending on the point of departure 
                                    (<a style={{color:"green"}} href="https://3msminsante.com/">Yaoundé</a> or <a style={{color:"green"}} href="https://www.drspl.net/en/infos-form">Douala</a> ).

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
                                The Government of Senegal encourages individuals who believe they 
                                may be ill to seek care early, and encourages everyone to be vaccinated 
                                against COVID-19. The government also encourages individuals to avoid 
                                all gatherings and travel. Use of facial coverings is mandatory in public 
                                places and in private places receiving the public. Restaurants, casinos, 
                                places of worship, private beaches, sporting events and markets are permitted 
                                to operate while maintaining social distancing measures and facial coverings. 
                                Violators of facial covering requirements face possible detention and fines 
                                imposed by law enforcement officials.

                                </p>
                                <br />
                                <p className="p-format">
                                Public transportation services (taxis, care rapids and intercity buses) may 
                                transport the maximum number of passengers, provided all passengers wear a mask. 
                                Violators of facial covering requirements face possible detention and fines imposed 
                                by law enforcement officials. The Government of Senegal has implemented restrictions 
                                that impact entry into Senegal for certain foreign nationals. Travelers who are not 
                                citizens or residents of Senegal or a country that is a member of the Economic Community 
                                of West African States, or who do not meet certain other exemptions outlined on 
                                their <a style={{color:"green"}} href="https://twitter.com/MTTASN/status/1283435028383498240">twitter feed</a>, may be 
                                denied entry or face difficulty traveling to Senegal. If one has an understanding of French and require
                                more information on the Latest with regards to Covid-19 in Senegal then check 
                                the <a style={{color:"green"}} href="https://www.sante.gouv.sn/">Website</a> of the Ministry of Health and Social Action in Senegal.
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
                                  The National Coronavirus Emergency Response Committee (NaCOVERC) was created in Sierra Leone to tackle
                                  the Coronavirus Pandemic in the Country. Recently, Sierra Leone President Julius Maada Bio rolled out a number of new nationwide measures, 
                                  including a curfew that begins on Monday at 11PM to stem the increasing number of cases of Covid-19 
                                  in the country. In order for travellers to gain entry to Sierra Leone, they are required to sign up on
                                  the <a style={{color:"green"}} href="https://www.travel.gov.sl/">Travel Portal</a> to apply and pay for Covid-19 Testing.
                                  Before signing up for the portal, it is recommended that Travelers review the <a style={{color:"green"}} href="https://www.travel.gov.sl/travel-advisory">Travel Advisory</a> issued in Sierra Leone.  

                                </p>
                            </div>
                        </div>
                    </article>
                    <div className="hero-body">
                      <div className="card">
                        <h1 style={{textDecoration:"underline"}}> Sources </h1>
                        <span> Economic Community of West African States Covid Page : https://www.ecowas.int/covid-19/</span>
                      </div>
                    </div>
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
export default withContext(Covidwa);