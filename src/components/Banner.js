import React from "react";
import withContext from "../withContext";

const Banner = props => {
    return(
        <>
            <section>
                <div className="banner">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <div className="columns is-mobile">
                                <div className="column">
                                    <div className="hero-contain banner-column">
                                        <figure className="image is-128x128">
                                            <img src={process.env.PUBLIC_URL + "/images/coat_of_arms_medium.png"} alt="Placeholder" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="hero banner-column">
                                        <b className="title is-size-5" style={{color:"black"}}>
                                            Jamaican High Commission
                                        </b>
                                        <b className="subtitle is-size-6" style={{color:"black"}}>
                                            Abuja, Nigeria
                                        </b>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div style={{padding:"0rem"}} className="column is-two-fifths">
                            <figure style={{paddingTop:"40%"}} className="hero-body image is-3by1">
                                <img src={process.env.PUBLIC_URL + "/images/consulate/consulate_office.jpg"} alt="Placeholder" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default withContext(Banner);