import React from "react";
import {Link} from "react-router-dom";


const HorizontalCard = props => {
    return (
        <>
          <div className="hero container">
            <div className="box grnBkgn home-page-card-horizontal">
               
                <div className="columns">
                  <div className="column is-one-quarter commissionerPic" >
                    <Link className="governance link-to" to="/commissioner">
                      <figure className="image is-1by1">
                        <img style={{width:"100%",height:"100%",margin:"0 auto"}} className="card" src={process.env.PUBLIC_URL + "/images/consulate/high_commissioner.jpg"} alt="Placeholder" />
                      </figure>
                    </Link>
                  </div>
                  <div className="column">
                    <div className="yellowbkgn curve-border">
                      <p className="title is-4">{props.title}</p>
                      <p className="subtitle is-6">{props.subtitle}</p>
                    </div>
                    <br />
                    <p className="is-6" style={{color:"black"}}>{props.body}  &nbsp;&nbsp;<Link to="/commissioner" className="read-more-link button is-link is-small"> Read More </Link> </p>
                  </div>
                </div>
               
            </div>
          </div>
        </>
    );
}
export default HorizontalCard;