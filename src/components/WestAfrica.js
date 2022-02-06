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
        <div className="hero about-westafrica">
           
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
                                <div className="box">
                                    <div className="hero">
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
                                
                                <Tab>Cameroon</Tab>
                                <Tab>Ghana</Tab>
                                <Tab>Nigeria</Tab>
                                <Tab>Senegal</Tab>
                                <Tab>Sierre Leone</Tab>
                                
                                
                            </TabList>
                            <br/>

                            <TabPanel>
                                <div className="cameroon message is-content">
                                    <div className="message-header">
                                        'The Indomitable Lions'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/cameroon.png"} alt="The National Flag of Cameroon" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`The National Flag of Cameroon`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/cameroon.png"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    The National Flag of Cameroon
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
                                <div className="ghana message is-content">
                                    <div className="message-header">
                                        'The Land of Gold'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/ghana.png"} alt="Lagos Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`The National Flag of Ghana`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/ghana.png"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    The National Flag of Ghana
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Republic of Ghana</b></li>
                                                        <li> 
                                                            Known as the Black Star of Africa, Ghana; the Land of Gold is one of 
                                                            Africa's most stable and succesful coutries. Ghana is one of the first 
                                                            West African Nations to gain independence, this on March 6, 1957 and then 
                                                            becoming a republic on the First of July 1960. This is sometimes attributed with the success of
                                                            Ghana's economy and political stability as the country has managed to create a very progressive country. Ghana is 
                                                            appreciate for its rich history, evergreen forestry, abundant wildlife,
                                                            and miles of sandy beaches. The country got its name from the medieval
                                                            trading empire which was inhabited the region northwest of the current 
                                                            state. Originally, these inhabitants commenced trading gold with the European Nations
                                                            of Portugal, England, the Netherlands, etc. During this period of Commerce
                                                            the european authorities were able to build forts and other establishments to 
                                                            protect their trading interest. Thereafter, The Slave trade was started and the focus
                                                            was shifted to this means of trading as it was more lucrative. After colonial rule ended, 
                                                            Nationalist and Pan African Leader Kwame Nkrumah took control as he beleived at 
                                                            time that it was necessary for Ghana to push for independence forseeing that it could have
                                                            a domino effect on the entire african continent. 

                                                        <br /><br />
                                                            Ghana's capital is the coastal city of Accra, located on the site of former 
                                                            Ga settlements. Over the Years, Accra has become a properous trading hub and the city
                                                            serves as an educational and commercial center for the country. Located in the south-central
                                                            part of the country is another prominent commercial centre called Kumasi which is refered
                                                            to as the 'Garden city of west africa'. In kumasi, resides the king of the Asante (also spelt ashanti) 
                                                            people; who holds the title Asantehene. Situated to the North and Northwest of Ghana is 
                                                            Burkino Faso, to the direct west is the Côte d’Ivoire (Ivory Coast), to the east lies togo And
                                                            its coastline sits on top of the Atlantic Occean. The chief river system of ghana is the Votla River,
                                                            which is formed from the confluence of the Black Volta and White Volta. Like most countries
                                                            located on the guinea coast ghana's climate is attributed to the combination of two air masses;
                                                            the hot dry winds travelling from the Sahara and the warm humid winds coming from the atlantic.       
                                                        <br /><br />
                                                            Ghana has a vast and rich collection of plant and animal life, engranged in its forestry.
                                                            Lions, leopards, hyenas, antelope, elephants, buffalo, wild hogs, chimpanzees, 
                                                            various monkeys and snakes live in its forestry regions. Not to mention a vast array of insects
                                                            such as beetles, butterflies, crickets, termites and bugs. Inhabiting the Volta River 
                                                            are crocodiles and manatees as well as other smaller aquatic animals that belong to the
                                                            eco-system. The occean and lakes are also filled with many fishes; such as sardines locally called
                                                            herring, anchovy, tuna, mackerel, soles, skates, mullet, bonitos, flying fish, lungfish, elephant fish, 
                                                            sea bream, and sharks. Also prawns, turtles and stingray occupy ghana's water bodies. Ethnicity in ghana is 
                                                            divided amongst various groups largest of which is the Akan along with the Mole-Dagbani, Ewe
                                                            Ga-Adangme and Gurma. More than fifty percent of the population are christians while about twenty 
                                                            percent are muslims and small portion of ghanian still practice indigineous religions. 

                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>
                            <TabPanel>
                                <div className="nigeria message is-success">
                                    <div className="message-header">
                                        'The Giant of Africa'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/nigeria.png"} alt="The National Flag of Nigeria" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`The National Flag of Nigeria`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/nigeria.png"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                   The National Flag of Nigeria
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
                                <div className="senegal message is-content">
                                    <div className="message-header">
                                        'Lions of Teranga'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/senegal.png"} alt="The National Flag of Senegal" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`The National Flag of Senegal`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/senegal.png"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    The National Flag of Senegal
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Senegal</b></li>
                                                        <li> 
                                                            Senegal is located at the westernmost point of Africa; strategically allow the country
                                                            to have multiple air and maritime travel routes. Hence, Senegal is known as the 
                                                            "Gateway to Africa". Senegal has a divised environment with a wide variety of
                                                            plant and animal life; which gives the country a strong natural heritage. The National
                                                            symbols of Senegal are the Lion and the Baobab Tree choices inspired by the rich terrain.  
                                                            Historically Senegal in the onset was apart of the Ghana and Djolof Kingdoms and was a very
                                                            important node on the trans-saharan caravan routes. Thereafter, European Nations such as 
                                                            England, France, Portugal and the Netherlands contested the area with hope of gaining 
                                                            a dominion over this logistically advantageous land. Eventually the area was
                                                            occupied by the french in the late 1800's and remained a Frence Colony 
                                                            until 1960 when it gained independence under the leadership of Leopold Senghor.
                                                            <br /><br />
                                                            Senegal predominantly cultivates peanuts(groudnuts), however the government has taken steps to
                                                            diversify the country's economy. a great number of senegalese are called 'Wolof',
                                                            members of a stratified group whose customs include hereditary nobility and a 
                                                            class of atriste called griots; musicians, storytellers, etc. The most important city
                                                            in senegal is its capital, Dakar. The city is lively and is an attractive metropolis
                                                            lcoated on the Cape Verde Peninsula along the atlantic shore. This makes it a very popular 
                                                            tourist destination. The Government has announced plans to eventually move the capital inland,
                                                            however it is expected that Dakar will remain one of Africa's most important Harbours and an
                                                            economic and cultural centre for West Africa as a whole.
                                                            <br /><br />
                                                            To the North of Senegal seperated by the Senegal River is the Country of Mauritania; To 
                                                            the East by Mali; to the South by Guinea and Guinea-Bissau and to the West by the Atlantic Ocean.
                                                            The southern Senegalese area of Casamance is isolated by a narrow strip of land that extends
                                                            from the coast eastward into Senegal along the Gambia River. Main rivers include;
                                                            the Senegal, Saloum, Gambia and Casamance Rivers. Senegal experiences a hot, dry
                                                            continental air that meets a moist oceanic air and produces heavy rainfall. Due to human settlements
                                                            most wildlife have migrated to the eastern part of the country. While in the extreme southwest area thereare dense 
                                                            forests and mangrove swamps.
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>
                            <TabPanel>
                                <div className="sierra-leone message is-success">
                                    <div className="message-header">
                                        'Leone Stars'
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="columns">
                                            <div className="column is-one-third">
                                                <figure className="image is-256x256">
                                                    <img className="card" onClick={() => {setOpen(true); setVal(4);}} src={process.env.PUBLIC_URL + "/images/about-westafrica/sierra-leone.png"} alt="The National Flag of Sierra Leone" />
                                                    {openImage && val === 4 && (
                                                        <Lightbox
                                                            imageTitle={`The National Flag of Sierra Leone`}
                                                            mainSrc={process.env.PUBLIC_URL + "/images/about-westafrica/sierra-leone.png"}
                                                            onCloseRequest={() => setOpen(false)}
                                                            
                                                        />
                                                    )}
                                                </figure>
                                                <figcaption>
                                                    The National Flag of Sierra Leone
                                                </figcaption>
                                                
                                            </div>
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Sierra Leone</b></li>
                                                        <li> 
                                                            The first European to sight and map freetown harbour was the Portugese Explorer Pedro de Sintra whom 
                                                            is accredited with naming the country. The original Portugese name, Serra Lyoa (“Lion Mountains”) 
                                                            is attributed to the range of hillsat surrounds the freetown harbour. This harbour is one of the world's
                                                            largest natural harbours and is located in the atlantic occean. The country is boreder by Guinea to the north and by 
                                                            liberia to the southeast. The terrain in the country is divised ranging from savana to rainforests and the 
                                                            country spans an area of over 70,000 square kilometers. Freetown is the largest city and is also the larges
                                                            capital of the west african nation. The country is divided into five administrative regions and further
                                                            subdivided into sixteen districts. Sierre Leone was granted Independence from britain in April 27, 1961
                                                            and became a Constitutional Republic on April 19, 1971.

                                                            <br /><br />
                                                            Sierre Leone has experinced an Internal conflict which began in the late 1980's and onwards spiral into
                                                            into a brutal civil war which started in 1991 and lasted until 2002. After the was culminated, the leadership 
                                                            of the country has undertaken the strenuous task of rebuilding the country’s physical and social infrastructure while fostering reconciliation.
                                                            Generally Sierre leoneans practice subsistence farming, however the country has is also
                                                            mining centre. A depiction of this is seen in many african thillmovie thrillers as the 
                                                            land is blessed with natural resources such as gold, diamonds,bauxite and rutile (titanium dioxide).

                                                            <br /><br />
                                                            The Country can be divided into four distinct regions; a coastal swamp, the sierre leone 
                                                            Peninsula, the interior plains and the interior mountainous region.
                                                            Sierre Leone has nine major rivers, tidal streams and coastal creeks. The principal rivers 
                                                            are the Great Scarcies, Little Scarcies, Rokel, Gbanbaia, Jong, Sewa, Waanje, Moa, And
                                                            Mano. Sierre leone has a tropical climate and the country experiences a alternation 
                                                            of rainy and dry seasons. The distribution of plants and animals has been influenced by factors such 
                                                            as the climate, soil types and more importantly human behaviour. The Country is made up of
                                                            18 ethnic groups all of which have similar characteristics. Similar features such as 
                                                            secret soceities, chieftaincy, patrilineal descent and farming methods are traits of the 
                                                            ethnic groups of sierre leone. Krio, a creole language formed from english is the native 
                                                            tongue of the country; however english is the official language. Majority of Sierre leoneans
                                                            are muslims while a quarter of the country practice christianity. Other religions include
                                                            Baha'i, Hinduism and Judaism.  
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </TabPanel>

                        </Tabs>
                        <div className="hero-body">
                            <div className="card">
                                <h1 style={{textDecoration:"underline"}}> Sources </h1>
                                <span> Britannica Encyclopedia : https://www.britannica.com/</span>
                                <br />
                                <span> Economic Community of West African States : https://www.ecowas.int/</span>
                                <br />
                                <span> Wikipedia : https://www.wikipedia.org/</span>
                            </div>
                        </div>
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

