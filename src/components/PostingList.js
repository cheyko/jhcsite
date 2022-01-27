import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import PostingItem from "./PostingItem";
import withContext from "../withContext";
import SideBar from "./SideBar";
import ReactPaginate from 'react-paginate';

const PostingList = props => {
  const postings = props.context.postings ? (props.context.postings.length > 5 ? (props.context.postings.slice(0,6)) : props.context.postings ) : null ;
  const perPage = 12;
  const pageCount = Math.ceil(postings.length / perPage);
  let slice;
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    window.scrollTo(0, 300);
  }, []);

  const handlePageClick = (e) => {
    setOffset(e.selected * perPage);
    window.scrollTo(0, 300);
  };
  slice = postings ? postings.slice(offset, offset + perPage) : []; 

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
              <li className="is-active"><span aria-current="page">&nbsp;News Articles and Notices</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">
                <div className="column">
                  <div className="box yellowbkgn">
                    <div className="columns is-multiline">
                      {slice && slice.length > 0 ? (
                        slice.map((posting, index) => (
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
                      <div className="card paginationBox">
                        <ReactPaginate
                            previousLabel="prev"
                            nextLabel="next"
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                            />
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