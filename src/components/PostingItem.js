import React from "react";

const PostingItem = props => {
  const { posting } = props;
  return (
    <div className="column is-half">
      <div className="box">
        <small>{posting.type}</small>
        <div className="media">
          
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={posting.description}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {posting.title}{" "}
              <br/>
              <span className="tag is-primary">
                  {posting.date ? (
                    <small>{posting.date + " New"}</small>
                    ) : (
                    <small className="has-text-warning">No Date Available</small>
                )}
                </span>
            </b>
            <div>{posting.description}</div>
            <div className="is-clearfix">
              <b style={{ textTransform: "capitalize",color:"blue" }} className="is-pulled-right" >
                {posting.author}
              </b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostingItem;