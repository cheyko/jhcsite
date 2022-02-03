import React, { useEffect, useState } from "react";
import withContext from "../withContext";
import Slider from "react-slick";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
import ExternalWebsites from "./ExternalWebsites";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import ExternalItem from "./ExternalItem";
import axios from "axios";
import Lightbox from "react-image-lightbox";

const WestAfrica = props => {

    const [firstload, setLoad] = useState(true);

    useEffect( () => {
        if (firstload){ 
            window.scrollTo(0,0);
            setLoad(false);
        }
    });

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyload: 'progressive',
        autoplay: true,
        autoplayspeed: 3000,
        responsive:[
        {
            breakpoint: 700,
            settings: {
                arrows: false,
            }
        }
        ]
    };

    const slides = [
        {
            id : 0, info : "test0", path : "/images/about-westafrica/nike-art-center.jpeg", label : "Nike Art center in Lagos, Nigeria."
        },
        {
            id : 1, info : "test1", path : "/images/about-westafrica/Reunification-Monument.jpeg", label : "Reunification Monument is in Yaounde, Cameroon. This was built in 1970."
        },
        {
            id : 2, info : "test2", path : "/images/about-westafrica/Baobab_Senegal.jpeg", label : "Royal Horizons Baobab, Senegal."
        },
        {
            id : 3, info : "test3", path : "/images/about-westafrica/Kwame-Nkrumah-Park.jpeg", label : "Kwame Nkrumah Park is located in Downtown Accra, Ghana."
        },
        {
            id : 4, info : "test4", path : "/images/about-westafrica/bunce-island.jpeg", label : "Located in the Sierra Leone River, the Bunce Island has dwellings dating back to the 1670's."
        }
    ];

    const [openImage, setOpen] = useState(false);
    const [val, setVal] = useState(0);

    return(
        <div className="hero about-jamaica">
           
            <div className="slideshow"> 
              <div className="slick-wrapper">
                <Slider {...settings}>
                  {slides.map((slide,index) => 
                      <figure key={index}>
                          <img className="slick-slide-image customSlide" 
                            name={slide.id} alt={slide.info} src={process.env.PUBLIC_URL + slide.path}>
                          </img>
                          <figcaption className="slide-label">{slide.label}</figcaption>
                      </figure>
                  )}
                </Slider>
              </div>
            </div>
            <div className="header">
                <div className="hero blkYellow page-header" >
                    <div className="page-header-body container">
                        <h4 className="title"> The Western Side of the 'MotherLand'. </h4>
                    </div>
                </div>
                <br />
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><span aria-current="page">&nbsp;West Africa</span></li>
                    </ul>
                </nav>
            </div>
            <div className="hero"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        
                        <div className="message is-content">
                            <div className="message-header">
                                <p>ABOUT WEST AFRICA</p>
                            </div>
                            <div className="message-body has-text-left">
                                <div className="columns">
                                    <div className="column is-one-third">
                                        <div className="rows">
                                            <div className="row">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(1);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/labadi-beach.jpeg"} alt="Labadi Beach" />
                                                    {openImage && val === 1 && (
                                                        <Lightbox
                                                            imageTitle={`Labadi Beach located in Accra, Ghana.`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/labadi-beach.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    Labadi Beach - Located in Accra, Nigeria.
                                                </figcaption>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(2);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/african-renaissance.jpeg"} alt="African Renaissance Monument" />
                                                    {openImage && val === 2 && (
                                                        <Lightbox
                                                            imageTitle={`49m tall bronze statue located on top of one of the twin hills known as Collines des Mamelles.`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/african-renaissance.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    African Renaissance Monument - Outside Dakar, Senegal
                                                </figcaption>
                                            </div>
                                            <br/>
                                            <div className="row">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(3);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/idanre-hills.jpeg"} alt="Idanre Hill" />
                                                    {openImage && val === 3 && (
                                                        <Lightbox
                                                            imageTitle={`Idanre Hill`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/idanre-hills.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    Idanre Hill located in Nigeria.
                                                </figcaption>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="column">
                                        <ul>
                                            <span className="box info-link">
                                                <li> <Link to="https://www.ecowas.int/" className="subtitle"> From the Gold Coast to the Sahara; From the Canary Islands to the Center of the African Continent ! </Link> </li>
                                                <li> 
                                                    West Africa is as the name suggest, is the western most region on the African Continent. The Economic 
                                                    Community of West African States (Ecowas) established on May 28, 1975 via the Treaty of Lagos is
                                                    comprised of 15 member states. These include Benin, Burkina Faso, Cape Verde, Cote d’ Ivoire, 
                                                    The Gambia, Ghana, Guinea, Guinea Bissau, Liberia, Mali, Niger, Nigeria, Sierra Leone, Senegal and Togo.
                                                    With over 300 million people and spanning an area of over 5.1 million square kilometers, the region is
                                                    one of the fatest developing areas in Africa. Officially these member states use English, French and Portugese
                                                    as their languages however there are several other languages that are spoken by the people of west africa.
                                                    <br /> <br />
                                                    Historically, the area was host many prominent kingdoms and empires such as the Ghana, Mali Songhai, Wolof,
                                                    Oyo, Benin and Kanem Bornu. During these historical periods, West Africa was a logistical hub for goods being 
                                                    transported between the Northern and Southern regions of the african continent. An array of items such as gold,
                                                    advanced iron-workings and ivory were traded in these regions. After discovering these castly rich local
                                                    Communities and kingdoms, European Officials capitalized on the existing slave systems and created what is known as 
                                                    the Trans-Atlantic Slave Trade. Exploitation of the region continued post slavery which prompted West African leaders
                                                    to challenge the colonial hierarchy and demand Independence for their respective states.
                                                    <br /> <br />
                                                    With West Africa being situated to the South and West of the Sahara; the area experiences dry winds during Harmattan
                                                    and With the region being to the East and North of the Atlantic, the coutries experince seasonal mansoons.
                                                    This demographic allows for West Africa's unique ecology, Strong biodiversity and a plethora of
                                                    distinct regions.   
                                                </li>
                                                
                                            </span>

                                        </ul>
                            
                                    </div>

                                </div>
                            </div>
                        </div>
                    </article>
                
                    <hr />
                
                    <article>
                        <h1 className="subtitle is-size-3"> West African States served by the consulate. </h1>
                        
                        <Tabs>
                            
                            <TabList>
                                <Tab>Nigeria</Tab>
                                <Tab>Cameroon</Tab>
                                <Tab>Ghana</Tab>
                                <Tab>Senegal</Tab>
                                <Tab>Sierre Leone</Tab>
                            </TabList>
                            <br/>
                            <TabPanel>
                                <div className="heroes message is-success">
                                    <div className="message-header">
                                        'The Giant of Africa'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`Lagos, Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   Lagos, Nigeria - One of the most populous cities in Africa.
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Federal Republic of Nigeria</b></li>
                                                        <li> The Nation of Nigeria was named after the Niger River that flows through the country.
                                                            Nigeria comprises 36 states and it is the most populous country in Africa, 
                                                            with over 200 million people. With Chad to the Northeast, Cameroon to the east and Benin to
                                                            the west, the federal republic spans an area almost 1 million square kilometres. The 
                                                            captial city, Abuja is located in the center of the country while on the atlantic coastline sits
                                                            the former capital and largest city and second largest in africa, Lagos. before colonialism,
                                                            Nigeria consisted of many states and kingdoms with The Nok civilization is accredited with 
                                                            acheiving the first iternal unification of the country; this in the 15th century.
                                                            Officially Nigerians speak English however there are a great number of other languages which
                                                            are native to the people. There are also many ethnic groups that Nigerians are apart of;
                                                            Hausa, Yoruba and the Igbo ethnic groups are the largest in the subcontinent state, totaling
                                                            more that half of the total population. The African Nation is home to a large group of muslims; 
                                                            living in the North and christians residing in the South.
                                                        <br /><br />
                                                            Nigeria gained its independence from Britain on October 1, 1960 with Abubakar Tafawa Balewa as 
                                                            its prime minister and the British Monarch, Elizabeth the 2nd as the Head of State. Subsequently
                                                            three years later the Country became a Federal republic with Nnamdi Azikiwe as its First 
                                                            President. During the later stages of the 1960's several coups and wars ensued due to perceived 
                                                            corruption and a lack of trust of Government Officials. Following these conflicts however, Nigeria
                                                            had major oil discoveries during the 1970's and as a result joined the Oganisation of 
                                                            Petroleum Exporting Countries (OPEC). As expected, Oil brought massive revenues, however 
                                                            it is beleived that the military government did not make galant attempts to imporve
                                                            the standard of living for the general population. Thereafter over the years, other
                                                            military fractions stages attempts to gain control over the country; some being successful while others
                                                            proved futile. A second constitution was drafted in 1977 and this saw a return to civilian leadership
                                                            and elctorial events fitting of a democracy. 
                                                        <br /><br />
                                                            Civilian rule was reverted in 1983, when key officers of the Nigerian military staged
                                                            another coup; this on New Years Eve. This resulting in the creation of a third republic
                                                            and promises were made to address the countries state of affairs. These intentions were
                                                            not fulfilled and other military fractions took control of the State. It took the creation
                                                            of a fourth republic on May 29, 1999 for nigeria to finally start fulfilling
                                                            it potential as a great nation. Currently, Nigeria's Head of State and president is Muhammadu
                                                            Buhari. He was one of the military leader who took control during the 80's however, 
                                                            returned to politics at the Start of the 21st Century, as a democrat and beleiver in the 
                                                            electorial process. Buhari has professed changes to the way of governing, has stated that he harbors
                                                            regrets for the past and Nigeria is seeing signs of progress and prosperity. Nigeria has a large 
                                                            agriculture sector, with vast numbers of people employed to it. Beans, sesame, cashew nuts, 
                                                            casava, cocoa beans, groudnuts, gum arabic, kolanut, maize (corn), melon, millet, palm 
                                                            kernels, palm oil, plantains, rice, rubber, sorghum, soybeans and yams are all cultivated in Nigeria.
                                                            There are many sites and activities to undertake in nigeria, with lagos booasting strong and 
                                                            vibrant nightlife culture.
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>

                            <TabPanel>
                                <div className="heroes message is-success">
                                    <div className="message-header">
                                        'The Indomitable Lions'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`Lagos, Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   Lagos, Nigeria - One of the most populous cities in Africa.
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Republic of Cameroon</b></li>
                                                        <li> 'The Miniature of Africa' is a moniker often used for the Nation that has its coastline
                                                            in the Gulf of Guinea. Cameroon's surface area spans west to central africa sharing 
                                                            borders with Nigeria, Chad, The Central African Republic, Equitorial Guinea, Gabon
                                                            and the Republic of Congo. The Capital of Cameroon is Yaounde; located in the Southern
                                                            region of the country with a population of around about 2.8 million, is the 
                                                            second largest city in the country after the Port City of Doula. 
                                                            Originally Cameroon was inhabitant by the Sao civilization; 
                                                            who people resided around Lake Chad, and in the southeastern rainforest as 
                                                            occupied by the Baka hunter gatherings. The country got its name from Portugese
                                                            explorer whom landed on the coast in the 15th century and gave the land the name
                                                            'Rio dos Camaroes' meaning River of Prawns which translate to English as Cameroon. In the 1800's, Fulani
                                                            Soldiers founded the Adamawa Emirate which was populated by various ethnic groups 
                                                            that succesfully established powerful chiefdoms and kingdoms. 
                                                            
                                                        <br /><br />
                                                            Germany colonised 
                                                            cameroon in 1884 calling the country 'Kamerun' and after the first great war
                                                            the League of Nation mandate that control of the country be shared between
                                                            the United Kingdon and France. 
                                                            During the 1950's, The french outlawed the political 
                                                            movement called Union des Populations du Cameroun (UPC); a group that staunchly
                                                            advocated for Independence. This led to the National liberation insurgency,
                                                            a conlfict fought between French and UPC forces; lasting up until 1971. In
                                                            1972 the country was renamed the United Republic of Cameroon and In 1984
                                                            later renamed the Republic of Cameroon. 
                                                        <br /><br />
                                                            The Country has the highest elevation in West Africa; Mount Cameroon, An Active Volcano
                                                            rising over 13,435ft. There are several rivers in Cameroon that make up
                                                            a large drainage system the longest of which is the Benue and Chari Rivers.
                                                            With a tropical climate, the country is hot throughout the year with temperatures 
                                                            ranging from the low 70s to the low 80s. Cameroon has a rich tropical 
                                                            rainforest with a vast array of plant and animal life. The Waza National Park in
                                                            the North was created for the protection of wild animals including: elephants, 
                                                            chimpanzees, monkeys, baboons, lions, leopards, and birds. There are three
                                                            major linguistic groups; the sudanic speaking peoples of the North, the
                                                            bantu speaking peoples of the west and those who speak the semi-bantu
                                                            languages. The Head of State of Cameroon is Paul Biya who is the longest-ruling 
                                                            non-royal leader in the world, and the oldest head of state in Africa.
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>
                            <TabPanel>
                                <div className="heroes message is-success">
                                    <div className="message-header">
                                        'The Land of Gold'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`Lagos, Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   Lagos, Nigeria - One of the most populous cities in Africa.
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Republic of Ghana</b></li>
                                                        <li> 

                                                        <br /><br />
                                                                                                                    
                                                        <br /><br />
                                                            
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>
                            <TabPanel>
                                <div className="heroes message is-success">
                                    <div className="message-header">
                                        'Leone Stars'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`Lagos, Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   Lagos, Nigeria - One of the most populous cities in Africa.
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Sierra Leone</b></li>
                                                        <li> 

                                                            <br /><br />
                                                                
                                                            <br /><br />
                                                            
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>

                            <TabPanel>
                                <div className="heroes message is-success">
                                    <div className="message-header">
                                        'Lions of Teranga'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`Lagos, Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/lagos-nigeria.jpeg"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   Lagos, Nigeria - One of the most populous cities in Africa.
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Senegal</b></li>
                                                        <li> 

                                                            <br /><br />
                                                                
                                                            <br /><br />
                                                            
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>
                        </Tabs>
                    </article>

                    <br></br>
                    <ExternalWebsites />
                    <br></br>
                </div>

                <div className="column is-one-quarter">
                  <SideBar />
                </div>

              </div>
            </div>
          
        </div>
    )
}
export default withContext(WestAfrica);

