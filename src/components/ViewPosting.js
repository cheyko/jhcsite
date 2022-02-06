import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";
import Lightbox from 'react-image-lightbox';
import Slider from "react-slick";

const ViewPosting = props => {

    /**Constant created which stores the settings for the slider options */
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
            arrows: false,
            dots: true
        }
      }
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0); //used to scroll to top of page on render.
  }, []);

  let posting = localStorage.getItem("posting"); // current posting is retreived from session storage
  const theID = props.match.params.id;
 
  const result = props.context.getPost(theID); //post if retreive by calling function from main class component (App.js)
  posting = (result === undefined) ? JSON.parse(posting) : result;
  localStorage.setItem("posting", JSON.stringify(posting));
  const [openImage, setOpen] = useState(false);
  const [idx, setIndex] = useState(true);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> {posting.title} </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
            <li><Link to="/">Home</Link></li>
              <li><Link to="/postings">News Articles, Notices and Albums</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;{posting.title}</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                  <article className="message special-notice is-content is-size-4">
                      <div className="has-text-left"> <small style={{color:"red", padding:"1rem"}}>{posting.category}</small> </div>
                      <div> 
                        {posting.numOfPics > 0 ? (
                          <Slider {...settings}>
                            {[...Array(posting.numOfPics).keys()].map((aFile, index) => (
                                <div key={index} className="slick-slide slide--has-caption">
                                  <figure key={index} className="image is-2by1">
                                      <img className="slick-slide-image" onClick={e => {setOpen(true); setIndex(index);}} src={`${process.env.PUBLIC_URL}/images/post-images/post${posting.id}/upload${index}.jpg`} alt="upload" />
                                      {openImage && (
                                        <Lightbox
                                            imageTitle={`${posting.title}`}
                                            mainSrc={`${process.env.PUBLIC_URL}/images/post-images/post${posting.id}/upload${idx}.jpg`}
                                            onCloseRequest={() => setOpen(false)}
                                            
                                        />
                                      )}
                                  </figure>
                                </div>
                                
                              ))}
                          </Slider>
                        ):(
                          <figure className="image is-4x3">
                            <img alt="view post" style={{height:"30rem"}} src={process.env.PUBLIC_URL + "/images/image7.jpg"} />
                          </figure>
                        )}
                      </div> 
                    <div className="message-body">
                      <div className="box grnBkgn">
                        <div className="has-text-left" >
                          By : <b style={{ textTransform: "capitalize" }} >
                                {posting.author}
                              </b>
                        </div>
                        <div className="is-clearfix has-text-left">
                          <span className="tag is-primary">
                              {posting.date ? (
                                <small>{posting.date.split(" ")[0]}</small>
                                ) : (
                                <small className="has-text-warning">No Date Available</small>
                                )}
                            </span>
                        </div>
                      </div>

                      <p className="is-size-5 p-format para">
                      {posting.body}
                      </p>

                    </div>
                  </article>

                  <Alerts />

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
export default withContext(ViewPosting);