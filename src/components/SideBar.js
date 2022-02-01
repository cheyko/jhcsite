import React from "react";
import Slider from "react-slick";
import ExternalItem from "./ExternalItem";
import withContext from "../withContext";

const SideBar  = props => {    
  const settings = {
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    centerMode: true,
    focusOnSelect: true,
    centerPadding: '10px',
    zIndex:0,
    position:'relative',
    responsive:[
      {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            dots: true,
            arrows: false
        }
      },
      {
        breakpoint: 1025,
        settings: {
          dots: false,
          arrows: true
        }
      }
    ]
  };

  const stateNews = [
    {
      id : 0, url:"/images/links/jis.jpeg", path : "https://jis.gov.jm/daily-news/", title : "", caption : "Jamaica Information Service."
    },
    {
        id : 1, url:"/images/links/opm.jpeg", path : "https://opm.gov.jm/", title : "", caption : "Office of the Prime Minister"
    },
    {
        id : 2, url:"/images/links/tvj.png", path : "https://www.televisionjamaica.com/", title : "", caption : "Television Jamaica"
    }
];

const jamaicaToday = [
  {
      id : 0, url:"/images/links/gleaner.jpeg", path : "https://jis.gov.jm/daily-news/", title : "", caption : "The Gleaner"
  },
  {
      id : 1, url:"/images/links/observer.jpeg", path : "https://opm.gov.jm/", title : "", caption : "Jamaica Observer"
  },
  {
      id : 2, url:"/images/links/star.jpeg", path : "https://www.televisionjamaica.com/", title : "", caption : "The Star"
  }
];
    return (
      <>
        <div className="hero">
          <article className="message is-link">
            <div className="message-header">
              <p> Contact Us</p>
            </div>
            <div className="message-body">
                  <dl style={{textAlign:"left"}}>
                        <dd>The Jamaican High Commission</dd>
                        <dd>13 Hassan Musa Katsina Street</dd>
                        <dd>Asokoro, Abuja</dd>
                        <dd>Federal Republic of Nigeria</dd>
                        <br></br>
                        <dd>Telephone 1: 0813 606 3356 </dd>
                        <dd>Telephone 2: 0816 737 4252 </dd>
                        <br></br>
                        <dd>Email Address: <a href="mailto:consular-jhcnig@mfaft.gov.jm">consular-jhcnig@mfaft.gov.jm</a></dd> 
                        <br></br>
                        <dd>Monday - Thursday , 9:00 am - 5:00 pm</dd>
                        <br></br>
                        <dd>Fridays , 9:00 am - 4:00 pm</dd>
                        
                  </dl>
                  <br></br>
                  <dl style={{textAlign:"left"}}>
                      <dd style={{textAlign:"left"}}><strong>Consular Hours :</strong> </dd>
                      <dd>Tuesdays, Wednesdays & Thursdays</dd>
                      <dd>9:00am - 12:00noon</dd>
                      <dd>No Appointments required, visitors must visit within the consular hours.</dd>
                  </dl>
            </div>
          </article>
       
          <br />
          <article className="message is-normal">
            <div className="message-header">
              <p> State News </p>
            </div>
         
                <div className="message-body has-text-left">
                    <div className="slide-wrapper">
                      <div className="box news-box">
                        <div className="thumbnail thumbnail-slider-wrap"> 
                          {<Slider {...settings}>
                            {stateNews.map((link,index) => (
                                <div key={index} className="slick-slide">
                                   <ExternalItem link={link} key={index} />
                                   <br/>
                                </div>
                            ))}
                            </Slider>}
                        </div>
                    </div>
                  </div> 
                </div>
          
          </article>
          <br/>
          <article className="message is-normal">
            <div className="message-header">
              <p> Jamaica Today </p>
            </div>
                <div className="message-body has-text-left">
                  <div className="slide-wrapper">
                      <div className="box news-box">
                      <div className="thumbnail thumbnail-slider-wrap"> 
                        {<Slider {...settings}>
                            {jamaicaToday.map((link,index) => (
                                <div key={index} className="slick-slide ">
                                    <ExternalItem link={link} key={index} />
                                    <br/>
                                </div>
                            ))}
                            </Slider>}
                        </div>
                    </div>
                  </div> 
                </div>
             
          </article>
          <br />
                      
          <article className="message is-normal">
            <div className="message-header">
              <p> Currency</p>
            </div>
            <a href="https://boj.org.jm">
                <div className="message-body">
                    <div className="columns is-multiline">
                        <div className="column is-full">
                          <figure className="image is-256x256" style={{margin:"0 auto"}}>
                                <img src={process.env.PUBLIC_URL + "/images/jamaican-dollars.jpg"} alt="Placeholder" />
                          </figure>
                        </div>
                        <div className="column is-full">
                          <p className="title is-4">FX | Rates</p>
                          <p className="subtitle is-4">Bank of Jamaica</p>
                        </div>
                    </div>
                </div>
            </a>
          </article>
            <br />
          <article className="message is-link">
            <div className="message-header">
              <p>Additional Resources</p>
            </div>
            <div className="message-body">
              <ul style={{listStyleType:"circle"}}>
                <li> <strong><a href="https://apps2.rgd.gov.jm/web/birth/lay_birthApplication.cfm"> Birth Certificate </a></strong></li>
                <li> <strong><a href="https://www.pica.gov.jm/"> Passport, Citizenship and Identity</a></strong></li>
                <li> <strong><a href="https://www.jamaicatax.gov.jm/"> Motor Vehicle Services</a></strong></li>
                <li> <strong><a href="https://www.jamaicatax.gov.jm/"> Taxes, Paying Fines and Bills</a></strong></li>
                <li> <strong><a href="https://www.tradeboard.gov.jm/"> Permits and Licences</a></strong></li>
                <li> <strong><a href="https://www.jacustoms.gov.jm/"> Import and Export in Jamaica</a></strong></li>
                <li> <strong><a href="https://ecj.com.jm/"> Voter's Information</a></strong></li>
              </ul>
            </div>
          </article>
            <br />
          <article className="message map-box" style={{backgroundColor:"rgb(0,0,0,0)"}}>
            <div className="message-header">
              <p>Map of Jamaica</p>
            </div>
            <div className="message-body">
                <a href="http://www.mapsofworld.com/jamaica/">
                  <img alt="map of jamaica" src="https://secureservercdn.net/198.71.233.110/u3v.7d0.myftpupload.com/wp-content/uploads/2016/02/Jamaicaphysicalmap.gif" style={{width: "100%"}} />
                </a>
            </div>
          </article>
                          </div>
                          
                          </>
     

    )
}
export default withContext(SideBar);