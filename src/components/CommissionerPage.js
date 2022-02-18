import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


const CommissionerPage = props => {

  const [openImage, setOpen] = useState(false); //used control the expanding of Picture on page.

  useEffect(() => {
    window.scrollTo(0, 0); //used to scroll to the top of page on render.
  }, []);

  /* Function used to expand image on Page */
  function imgControl(e){
    setOpen(true);
    e.preventDefault();
  };
  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">The High Commissioner </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;The High Commissioner</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                  <article className="message special-notice is-content is-size-4">
                    <div className="message-body">
                      <div className="box grnBkgn">
                        <figure className="image is-4x3">
                          <img alt="High Commissioner" onClick={imgControl} src={process.env.PUBLIC_URL + "/images/consulate/high_commissioner.jpg"} />
                          {openImage && (
                            <Lightbox
                              imageTitle="Jamaican High Comissioner"
                              mainSrc={process.env.PUBLIC_URL + "/images/consulate/high_commissioner.jpg"}
                              onCloseRequest={() => setOpen(false)}
                            />
                          )}
                          <figcaption>
                            <p>His Excellency Esmond St. Clair Reid</p>
                            <br></br>
                            <p className="subtitle">Jamaican Resident High Commissioner in Nigeria,</p> 
                            <p className="subtitle">non-resident High Commissioner to the Republics of Cameroon and Ghana</p> 
                            <p className="subtitle">and non-resident Ambassador to Senegal and Sierra Leone.</p> 
                            
                          </figcaption>
                        </figure>
                      </div>

                      
                      <br></br>

                      <p className="is-size-5 p-format">
                      His Excellency (H.E) Mr. Esmond Reid became High Commissioner of the Jamaican High 
                      ommission in Abuja, Federal Republic of Nigeria in March 2019. The High Commissioner, 
                      in addition to being accredited to Nigeria, is also non-resident High Commissioner 
                      to the Republics of Cameroon and Ghana and non-resident Ambassador to Senegal and Sierra Leone. 
                      H.E Esmond Reid, is an International Relations and Business Specialist with over 30 years’ experience 
                      in the multilateral diplomacy, trade and bilateral arenas. High Commissioner Reid is credited as being 
                      a high performance senior executive with a proven track record in general management, 
                      leadership development, conflict resolution, negotiations, trade and investment promotion.
                      </p>
                      <br/>
                      <p className="is-size-5 p-format">
                      His Excellency Esmond Reid is a Honours Graduate at the University of West Indies, Mona, 
                      where he matriculated in 1990 with a Bachelor of Science in International Relations. 
                      In 1997, He Completed a Masters in International Business at the Schiller International University in London. 
                      H.E Reid has completed an Advanced Trade Negotiations Course at the World Trade Organisation (WTO) in 
                      Geneva Switzerland, And has received professional certifications in Berlin, Germany and Fort de France, Martinique. 
                      High Commissioner Reid was also a member of the Board of Directors of the Jamaica National Agency for 
                      Accreditation from 2014 to 2019.
                      </p>
                      <br/>
                      <p className="is-size-5 p-format">
                      His Excellency Esmond Reid has completed successful tenures in foreign countries in the past on his way to
                       becoming High Commissioner. His first assignment away from Jamaica was in 1994 as a Counsellor 
                       in the Jamaican High Commission in London, England. Then in 1998 he started another post as a Counsellor, 
                       this was in the Embassy of Jamaica to the Federal Republic of Germany, Bonn/Berlin. 
                       And, In 2007 he became a Minister-Counsellor, for the Embassy of Jamaica to Belgium & Mission of Jamaica 
                       to the European Union, Brussels, Belgium. H.E Reid has developed an Excellent knowledge and understanding 
                       of the international trade environment and has acquired proficiencies in Spanish, French and German to go 
                       along with his Excellent communication skills in English.
                      </p>
                      <br/>
                      <p className="is-size-5 p-format">
                      Before being appointed as High Commissioner, H.E Esmond Reid acted as Under Secretary, 
                      For the Foreign Trade Division in Jamaica's Ministry of Foreign Affairs and 
                      Foreign Trade from December of 2017. During this role he provided strategic direction and 
                      leadership to the Division especially in light of a reduced staff complement and a 
                      demanding trade policy agenda, he was required to act as Officer-in-Charge of the Ministry,
                       during periods of absence of the Permanent Secretary and he represented Jamaica in 
                       important trade and development engagements within the OACPS-EU framework, the Commonwealth, 
                       CARICOM, the WTO and the G20. His Excellency has also served Jamaica's Ministry of 
                       Foreign Affairs and Foreign Trade as a Senior Director in the Foreign Trade Department. 
                       In this capacity H.E Reid successfully resolved various cases involving Jamaican businesses 
                       and overseas entities engaged in commercial transactions and contributed to the successful 
                       completion of Jamaica's Revised National Foreign Trade Policy.
                      </p>

                    </div>
                  </article>
                  <br></br>
                  <Alerts />
                  <br></br>
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
  )
}
export default withContext(CommissionerPage);