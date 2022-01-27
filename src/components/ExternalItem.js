import React from "react";

const ExternalItem = (props) => {
    const {link} = props;
    console.log(link);
    return(
        <div className="hero">
            <div className="card">
                <div className="card-image">
                    <a href={link.path}>
                        <figure className="image is-256x256">
                            <p style={{position:"absolute", zIndex:"1", backgroundColor:"rgb(0,0,0,0.3)", color:"white", margin:"1rem"}}> {link.title} </p>
                            <img className="slick-slide-image" alt={link.title} style={{position:"relative"}} src={process.env.PUBLIC_URL + "/images/image4.jpg"} />
                            <p style={{position:"absolute"}}> {link.caption} </p>
                        </figure>
                    </a>
                </div>
            </div>
        </div>
    )
}
export default ExternalItem;