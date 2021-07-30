import React from "react";
import PostingItem from "./PostingItem";
import withContext from "../withContext";

const PostingList = props => {

  const { postings } = props.context;

  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title"> Information Bulletin </h4>
        </div>
      </div>
      <br />
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
    </>
  );
};

export default withContext(PostingList);