import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import PostingItem from "./PostingItem";
import withContext from "../withContext";
import SideBar from "./SideBar";

const PostingList = props => {

  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);


  const { postings } = props.context;

  return (
    <>
      <div className="hero">

        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">News Articles and Notices</h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><a href="#" aria-current="page">News Articles and Notices</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">
                <div className="box yellowbkgn column">
                  <div className="container">
                    <div className="column columns is-multiline">
                      {postings && postings.length ? (
                        postings.map((posting, index) => (
                          <PostingItem
                          posting={posting}
                            key={index}
                          />
                        ))
                      ) : (
                        <div className="column">
                          <span className="title has-text-grey-light">
                            No Articles or Notices are Available at this time.
                          </span>
                        </div>
                      )}
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
  );
};

export default withContext(PostingList);