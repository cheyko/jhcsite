import React from "react";
import {Link} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import withContext from "../withContext";

const HomePage = props => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyload: 'progressive',
    autoplay: true,
    autoplayspeed: 5000
  };

  const slides = [
      {
          id : 0, info : "test0", path : "/images/consulate1.jpg"
      },
      {
          id : 1, info : "test1", path : "/images/consulate2.jpg"
      },
      {
          id : 2, info : "test2", path : "/images/consulate3.jpg"
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

  return (
    <>
      <div className="hero">
        <div className="container slideshow" style={{marginBottom:"1rem"}}> 
              <div className="slick-wrapper">
                <Slider {...settings}>
                  {slides.map((slide) => 
                      <div key={slide.id}>
                          <img className="slick-slide-image customSlide" 
                            name={slide.id} alt={slide.id} src={slide.path}>
                          </img>
                      </div>
                  )}
                </Slider>
              </div>
          </div>
        
        <br></br>

        <div className="hero commissioner-card">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-4x3">
                      <img className="image is-128x128" src="/images/high_commissioner.jpg" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">H. E. Esmond Reid</p>
                    <p className="subtitle is-6">High Commissioner For The Jamaican High Commission in Nigeria.</p>
                    <p className="subtitle is-6"> Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
                     Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, 
                     nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero flag-card" style={{margin:"3%"}}>
          <div className="container">
            <figure className="image is-4x3">
              <img className="flag-card" src="/images/flag3d.jpg" alt="The Jamaican Flag" style={{height:"50%",width:"50%",margin:"0 auto"}} />
            </figure>
          </div>
        </div>

        <div className="hero remarks">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-4x3">
                      <img className="image is-128x128" src="/images/high_commissioner.jpg" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Opening Remarks</p>
                    <p className="subtitle is-6">From : H. E. Esmond Reid; High Commissioner For The Jamaican High Commission in Nigeria. </p>
                    <p className="subtitle is-6"> Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
                     Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, 
                     nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero latest-news">
          <div className="card" style={{marginTop:"3rem",padding:"1rem"}}>
               <div className="container">
                 <div className="card">
                    <b>Latest News</b>
                    <p><Link to="/postings"><button className="button outlined" style={{margin:"1rem"}}> View latest Articles and Notices </button> </Link></p>
                 </div>

               </div>
          </div>
        </div>
        
        <div className="hero site-features">
          <div className="hero-body">
            <div className="columns">
              <div className="column">
                <div className="card">  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Header 1</div>
                  </div>
                  <div className="card-content">

                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Header 2</div>
                  </div>
                  <div className="card-content">

                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Header 3</div>
                  </div>
                  <div className="card-content">

                  </div>
                </div>
              </div>
              <div className="column">
                <div className="card">  
                  <div className="card-image">
                    <figure className="image is-4x3">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-header">
                    <div className="card-header-title is-centered">Header 4</div>
                  </div>
                  <div className="card-content">

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div className="hero famous-quote">
          <div className="container">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-content">
                    <p className="title is-4">Add Quote</p>
                    <p className="subtitle is-6">@johnsmith</p>
                    <p className="subtitle is-6"> Lorem ipsum leo risus, porta ac consectetur ac, vestibulum at eros.
                     Donec id elit non mi porta gravida at eget metus. Cum sociis natoque penatibus et magnis dis parturient montes, 
                     nascetur ridiculus mus. Cras mattis consectetur purus sit amet fermentum.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default withContext(HomePage);