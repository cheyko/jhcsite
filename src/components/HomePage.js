import React from "react";
import {Link } from "react-router-dom";
import Slider from "react-slick";

import withContext from "../withContext";
import HorizontalCard from "./HorizontalCard";
import PostingItem from "./PostingItem";
import Alerts from "./Alerts";
//import $ from 'jquery';
import SideBar from "./SideBar";
import ExternalWebsites from "./ExternalWebsites";
//import Lightbox from "react-image-lightbox";

const HomePage = props => {

  /**Constant created which stores the settings for the slider options */
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
            dots: true
        }
      }
    ]
  };

  let images;
  let titles;

  /* implementation used to control the selection of slider images; each image represents a post, however if the are less than
  3 postings then a set number of images are used. */
  var total = props.context.postings ? props.context.postings.length : 0;
  if (total > 3){
    titles = [props.context.postings[total-1].title,props.context.postings[total-2].title,props.context.postings[total-3].title];
    images = [`${process.env.PUBLIC_URL}/images/post-images/post${total}/upload${0}.jpg`,
              `${process.env.PUBLIC_URL}/images/post-images/post${total-1}/upload${0}.jpg`,
              `${process.env.PUBLIC_URL}/images/post-images/post${total-2}/upload${0}.jpg`];
  }else{
    titles = [0,1,2].map((val,inx) => "Jamaican High Commission Highlights");
    images = ["/images/consulate/consulate1.JPG", "/images/consulate/consulate2.jpg","/images/consulate/consulate3.JPG"];
  }

  /** array of slider variables */
  const slides = [
      {
          id : 0, info : titles[0], path : images[0] 
      },
      {
          id : 1, info : titles[1], path : images[1] 
      },
      {
          id : 2, info : titles[2], path : images[2] 
      },
  ];
  
  /**Variables containing information used in on HorizontalCard function component. */
  const CommissionerName = "H. E. Esmond Reid";
  const CommissionerTitle = "High Commissioner For The Jamaican High Commission in Nigeria.";
  const CommissionerBio =  `His Excellency (H.E) Mr. Esmond Reid became High Commissioner of the Jamaican High Commission in Abuja, 
                            Federal Republic of Nigeria in March 2019. The High Commissioner, in addition to being accredited to Nigeria, 
                            is also non-resident High Commissioner to the Republics of Cameroon and Ghana and non-resident Ambassador to 
                            Senegal and Sierra Leone. H.E Esmond Reid, is an International Relations and Business Specialist with over 30 years experience in ... ` ;

  /*const CardTitle = "Opening Remarks";
  const CardSubheading = "From : H. E. Esmond Reid; High Commissioner For The Jamaican High Commission in Nigeria."
  const CardBody = `His Excellency (H.E) Mr. Esmond Reid became High Commissioner of the Jamaican High Commission in Abuja, 
  Federal Republic of Nigeria in March 2019. The High Commissioner, in addition to being accredited to Nigeria, 
  is also non-resident High Commissioner to the Republics of Cameroon and Ghana and non-resident Ambassador to 
  Senegal and Sierra Leone. H.E Esmond Reid, is an International Relations and Business Specialist with over 30 years experience in ... ` ;
 */
  /**A reduced number of postings is retrieved for display on homepage. */
  const postings = props.context.postings ? (props.context.postings.length > 5 ? (props.context.postings.slice(0,6)) : props.context.postings ) : null ;
  //const [openImage, setOpen] = useState(false); //  constant used to control the expansion of images
  //const [val, setVal] = useState(0); //  constant used to control the expansion of images

  return (
    <>
      <div className="home-page">
        
        <div className="hero slideshow"> 
              <div className="slick-wrapper">
                <Slider {...settings}>
                  {slides.map((slide) => 
                      <div key={slide.id}>
                          <img className="slick-slide-image customSlide" 
                            name={slide.id} alt={slide.info} src={process.env.PUBLIC_URL + slide.path}>
                          </img>
                          <figcaption className="slide-label">{slide.info}</figcaption>
                      </div>
                  )}
                </Slider>
              </div>
          </div>
        
        <br></br>

        <div className="commissioner-card">
          <HorizontalCard title={CommissionerName} subtitle={CommissionerTitle} body={CommissionerBio} type={"bio"}/>
        </div> 
        {/*
          <div className="hero remarks">
            <HorizontalCard title={CardTitle} subtitle={CardSubheading} body={CardBody} type={"remarks"} />
          </div>
        */}
     
        <div className="officials box">
          <div className="columns">
            <div className="column">
              <figure className="hero-body image is-3x1">
                <img className="container" onClick={() => {/*setOpen(true); setVal(1);*/}} src={process.env.PUBLIC_URL + "/images/consulate/Governor-General.jpeg"} alt="The Jamaican Flag"/>
                {/*openImage && val === 1 && (
                    <Lightbox
                        imageTitle={`SIR PATRICK ALLEN`}
                        mainSrc={process.env.PUBLIC_URL + "/images/consulate/Governor-General.jpeg"}
                        onCloseRequest={() => setOpen(false)}
                        
                    />
                )*/}
                <figcaption className="caption-tag">Governor General</figcaption>
              </figure>
              <div>His Excellency, The Most Honourable <br /> <span className="official"> SIR PATRICK ALLEN </span> <br /> ON, GCMG, CD, KST.J </div>
            </div>
            <div className="column">
              <figure className="hero-body image is-3x1">
                <img className="container" onClick={() => {/*setOpen(true); setVal(2);*/}} src={process.env.PUBLIC_URL + "/images/consulate/Prime-Minister.jpeg"} alt="The Jamaican Flag" />
                {/*openImage && val === 2 && (
                    <Lightbox
                        imageTitle={`ANDREW HOLNESS`}
                        mainSrc={process.env.PUBLIC_URL + "/images/consulate/Prime-Minister.jpeg"}
                        onCloseRequest={() => setOpen(false)}
                        
                    />
                )*/}
                <figcaption className="caption-tag">Prime Minister</figcaption>
              </figure>
              <div>The Most Honourable <br /> <span className="official"> ANDREW HOLNESS </span> <br /> ON, MP </div>
              
            </div>
            <div className="column">
              <figure className="hero-body image is-3x1">
                <img className="container" onClick={() => {/*setOpen(true); setVal(3);*/}} src={process.env.PUBLIC_URL + "/images/consulate/Foreign-Minister.jpeg"} alt="The Jamaican Flag" />
                {/*openImage && val === 3 && (
                    <Lightbox
                        imageTitle={`KAMINA JOHNSON SMITH`}
                        mainSrc={process.env.PUBLIC_URL + "/images/consulate/Foreign-Minister.jpeg"}
                        onCloseRequest={() => setOpen(false)}
                        
                    />
                )*/}
                <figcaption className="caption-tag">Minister of Foreign Affairs <br/> and Foreign Trade</figcaption>
                </figure>
                <div>Senator, The Honourable <br /> <span className="official"> KAMINA JOHNSON SMITH </span> </div>
            </div>
          </div>

          <Link to="/jamaica">
            <div><h1 className="button yellowbkgn subtitle has-text-weight-bold">ABOUT JAMAICA &nbsp;<i className="fa fa-mouse-pointer"></i></h1></div>
          </Link>
        </div>
         
        <hr />

        <div className="hero latest-news">
          <div className="card yellowbkgn home-page-card-horizontal">
               <div className="container">
                 <div className="hero-body">
                    <b className="is-size-4">Latest News from Consulate</b>
                    <br></br>
                    <br></br>
                    <div className="columns is-multiline is-mobile">
                      {postings ? (
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

        <hr />
     
        <div className="hero site-features">
          <div className="container hero-body">
            <div className="box">
              <Link to="/fees">
                <div className="button is-primary subtitle has-text-weight-bold"><h1 className="subtitle"> VIEW FEES &nbsp;<i className="fa fa-mouse-pointer"></i></h1></div>
              </Link>
            </div>
            <div className="columns is-multiline is-mobile">
              <div className="column a-feature">
                <div className="card yellowbkgn" style={{height:"100%"}}>  
                  <div className="card-image" style={{backgroundColor:"skyblue"}}>
                    <figure className="image is-4x3">
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/passport.jpeg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Services to Jamaicans</div>
                  </div>
                  <div className="card-content">
                    <p> Jamaicans who are in need of consular services can visit the Jamaican High Commission.
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
                      <img className="ad-card-image" src={process.env.PUBLIC_URL + "/images/visa.jpeg"} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered"> Jamaican Visa Application </div>
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
                    <div className="card-header-title is-centered">Vacationing in Jamaica</div>
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

        <hr />
      
        <div className="columns hero-body">
          <div className="column is-three-quarters">
            <Alerts />

            <br></br>
            <ExternalWebsites />
            <br></br>
          </div>
          <div className="no-map column is-one-quarter">
            <SideBar />
          </div>
        </div>
        
        <div className="map-of-jamaica hero-body">
          <article>
            <div className="message" style={{backgroundColor:"rgb(0,0,0,0)"}}>
              <div className="message-header">
                  <p> Map of Jamaica </p>
              </div>
              <div className="message-body">
                <figure className="image is-4x3">
                        <a href="https://www.ezilon.com/maps/north-america/jamaica-maps.html">
                          <img alt="map of jamaica" src="https://www.ezilon.com/maps/images/caribbean/political-map-of-Jamaica.gif" style={{width: "100%"}} />
                        </a>
                </figure>
              </div>
            </div>
          </article>
        </div>
        
        <br></br>
        
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
      </div>
    </>
  );
};

export default withContext(HomePage);