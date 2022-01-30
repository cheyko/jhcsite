import React from "react";
import withContext from "../withContext";

const Banner = props => {
    return(
        <>
            <section>
                <div className="banner">
                    <div className="columns">
                        <div className="column">
                            <div className="hero banner-column">
                                <figure className="image is-4x3">
                                    <img src={process.env.PUBLIC_URL + "/images/brand-jamaica/image1.jpg"} alt="Placeholder" />
                                </figure>
                            </div>
                        </div>
                        <div className="column has-text-centered is-two-fifths">
                            <div className="hero banner-column">
                                <p className="title" style={{color:"black"}}>
                                    Jamaican High Commission
                                </p>
                                <p className="subtitle" style={{color:"black"}}>
                                    Abuja, Nigeria
                                </p>
                            </div>
                        </div>
                        <div className="column is-two-fifths">
                            <figure className="image is-2by1">
                                <img src={process.env.PUBLIC_URL + "/images/consulate_office.jpg"} alt="Placeholder" />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default withContext(Banner);