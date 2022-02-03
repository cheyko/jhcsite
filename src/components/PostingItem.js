import React, {useEffect} from "react";
import {Link} from "react-router-dom";

const PostingItem = props => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const { posting } = props;
  
  return (
    <div className="column is-full-mobile is-one-third-desktop news-article">
      <Link to={`/view-posting/${posting.id}`}>
        <div className="posting-item-card" style={{height:"100%",margin:"0 auto"}}>
          <div className="has-text-left"> <small style={{color:"red"}}>{posting.category}</small> </div>
          <div className="card grnBkgn">
            
            <div className="card-image">
                {posting.numOfPics > 0 ? (
                    <figure className="image is-1by1">
                        <img alt="article" src={`${process.env.PUBLIC_URL}/images/post-images/post${posting.id}/upload0.jpg`} />
                    </figure>
                  ):(
                    <figure className="image is-1by1">
                        <img alt="article" src={process.env.PUBLIC_URL + "/images/image7.jpg"} />
                    </figure>
                )}
            </div>
            <div className="card-content">
              <div className="content">
                <b className="posting-title" style={{ textTransform: "capitalize"}}>
                  {posting.title} 
                </b>
                <br />
                <span className="tag">{posting.date.split(" ")[0]}</span>
              </div>

            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default PostingItem;