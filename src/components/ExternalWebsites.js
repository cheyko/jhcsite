import React from "react";
import Slider from "react-slick";
import ExternalItem from "./ExternalItem";

const ExternalWebsites = props => {
    const externalLinks = [
        {
            id : 0, url:"/images/attractions/bob-marley.jpeg", path : "https://www.bobmarleymuseum.com/", title : "Bob Marley Museum", caption : "Home of the Reggae Legend."
        },
        {
            id : 1, url:"/images/attractions/devon-house.jpeg", path : "https://www.devonhouseja.com/", title : "Devon House", caption : "Historical landmark."
        },
        {
            id : 2, url:"/images/attractions/emancipation-park.jpeg", path : "http://www.emancipationpark.org.jm/", title : "Emancipation Park", caption : "A Tribute to Freedom."
        },
        {
            id : 3, url:"/images/attractions/dunns-river.jpeg", path : "https://www.dunnsriverfallsja.com/", title : "Dunn's River Falls", caption : "Live some Life."
        },
        {
            id : 4, url:"/images/attractions/green-grotto.jpeg", path : "http://greengrottocavesja.com/", title : "Green Grotto Caves", caption : "A Journey into underworld charm."
        },
        {
            id : 5, url:"/images/attractions/harmony-beach.jpeg", path : "https://udcja.com/harmony-beach-park/", title : "Harmony Beach Park", caption : "A Tribute to Freedom."
        },
        {
            id : 6, url:"/images/attractions/jamaica-carnival.jpeg", path : "https://www.bacchanaljamaica.com/", title : "Jamaica Carnival", caption : "20 years of Pure Excitement."
        },
        {
            id : 7, url:"/images/attractions/Tosh-Guitar.jpeg", path : "https://petertosh.com/museum/", title : "Peter Tosh Museum", caption : "Legend & Pioneer of Marijuana Legalization."
        },
        {
            id : 8, url:"/images/attractions/blue-mountains.jpeg", path : "https://www.blueandjohncrowmountains.org/", title : "Blue Mountains", caption : "A UNESCO and National Heritage Site."
        },
        {
            id : 9, url:"/images/attractions/rio-cobre-rock.jpeg", path : "http://jamaica-star.com/article/news/20211124/rio-cobre-source-myths-heartaches-and-opportunities", title : "Bog Walk Gorge", caption : "Home of the Famous Rock."
        },
        {
            id : 10, url:"/images/attractions/cockpit-country.jpeg", path : "https://www.cockpitcountry.com/", title : "Cockpit Country", caption : "Endless Heritage."
        }
    ];

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
            <article style={{width:"initial"}} className="attractions message is-link is-size-5">
                <div className="message-header">
                    <p> Some Notable Attractions in Jamaica </p>
                </div>
                <div className="message-body info-link has-text-left">
                    <div className="slider-wrapper governance">
                        <div className="thumbnail thumbnail-slider-wrap "> 
                            <Slider {...settingsThumbs}>
                                {carousel}
                            </Slider>
                            <br/>
                        </div>
                        <small className="has-text-centered is-fullwidth">slide left or right</small>
                    </div>

                </div>
            </article>
        </>
    )
}
export default ExternalWebsites;