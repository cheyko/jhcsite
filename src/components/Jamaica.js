import React, { useEffect } from "react";
import withContext from "../withContext";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import ExternalWebsites from "./ExternalWebsites";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExternalItem from "./ExternalItem";
import axios from "axios";

const Jamaica = props => {

    useEffect( () => {
        window.scrollTo(0,0);
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyload: 'progressive',
        autoplay: true,
        autoplayspeed: 5000,
        responsive:[
        {
            breakpoint: 700,
            settings: {
                arrows: false,
            }
        }
        ]
    };

    const slides = [
        {
            id : 0, info : "test0", path : "/images/brand-jamaica/negril-resorts.jpeg", label : "7 Miles of Beautiful White Sand Beach; located in western jamaica"
        },
        {
            id : 1, info : "test1", path : "/images/brand-jamaica/sangster.jpeg", label : "Sangster International Airport; the busiest airport in Jamaica. "
        },
        {
            id : 2, info : "test2", path : "/images/brand-jamaica/portland.jpeg", label : "Parish of Portland; epitome of Jamaica's Beauty."
        },
        {
            id : 3, info : "test3", path : "/images/brand-jamaica/appleton.jpeg", label : "Appleton Estate; One of Jamaica's Signiture Brands."
        },
        {
            id : 4, info : "test4", path : "/images/brand-jamaica/holland-bamboo.png", label : "4 Kilometres long of beautifully arched and shaded arrangement of bamboos."
        },
        {
            id : 5, info : "test5", path : "/images/brand-jamaica/port-royal.jpeg", label : "Port Royal, Once called the ' richest and `wickedest` ' city in the world."
        },
    ];

     

        /*const response = axios.get('https://jamaica-gleaner.com/feed/rss.xml', {
          method: 'GET', 
          mode: 'no-cors' 
        }).then(data => {
            console.log(data);
        });*/
        //return response.json(); 
     
      //console.log(response);
    //postData().then(data => {console.log(data);});

    /*async function postData() {

        const response = await fetch('https://jamaica-gleaner.com/feed/rss.xml', {
          method: 'GET', 
          mode: 'no-cors',  
        });
      }
      
      postData().then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });*/

    return(
        <div className="hero">
           
            <div className="slideshow"> 
              <div className="slick-wrapper">
                <Slider {...settings}>
                  {slides.map((slide,index) => 
                      <figure key={index}>
                          <img className="slick-slide-image customSlide" 
                            name={slide.id} alt={slide.info} src={process.env.PUBLIC_URL + slide.path}>
                          </img>
                          <figcaption className="slide-label">{slide.label}</figcaption>
                      </figure>
                  )}
                </Slider>
              </div>
            </div>
            <div className="header">
                <div className="hero blkYellow page-header" >
                    <div className="page-header-body container">
                        <h4 className="title"> The Land of Wood and Water </h4>
                    </div>
                </div>
                <br />
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><span aria-current="page">&nbsp;Jamaica</span></li>
                    </ul>
                </nav>
            </div>
            <div className="hero"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        
                        <div className="message is-content">
                            <div className="message-header">
                                <p>' OUT OF MANY, ONE PEOPLE '</p>
                            </div>
                            <div className="message-body has-text-left">
                                <ul>
                                    <span className="box info-link">
                                        <li> <Link to="https://www.visitjamaica.com/" className="subtitle"> What makes this Island Nation Special ? </Link> </li>
                                        <li> 
                                            Located in the Tropics; 18°  North Latitude and 77° West of Greenwich, this island is home to
                                            some of the World's most prestigious People, Places and Things. 
                                        </li>
                                        
                                    </span>

                                </ul>
                            </div>
                        </div>
                    </article>
                
                    <hr />
                
                    <article>
                        <h1 className="subtitle is-size-3"> About Jamaica </h1>
                        
                        <Tabs>
                            
                            <TabList>
                                <Tab>History</Tab>
                                <Tab>Governance</Tab>
                                <Tab>Tourism</Tab>
                                <Tab>Trade and Investment</Tab>
                                <Tab>Jamaica Today</Tab>
                            </TabList>
                            <br/>
                            <TabPanel>
                                <div className="history message is-content">
                                    <div className="message-header">
                                        From Columbus to Nationalism
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <li className="box grnBkgn has-text-centered"><b> <Link to="https://jis.gov.jm/information/jamaican-history/" className="subtitle" style={{color:"yellow"}}> Jamaica's Timeline </Link> </b></li> 
                                                
                                            <span className="box info-link">
                                                <li><b>Inhabitants</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>European Arrival</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>Spanish Colony</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>
                                            
                                            <span className="box info-link">
                                                <li><b>Capture by The British</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>The Slave Trade</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>Emancipation & Indentureship</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>Pre & Post Independence</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="message is-content">
                                    <div className="message-header">
                                        Caribbean Commonwealth 
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <span className="box info-link">
                                                <li><b>Constitution</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>The Executive</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>The Legislature</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>
                                            
                                            <span className="box info-link">
                                                <li><b>The Judiciary</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tourism message is-content">
                                    <div className="message-header">
                                        The Sun, The Sea, The Cuisine, The Culture
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <span className="box info-link">
                                                <li><b>The Beginning</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <span className="box info-link">
                                                <li><b>Developed Industry</b></li>
                                                <li> JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                            </span>

                                            <li className="box grnBkgn has-text-centered"><b className="subtitle" style={{color:"yellow"}}> Some Notable Attractions in Jamaica <br /><i className="fa fa-arrow-down"></i></b></li> 
                                                
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="message is-content">
                                    <div className="message-header">
                                        Progressive Economy
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <span className="box info-link">
                                                <li> <Link to="/businessja" className="subtitle"> Doing Business in Jamaica </Link> </li>
                                                <li > JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                                </span>
                                                <span className="box info-link">
                                                <li> <Link to="/businesswa" className="subtitle"> Doing Business in West Africa </Link> </li>
                                                <li className="left-margin"> ECOWAS is the organisation set-up to foster economic co-operation
                                                between West Africa states. With this trading union; a single, large trading bloc is created. </li>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="message is-content">
                                    <div className="message-header">
                                        Highlights in Jamaica
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <ul>
                                            <span className="box info-link">
                                                <li> <Link to="/businessja" className="subtitle"> Doing Business in Jamaica </Link> </li>
                                                <li > JAMPRO is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                Investment and Commerce that promotes business opportunities in export and investment to the local and international private sector. </li>
                                                </span>
                                                <span className="box info-link">
                                                <li> <Link to="/businesswa" className="subtitle"> Doing Business in West Africa </Link> </li>
                                                <li className="left-margin"> ECOWAS is the organisation set-up to foster economic co-operation
                                                between West Africa states. With this trading union; a single, large trading bloc is created. </li>
                                            </span>
                                        </ul>
                                    </div>
                                </div>
                            </TabPanel>
                            
                        </Tabs>
                    </article>

                    <br></br>
                    <ExternalWebsites />
                    <br></br>
                </div>

                <div className="column is-one-quarter">
                  <SideBar />
                </div>

              </div>
            </div>
          
        </div>
    )
}
export default withContext(Jamaica);

