import React from "react";
import Slider from "react-slick";
import ExternalItem from "./ExternalItem";

const ExternalWebsites = props => {
    const externalLinks = [
        {
            id : 0, path : "https://www.gov.jm/", title : "Government of Jamaica", caption : "The Gateway to Government Information and Services"
        },
        {
            id : 1, path : "", title : "", caption : "test2"
        },
        {
            id : 2, path : "", title : "", caption : "test3"
        },
        
    ]

    const carousel = externalLinks.map((link,index) => (
        <div key={index} className="slick-slide">
            <ExternalItem link={link} key={index} />
        </div>
    ));

    const settingsThumbs = {
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '10px',
        zIndex:0,
        position:'relative',
        responsive:[
          {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            }
          },
          {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
            }
          }
        ]
    };

    return (
        <>
            <article style={{width:"initial"}} className="message is-link is-size-5">
                <div className="message-header">
                    <p> External Links </p>
                </div>
                <div className="message-body">
                    <div className="slider-wrapper imagesContainer">
                        <div className="thumbnail thumbnail-slider-wrap"> 
                            {<Slider {...settingsThumbs}>
                                {carousel}
                            </Slider>}
                        </div>
                    </div>

                </div>
            </article>
        </>
    )
}
export default ExternalWebsites;