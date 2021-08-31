import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import withContext from "../withContext";
import HorizontalCard from "./HorizontalCard";
import PostingItem from "./PostingItem";
import Alerts from "./Alerts";

const HomePage = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

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
          id : 0, info : "test0", path : "/images/consulate1.JPG"
      },
      {
          id : 1, info : "test1", path : "/images/consulate2.jpg"
      },
      {
          id : 2, info : "test2", path : "/images/consulate3.JPG"
      },
      {
          id : 3, info : "test3", path : "/images/image4.jpg"
      },
      {
          id : 4, info : "test4", path : "/images/image5.jpg"
      },
      {
          id : 5, info : "test5", path : "/images/image6.jpg"
      },
      {
          id : 6, info : "test6", path : "/images/image7.jpg"
      },
  ];
  const CommissionerName = "H. E. Esmond Reid";
  const CommissionerTitle = "High Commissioner For The Jamaican High Commission in Nigeria.";
  const CommissionerBio = " His Excellency (H.E) Mr. Esmond Reid became High Commissioner of the Jamaican High Commission in Abuja, Federal Republic of Nigeria in March 2019. The High Commissioner, in addition to being accredited to Nigeria, is also non-resident High Commissioner to the Republics of Cameroon and Ghana and non-resident Ambassador to Senegal and Sierra Leone. H.E Esmond Reid, is an International Relations and Business Specialist with over 30 years experience in ... " ;

  const CardTitle = "Opening Remarks";
  const CardSubheading = "From : H. E. Esmond Reid; High Commissioner For The Jamaican High Commission in Nigeria."
  const CardBody = "Opening remarks ..... "

  const postings = props.context.postings ? (props.context.postings.length > 5 ? (props.context.postings.slice(0,6)): props.context.postings ) : null ;
  console.log(postings.length);
  
  return (
    <>
      <div>
        <div className="hero slideshow" style={{marginBottom:"1rem"}}> 
              <div className="slick-wrapper">
                <Slider {...settings}>
                  {slides.map((slide) => 
                      <div key={slide.id}>
                          <img className="slick-slide-image customSlide" 
                            name={slide.id} alt={slide.info} src={process.env.PUBLIC_URL + slide.path}>
                          </img>
                      </div>
                  )}
                </Slider>
              </div>
          </div>
        
        <br></br>
        
        <div className="hero commissioner-card">
           <HorizontalCard title={CommissionerName} subtitle={CommissionerTitle} body={CommissionerBio}/>
        </div>      
        <br></br>
        <br></br>
        <div className="flag-card" style={{width:"50%", margin:"3rem auto"}}>
          <article>
            <div className="" style={{backgroundColor:"rgb(0,0,0,0)"}}>
              {/*<div className="message-header">
                  <p>The Jamaican Flag</p>
                  </div>*/}
              <div className="">
                <figure className="image is-4x3">
                  <img className="flag-card" src={process.env.PUBLIC_URL + "/images/flag3d.jpg"} alt="The Jamaican Flag" style={{height:"50%",width:"50%",margin:"0 auto"}} />
                </figure>
              </div>
            </div>
          </article>
        </div>
        <br></br>
        <hr />
        <br />
        <br></br>

        <div className="hero remarks">
          <HorizontalCard title={CardTitle} subtitle={CardSubheading} body={CardBody} />
        </div>

        <br></br>
        <br></br>

        <div className="hero latest-news">
          <div className="card yellowbkgn home-page-card-horizontal" style={{padding:"1rem"}}>
               <div className="container">
                 <div className="">
                    <b className="is-size-4">Latest News</b>
                    <br></br>
                    <br></br>
                    <div className="column columns is-multiline is-mobile">
                      {postings && postings.length > 0 ? (
                        postings.map((posting, index) => (
                          <PostingItem
                          posting={posting}
                            key={index}
                          />
                        ))
                      ) : (
                        <div className="column">
                          <span className="is-size-3 has-text-grey-light" style={{color:"blue"}}>
                            No Articles or Notices are Available at this time.
                          </span>
                        </div>
                      )}
                    </div>
                    <p>
                      <Link to="/postings">
                        <button className="button outlined is-info" style={{margin:"0 auto",padding:"1.5rem"}}> 
                            View latest articles <br className="break-text"/> and notices
                        </button> 
                      </Link>
                    </p>
                 </div>

               </div>
          </div>
        </div>
        
        <br></br>
        <br></br>

        <hr />
        <br></br>
        <div className="hero site-features">
          <div className="hero-body">
            <div className="columns is-multiline is-mobile">
              <div className="column a-feature">
                <div className="card yellowbkgn" style={{height:"100%"}}>  
                  <div className="card-image" style={{backgroundColor:"skyblue"}}>
                    <figure className="image is-4x3">
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/image1.jpg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Services to Jamaicans</div>
                  </div>
                  <div className="card-content">
                    <p> The Jamaican High Commission is here to serve Jamaicans who are in need of consular services.
                    </p>
                    <br/>
                    <Link to="/citizens"><button className="button is-info is-outlined">
                      Jamaican
                    </button></Link>
                  </div>
                </div>
              </div>
              
              <div className="column a-feature">
                <div className="card yellowbkgn" style={{height:"100%"}}>  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/visit_jamaica.jpg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered"> Visas </div>
                  </div>
                  <div className="card-content">
                    <p> The Jamaican High Commission is here to facilitate Your Visa Applications and Inquires. 
                    </p>
                    <br/>
                    <Link to="/visitors"><button className="button is-info is-outlined">
                      Going to Jamaica ?
                    </button></Link>
                  </div>
                </div>
              </div>
              <div className="column a-feature">
                <div className="card yellowbkgn" style={{height:"100%"}}>  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/jamaica_waterfront.jpg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Trade and Investment</div>
                  </div>
                  <div className="card-content">
                    <p> The secret is out! Jamaica is the top business destination in the 
                      English-speaking Caribbean.  
                    </p>
                    <br/>
                    <a href="https://dobusinessjamaica.com/" className="button is-info is-outlined">
                      Doing Business ?
                    </a>
                  </div>
                </div>
              </div>
              <div className="column a-feature">
                <div className="card yellowbkgn" style={{height:"100%"}}>  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/jamaica_heartbeat.jpg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Visit Jamaica</div>
                  </div>
                  <div className="card-content">
                    <p> Make Jamaica your next holiday destination
                    and have the best time of your life.
                    </p>
                    <br/>
                    <a href="https://www.visitjamaica.com/" className="button is-info is-outlined">
                      Visit Jamaica
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>

        <hr />
        <br></br>
        
        <div style={{marginInline:'3rem'}}>
          <Alerts />
        </div>
        

        <div className="map-of-jamaica" style={{width:"75%", margin:"3rem auto"}}>
          <article>
            <div className="message" style={{backgroundColor:"rgb(0,0,0,0)"}}>
              <div className="message-header">
                  <p> Map of Jamaica </p>
              </div>
              <div className="message-body">
                <figure className="image is-4x3">
                        <a href="http://www.mapsofworld.com/jamaica/">
                          <img alt="map of jamaica" src="https://secureservercdn.net/198.71.233.110/u3v.7d0.myftpupload.com/wp-content/uploads/2016/02/Jamaicaphysicalmap.gif" style={{width: "100%"}} />
                        </a>
                </figure>
              </div>
            </div>
          </article>
        </div>

        <div className="hero famous-quote">
          <div className="container">
            <div className="card yellowbkgn">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <h3 className="has-text-left" style={{color:"blue"}}> {`<<`} Famous Quotes {`>>`}</h3>
                    <p className="title is-4">Marcus Garvey</p>
                    <p className="subtitle is-6"> - Jamaican National Hero and Founder of First Important Black Nationalist Movement in America </p>
                    <p className="subtitle is-6" style={{textTransform:"capitalize"}}> 
                     <em>" With confidence, you have won before you have started. "</em>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
      </div>
    </>
  );
};

export default withContext(HomePage);