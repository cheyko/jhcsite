import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import Alerts from "./Alerts";
import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const ViewPosting = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  let posting = localStorage.getItem("posting");
  const theID = props.match.params.id;
  console.log(theID);
  const result = props.context.getPost(theID);
  posting = (result === undefined) ? JSON.parse(posting) : result;
  localStorage.setItem("posting", JSON.stringify(posting));
  console.log(posting);

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
              <li><Link to="/postings">News Articles and Notices</Link></li>
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
                      <div> 
                        {posting.numOfPics > 0 ? (
                          <figure className="image is-4x3">
                            <img alt="view post" style={{height:"30rem"}} src={`${process.env.PUBLIC_URL}/images/post-images/post${posting.id}/img0.jpg`} />
                          </figure>
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
                                <small>{posting.date}</small>
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