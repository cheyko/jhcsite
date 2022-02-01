import React from "react";

const ExternalItem = (props) => {
    const {link} = props;
    return(
        <div className="hero">
            <div className="card">
                <div className="card-image">
                    <a href={link.path}>
                        <figure className="image is-256x256">
                            <b style={{position:"absolute", zIndex:"1", backgroundColor:"rgb(0,0,0,0.3)", color:"white", margin:"1rem"}}> {link.title} </b>
                            <img className="slick-slide-image" alt={link.title} style={{position:"relative"}} src={process.env.PUBLIC_URL + `${link.url}` } />
                            <b style={{position:"absolute"}}> {link.caption} </b>
                        </figure>
                    </a>
                </div>
            </div>
            <br /><br />
        </div>
    )
}
export default ExternalItem;