import React from "react";
import {Link} from "react-router-dom";

const HorizontalCard = props => {
    return (
        <>
            <div className="hero container">
            <div className="card grnBkgn home-page-card-horizontal">
              <div className="card-content">
                <div className="columns">
                  <div className="column is-one-fifth commissionerPic" >
                    <Link to="/commissioner">
                      <figure className="image is-4x3">
                        <img style={{width:"100%",height:"100%",margin:"0 auto"}} className="image is-128x128" src={process.env.PUBLIC_URL + "/images/high_commissioner.jpg"} alt="Placeholder" />
                      </figure>
                    </Link>
                  </div>
                  <div className="column">
                    <p className="title is-4">{props.title}</p>
                    <p className="subtitle is-6">{props.subtitle}</p>
                    <p className="is-6" style={{color:"black"}}>{props.body}  <Link to="/commissioner" className="read-more-link"> Read More </Link> </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}
export default HorizontalCard;