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

const Jamaica = props => {

    const [firstload, setLoad] = useState(true);

    useEffect( () => {
        if (firstload){ 
            window.scrollTo(0,0);
            setLoad(false);
        }
    });
     

        /*const response = axios.get('https://jamaica-gleaner.com/feed/rss.xml', {
          method: 'GET', 
          mode: 'no-cors' 
        }).then(data => {
            console.log(data);
        });*/
        //return response.json(); 
     
      //console.log(response);
    //postData().then(data => {console.log(data);});

    /*async function postData() {

        const response = await fetch('https://jamaica-gleaner.com/feed/rss.xml', {
          method: 'GET', 
          mode: 'no-cors',  
        });
      }
      
      postData().then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
        });*/

    const [openImage, setOpen] = useState(false);
    const [val, setVal] = useState(0);

    return(
        <div className="hero about-jamaica">
            <div className="header">
                <div className="hero blkYellow page-header" >
                    <div className="page-header-body container">
                        <h4 className="title"> The Land of Wood and Water </h4>
                    </div>
                </div>
                <br />
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li className="is-active"><span aria-current="page">&nbsp;Jamaica</span></li>
                    </ul>
                </nav>
            </div>
            <div className="hero"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        
                        <div className="message is-content">
                            <div className="message-header">
                                <p>' OUT OF MANY, ONE PEOPLE '</p>
                            </div>
                            <div className="message-body has-text-left">
                                <div className="columns">
                                    <div className="column">
                                        <ul>
                                            <span className="box info-link">
                                                <li> <Link to="https://www.visitjamaica.com/" className="subtitle"> What makes this Island Nation Special ? </Link> </li>
                                                <li> 
                                                    Located in the Tropics; 18°  North Latitude and 77° West of Greenwich, this island is home to
                                                    some of the World's most prestigious People, Places and Things. Jamaica is in The Greater Antilles in the center  
                                                    of the Caribbean Sea; situated to left of the Island of Hispanola (countries: Haiti & Domonican Republic), South of Cuba
                                                    and to the North of Panama and Columbia. Approximately the island spans 235km in length from east to west and
                                                    a width of 80km from the North Coast to South Coast. A total area of 10,991 sq km with the status 
                                                    of an archipelagic state by the Maritime Areas Act, Jamaica's territory extends beyond its coastline
                                                    to comprise some 66 islands, rocks and cays.
                                                    <br /> <br />
                                                    The Island consist of a total of 14 parishes; Kingston, St. Andrew, St. Catherine, Clarendon, Manchester,
                                                    St. Elizabeth, Westmoreland, Hanover, St. James, Trelawny, St. Ann, St. Mary, Portland and St. Thomas spread 
                                                    across three counties; Cornwall, Middlesex and Surrey. The Capital City Kingston is located on the South Coast,
                                                    while on the North Coast lies the Second largest City; Montego Bay. The Country has a population of 
                                                    Three Million People with a large diaspora living and working in several other countries. The motto of the Nation
                                                    is 'Out of Many, One People'.
                                                    <br /> <br />
                                                    The Island has many Rivers and streams; the longest of which is The
                                                    Rio Minho, in Clarendon. Jamaica has a topography of many hills, valleys and plateaus; giving the Island a very distinct scenary. 
                                                    Main sectors contributing the countries GDP are tourism,manufacturing, mining and agriculture. 
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
                        <h1 className="subtitle is-size-3"> About Jamaica </h1>
                        
                        <Tabs>
                            
                            <TabList>
                                <Tab>National Heroes & Heroin</Tab>
                                <Tab>History</Tab>
                                <Tab>Governance</Tab>
                                <Tab>Tourism</Tab>
                                <Tab>Trade and Investment</Tab>
                            </TabList>
                            <br/>
                            <TabPanel>
                                <div className="heroes message is-content">
                                    <div className="message-header">
                                        Recipient's of the Order of National Hero
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="box">
                                             <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Nanny of the Maroons</b></li>
                                                        <li> Nanny became leader of the Windward Maroons in the 18th century. She was regarded as an outstanding leader; highly skilled in warfare who became, in her lifetime and after, a symbol of unity and strength for her people during times of crisis. She led the maroons during the first maroon war from 1720-1739.

                                                        <br /><br />
                                                        Nanny was a small, wiry woman with piercing eyes. Her influence over the Maroons was so strong, that it seemed to be supernatural and was said to be connected to her powers of obeah. She was particularly skilled in organising the guerilla warfare carried out by the Eastern Maroons to keep away the British troops who attempted to penetrate the mountains to overpower them.
                                                        <br /><br />
                                                         Her cleverness in planning guerilla warfare confused the British and their accounts of the fights reflect the surprise and fear which the Maroon traps caused among them.
                                                        On March 31, 1982 the Right Excellent Nanny of the Maroons was conferred the Order of the National Hero as per Government Notice 23 Jamaica Gazette along with Sam Sharpe.
                                                        </li>
                                                        
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Marcus Garvey</b></li>
                                                        <li> Marcus Garvey is regarded as one of the most important persons in the cause for world negro improvement. A charismatic and often Fearles Black Leader organised several movements, organisations and businesses locally and internationally.
                                                        <br /><br />
                                                        Marcus receive formal education upon until 14 while attending school in Jamaica and afterwards self-educated himself to a very high esteem and standard. On August 1, 1914, He along with friend formed the Universal Negro Improvement and Conservation Association and African Communities League, usually called the Universal Negro Improvement Association (UNIA), which sought, among other things, to build in Africa a Black-governed nation and to generally improve the standard of living for people of colour. 
                                                        <br /><br />
                                                        Marcus Garvey created his own newspaper 'The Negro World' which was printed in several languages. He was also instrumental in establishing the Negro Factories Corporation and the Black Star Line (1919), as well as a chain of restaurants and grocery stores, laundries, a hotel, and a printing press.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Sam Sharpe</b></li>
                                                        <li> In 1831, Samuel Sharpe; a reputed baptist leader originating from western jamaica; organised and spearheaded a rebellion which began on the Kensington Estate in St. James and which is beleived to have been a major contributing factor in bringing about the abolition of slavery. Sam Sharpe through his religious gatherings was able to communicate his idealogies as due to his intelligence was given leadership of the western native baptists. 
                                                                <br /><br />
                                                                More affectionately called 'Daddy', Sam Sharpe devised a plan of passive resistance in which the slaves would refuse to work on Christmas Day of 1831 and afterwards; which seriously disturbed the plantation owners. On December 27,1831, the Kensington Estate Great House was set on fire, as a signal that the Slave Rebellion had begun. 
                                                                <br /><br /> 
                                                                A series of other fires broke out in the area and soon it was clear that the plan of non-violent resistance, which Sam Sharpe had originated, was impossible and impractical. Armed rebellion and seizing of property spread mostly through the western parishes, but the uprising was put down by the first week in January.A terrible retribution followed. While 14 whites died during the Rebellion, more than 500 slaves lost their lives – most of them as a result of the trials after.Samuel Sharpe was hanged on May 23, 1832. In 1834 the Abolition Bill, was passed by the British Parliament and in 1838, slavery was abolished.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b>Paul Bogle</b></li>
                                                        <li> Paul Bogle was a baptist deacon from Stony Gut a few miles North of Morant Bay. He was beleive to have been borned in 1822 and became eligible to vote at a time when there were only 104 voters in the parish of St. Thomas. He was a firm political supporter of George William Gordon.
                                                                <br /><br />
                                                                Poverty and injustice in the society along with a lack of public confidence in the central authority urged Bogle to lead a protest march to the Morant Bay courthouse on October 11, 1865. This resulted in violent altercations with official forces that were summoned to put defuse the march. Nearly 500 people were killed and a greater number were punished by way of flogging before order was restored.
                                                                <br /><br />
                                                                Bogle was captured and hanged on October 24, 1865; but his forceful demonstration achieved its objectives. It paved the way for the establishment of just practices in the courts and it brought about a change in official attitude, which made possible the social and economic betterment of the people. In recognition of his efforts, Bogle was conferred with the Order of the National Hero in 1969 as per the second schedule of the National Honours and Awards Act.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b> George William Gordon </b></li>
                                                        <li> George William Gordon was borned to a slave mother and a planter father who was also an attorney for many of the sugar estates. He was self-educated landowner residing in the parish of St. Thomas. He latter joined the politcal movement as a mean to deter the attempts to crush the spirit of the freed people of Jamaica and again reduce them to slavery. 
                                                                <br /><br />
                                                                Seeing that George William Gordon politcal agenda was to help the plight of freed folks he faced several odds as those whom he wish to aid were not eligible to vote. He divised a marketing system by subdividing his own lands; selling them as farm lots at a reduced cost
                                                                 thus encouraging freed folks to cultivate crops and sell them at fair prices. Gordon urged the people to protest against and resist the oppressive and unjust conditions under which they were forced to live.
                                                                 <br /><br />
                                                                 After the Morant Bay rebellion in 1865, George William Gordon was arrested and charged for complicity. In spite of a lack of evidence, He was however illegally tried by Court Martial, subsequently convicted and sentenced to death. He was executed on October 23, 1865. Gordon was one of three persons conferred with the Order of the National Hero in 1969 as per the second schedule of the National Honours and Awards Act.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="hero">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b> Alexander Bustamante</b></li>
                                                        <li> Alexander Bustamante was the first prime minister of Jamaica this after winning the first general elections after the nationgained its independence in 1962. Born on February 24, 1884 in Blenheim, Hanover to parents Robert Constantine Clarke, and wife Mary nee Wilson. Over the years Bustamante worked several in several areas of soceity. He worked as a Store Clerk, a Bee Keeper, a Dairy Farmer, a Junior Estate Overseer, a Tramcar Inspector, a Wall Street Speculator, a Money Lender and a Trade Unionist.
                                                        <br /><br />
                                                        Known for his terse and telling phrases that cut to the quick of things, and for remarkable stamina that made him work tirelessly all over the island, particularly at the waterfront and at the sugar estates, where there were great concentrations of people. He tended to have a dictatorial style, marked nevertheless with sparkling magnanimity. Bustamante was very tall standing at approximately 6’5’ with gangling gait. A strong, wiry body and shock of grey hair made him a sort of living legend to the masses whose cause he championed against the colonial powers.
                                                        <br /><br />
                                                        He married Gladys Longbridge on September 7,1962 and though he father no children of his own; left behind a legacy which he  shares with his cousin Norman Washington Manley, the honour of being one of the two ‘Founding Fathers’ of Jamaica’s Independence, attained peacefully on August 6, 1962. Alexander Bustamante died at the age of 94 years old on independence day August 6 of 1977.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                        <div className="box">
                                            <div className="column">
                                                
                                                <span className="box info-link">
                                                    <ul> 
                                                        <li><b> Norman Manley </b></li>
                                                        <li> A respected lawyer and legislator whom became King's Counsel is regard as one of the Founding Fathers of the Nation of Jamaica. His father, Thomas Albert Samuel Manley, was a planter and produce dealer from Porus and his mother Margaret Ann (nee Shearer), a small pen keeper from Blenheim in Hanover. Norman Manley was borned on July 4, 1893, his birthplace in Roxborough, Manchester is now a National Monument. After the death of his father while he was at a young age, Norman's mother moved to Belmont, St. Catherine with her children.
                                                                <br /><br />
                                                                Norman Manley was registered at Guanaboa Vale Elementary School at eight years old.  He excelled in the classroom and began his secondary education at Wolmer’s Boys’ School in Kingston for a year.  However, the following year he drew nearer home and attended Beckford and Smith’s in Spanish Town. Later on, he won an Open Scholarship to Jamaica College where his gift for athletics found full expression.  After leaving school he taught at Jamaica College, Hope Farm School until he received news that he had won the Rhodes Scholarship. He read Law at Jesus College, Oxford where his studies were interrupted by World War I.  In 1919 he resumed his studies at Oxford University, gained First Class Honours and won the Lee Prizeman (Essay) Award at Gray’s Inn before being called to the Bar in 1921.  In that same year he married his cousin Edna Swithenbank.
                                                                <br /><br />
                                                                While working at Jamaica Welfare Limited, Manley became deeply involved in the economic and political upheaval of the 1930’s. He was involved in union activities, which led to the establishment of the Trade Union Congress (TUC). On September 18, 1938 the People’s National Party was launched at a huge meeting at the Ward Theatre.  The formation of this party was indeed the beginning of the national movement for self-government. Six years later, in 1944, the first election under Adult Suffrage.  The People’s National Party was largely responsible for paving the way towards the establishment of the new constitution, which gave all Jamaicans the right to vote. The party was, however, defeated at the polls that year but won in 1955. He was was conferred the Order of National Hero after his death.
                                                        </li>
                                                    </ul>   
                                                        
                                                </span>

                                            </div>
                                        </div>
                                        <br />
                                    </div>
                                </div>   
                            </TabPanel>

                            <TabPanel>
                                <div className="history message is-content">
                                    <div className="message-header">
                                        From Columbus to Nationalism
                                    </div>    
                                    <div className="message-body has-text-left">
                                    <div className="box grnBkgn has-text-centered"><b> <Link to="https://jis.gov.jm/information/jamaican-history/" className="subtitle" style={{color:"yellow"}}> Jamaica's Timeline </Link> </b></div> 
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Inhabitants</b></li>
                                                        <li> Jamaica was first inhabited by Tainos; people of Arawak Ethinicity. It is beleived that these
                                                            individuals migrated centries ago from south america to the island and gave it the name 'Xaymaca'
                                                            which in their language meant "land of wood and water". A generally peaceful people even though they
                                                            had tribal conflicts with the Kalinagoes (caribs) from other neighbouring islands.
                                                            <br /><br />
                                                            For their way of life, the dis farming were they grew casava, sweet potatoes, maize(corn), fruits,
                                                            vegetables, cotton and tobacco. Tobacco was planted on a large scale as smoking was a popular pasttime in 
                                                            their culture. They built villages all over the island logistically doing so near rivers and by the coastline 
                                                            as fishing was also a means of finding food.
                                                    </li>
                                                            
                                                        
                                                    </span>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>European Arrival</b></li>
                                                        <li> The First set of Europeans to arrive in Jamaica were the Spanish in 1494 on May 5, when Christopher 
                                                            Columbus landed on the Island on his famous second voyage. Columbus mission to the Caribbean original was 
                                                            to find a new trade route to East India and as well as for any typical explorer; to discove new treasures of 
                                                            gold and precious stones. After landing on the Island the Spaniards had to stave off hostilities from the Tainos
                                                            whome were the first ihabitants of the land. Then subsequently after finding no gold on the island, Columbus went 
                                                            back to the Spanish crown and proposed that the Spanish could gain control of the caribbean islands by having a dominion 
                                                            over them using force and religious practises which were foreign to the Arawak people. 
                                                        </li>
                                                    </span>

                                                </ul>
                                            </div>
                                        </div> 
                                        
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Spanish Colony</b></li>
                                                        <li> The Spanish saw Columbus's voyages as a new means of expanding its empire 
                                                            and impose a system upon the island called 'encomienda'. This system proved to be very 
                                                            detrimental to the population of the indigineous people as they were not acostomed to the hard
                                                            large and mal treatment from the Spanish. Consequently, this saw a drastic reduction in the 
                                                            population of the Tainos on the island as many died of Exuastion, Fatique and Diseases. This led
                                                            to the Start of the African Slave Trade as the spanish had desires to expand its empire by building 
                                                            Colonies used to generate income for its coffers.   </li>
                                                    </span>
                                                </ul>
                                            </div>
                                        </div>     
                                        
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Capture by The British</b></li>
                                                        <li> 
                                                            Durng the Anglo-Spanish wars in the 17th Century, under the Rule of Oliver Cromwell; The British 
                                                            Annexed Jamaica in 1655 as a part of Cromwell's plan known as the 'Western Design'. This expedition
                                                            was headed by admiral penn and general venables, after their failure to sack havana, Cuba from the Spanish
                                                            the english fleet subsequently attacked Santiago de la Vega, which was beleived to not be heavily defended 
                                                            at the time. This led to the Spanish formally ceding Jamaica the English in 1670 with the Treaty of Madrid
                                                            and the English renamed the capital Spanish Town. 
                                                        </li>
                                                    </span>

                                                </ul>
                                            </div>
                                        </div>  
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Transatlantic Slave Trade</b></li>
                                                        <li> The British continued with the practise of slavery as it was seen as a lucrative means
                                                            of gaining a labour force; neglecting the human rights of the people of mainly west african 
                                                            ethnicity. The Slaves were supplied from the african continent and transported by ships to the Caribbean
                                                            were in Jamaica, they worked on plantations growing crops which were cultivated and transported by said ships
                                                            to England. These plantations grew at commencement Tobacco, indigo and cocoa, then sugar was introduced and 
                                                            became what was called a 'cash crop' and the main product for export along its by-products rum and molasses. 
                                                            This process of Slaves to the Caribbean,Raw materials and crops to Europe, and European goods and money back 
                                                            to africa was known as the 'Middle Passage'. 
                                                            <br /><br />
                                                            Slavery lasted for several decades and face tumultuous challenges as slaves were treated very harshly and face severe punishment
                                                            for showing any form of neglect of duties or deceit. This led to several rebillions and revolts across even in other
                                                            european terittories across the caribbean. These revolts saw tremendous destruction to commercial and 
                                                            residential entites of the Slaves Master and the Crown at large. And also as well; Slave rebellion came with 
                                                            severe injuries and loss of life for the Slaves whome were also seen as property, hence deemed losses financially 
                                                            for the Plantation owners. Former slaves of the spanish whom still resided on the island called maroons led by Chiefs such as
                                                            National Heroin Nanny, Tacky, Coffee, Cudjoe; also had
                                                            conflicts with the english known as maroon wars, resulting in the signing of peace treaties. Each Treaty had several terms of 
                                                            agreement and were seen as a necessity due to the extents of the conflicts. 

                                                            </li>
                                                    </span>

                                                </ul>
                                            </div>
                                            
                                        </div>  
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Emancipation & Indentureship</b></li>
                                                        <li> Slavery was abolished on the Island in 1834 and an apprentiseship period took place over fours years.
                                                            During this apprentiseship; former slaves were given the option of returning to working on the plantations 
                                                            for a small salary while others were given the option to go a live in rural settlements called free villages were 
                                                            they were given land and encouraged to start trading crops among themselves. This apprentiseship period was accessed and 
                                                            proved not to be too benefitial to most parties; as former slaves were not to content in working on plantations for
                                                            psycological reasons, the owners of the plantations were not pleased with the profit margins as output was reduced and now
                                                            they had to be having a payroll. This led to Full Emancipation in 1838, a commencement of a new system which ironically saw
                                                            the Asians which Columbus was seeking to find on his voyages, coming to the caribbean as indentured workers. 
                                                            <br /><br />
                                                            These Indentured workers came from India and China and they were to replace africans as the new workers on the 
                                                            plantations. These same indentured workers found the requirements often too difficult hence seeing some opting
                                                            to persue other means of gaining income. These generally included the creation of their own small businesses. Some started
                                                            Techinical Trades along with some post slaves which formed a section of the countries labor force that was responsible for 
                                                            construction and engineering. The years post slavery proved very challenging especially for post slaves and the country faced numerous setbacks caused 
                                                            by local uprings; the most famous of which was the 1865 Morant Bay Rebillion which led by National Heroes Paul Bogle
                                                            and George William Gordon. International conflicts often caused a reduce in supplies to the Island which at times had dire
                                                            consequencies.   </li>
                                                    </span>

                                                </ul>
                                            </div>
                                    
                                        </div>  
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Pre and Post Independence</b></li>
                                                        <li> The Years preceding Independence saw a sense of nationalism being experienced. Major events such as the formering of Black movements
                                                            led by National Hero Marcus Garvey, Trade unions which were formed National Heroes Alexander Bustamante and Norman Manley along with 
                                                            several icons Nation Building and The General Acheivements of those residenting on the island; inspired a call for Independence. Not to mention
                                                            a belief that the Colonial system was not a true reflection of the affairs of the general population.
                                                            <br /><br />
                                                            In 1938 a royal commission was appointed to investigate the
                                                            working conditions as well as other political and social conditions that were affecting the society. The investigations and
                                                            reports led to the crafting and adoption of a new constitution
                                                            on November 20, 1944 which ensured universal franchise for
                                                            all Jamaicans regardless of race and class. 
                                                            With the creation of a local political system, the forming of political parties and electorial events
                                                            led to the Nation creating its own form of government. Elections Pre Independence resulted in a premier 
                                                            being elected; First of which was Norman Manley. A Step taken to build regionalism; was seen with the creation
                                                            of the West Indies Federation. 
                                                            <br /><br />
                                                            Jamaica gained Independence in on August 6, 1962. A constitution was drafted and a request sent to the crown which resulted
                                                            in independence being granted ended over three centuries of colonial rule. The Monarch still remains as the Head of State, 
                                                            A Governor General acts as a representative for the crown. The People elect a Prime Minister which is regarded as the head of 
                                                            Government which comprises of ministers and senators. 
                                                            The Country has steadily developed over the years with major changes in infrastructure, a way of conducting business,
                                                            adaptation and contributions to new developments in Science and Technology and a large catalouge of media content. Jamaica is a member 
                                                            of CARICOM, an organisation instituded to fulfil the former ambitions
                                                            of the West Indies Federation as well as to cultivate new ways of region building.

                                                            </li>
                                                    </span>

                                                </ul>
                                            </div>
                                        </div>  
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                
                                                    <span className="box info-link">
                                                        <li><b>Today</b></li>
                                                        <li>Jamaica, has generated a strong culture, prescribing to the motto of The Country 'Out of Many, One People', A culture; unique, 
                                                            bold and strong. A culture; of great cuisine, of strong admiration for create artistic style, of great music, of wonderful entertainment, Excellence in academia,
                                                            passion for sports and just a general 
                                                            love for the Nation. A Testiment to the saying 'wi Tallawah'; the Island Nation has developed a firm resilience to the 
                                                            challenges it faced. Even after the most natural of disasters such as Hurricanes and Earthquakes
                                                            pounced upon The Island, The Country and its people manage to persevere through the roughest of times. </li>
                                                    </span>

                                                </ul>
                                            </div>
                                        </div>  

                                    </div>
                                </div> 
                            </TabPanel>

                            <TabPanel>
                                <div className="message is-black">
                                    <div className="message-header">
                                        Caribbean Commonwealth 
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                <span className="box info-link">
                                                    <li><b>The Constitution</b></li>
                                                    <li> The Jamaica Constitution 1962 is the most fundamental legal document in the country, guaranteeing
                                                        the freedom, rights and privileges of every Jamaican citizen. The Constitution reflects the country’s 
                                                        independence as a nation state and, to this day, remains the cornerstone of the island’s legal systems and institutions.  
                                                        </li>
                                                </span>

                                                <span className="box info-link">
                                                    <li><b>The Executive</b></li>
                                                    <li> The 1962 Constitution established a parliamentary system based on the United Kingdom's Westminster model. 
                                                        The governor-general's role is largely ceremonial. Executive power is vested in the Queen, but exercised 
                                                        mostly by the Cabinet of Jamaica; led by the Prime Minister, currently Andrew Holness. </li>
                                                </span>

                                                <span className="box info-link">
                                                    <li><b>The Legislature</b></li>
                                                    <li> Their are 63 Members of Parliament in the Lower House. The Senate also known as the Upper House is made up of
                                                        21 Senators; 13 of which, are nominated by the Prime Minister and 8 by the Leader of the Opposition in the House of Representatives. </li>
                                                </span>
                                                
                                                <span className="box info-link">
                                                    <li><b>The Judiciary</b></li>
                                                    <li> The legal system of Jamaica is based on British common-law. The administration of justice is carried out through a network of courts.
                                                        The Final court of appeal is the Privy Council which is based in London, England. Locally the Court of Appeal is the Highest Court on the Island;
                                                        it consist of a President of the Courtt and not more than 12 Judges of Appeal.
                                                        As head of the judiciary of Jamaica, the Chief Justice is also a member of the court.
                                                        The Chief Justice, however, can only sit in the court if he is invited to do so by the
                                                        President and if there are at least four other Judges of Appeal sitting.
                                                    </li>
                                                    <li>
                                                    The Caribbean Court of Justice (CCJ) is one of the primary institutions of the Caribbean Community (CARICOM). 
                                                    The CCJ has two core functions − to act as the final appellate court for the CARICOM member states and as an international court ruling on 
                                                    matters relating to the foreign policy coordination of the Revised Treaty of Chaguaramas (2001) that outlines terms of economic cooperation among CARICOM members.
                                                    </li>
                                                    <li>
                                                    The Supreme Court of Jamaica is responsible for hearing serious civil and criminal matters.
                                                    At the parish level, the Resident Magistrates’ Courts deal with less serious civil and criminal offences. The Resident Magistrate of a parish is also the Coroner and conducts preliminary inquiries into criminal matters.
                                                    There are four special courts – Traffic Court, Gun Court, Family Court and Revenue Court. There are also Petty Sessions courts that deal with minor offences and are presided over by Justices of the Peace.
                                                    </li>
                                                </span>
                                            </ul>
                                            
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                                <div className="tourism message is-pink-coral">
                                    <div className="message-header">
                                        The Sun, The Sea, The Cuisine, The Culture
                                    </div>    
                                    <div className="message-body has-text-left">
                                        <div className="box">
         
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        
                                                        <li> Jamaica has near perfect sunshine, experienced all year round. The Island coastline 
                                                            is laced with a plethora of beuatiful white sand beaches, majestic water scenic spots, 
                                                            exquisite array of flora and fauna. These along with the spirit of the people are what attracts
                                                            visitors to the Island.  </li>

                                                    </span>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>The Begining</b></li>
                                                        <li> Tourism can be traced to the very unset of the colonial period as the wealthy europeans such as those in the Upper
                                                        echelon of soceity would vacay in Jamaica. Official Tourist establishments were built in Montego Bay and Port Antonio. 
                                                        One of the first Hotels on the Island; The Myrtle Bank Hotel in Kingston was built in 1892. 
                                                        </li>
                                                        <li>After the Frist World War, an influx of visitors started to arrive in the island from North America and Europe. This
                                                            was accomadated by the improvement in The Islands Transportation System which made it possible for people to get from one country to the other  
                                                            easier using means of aviation.
                                                        </li>
                                                    </span>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box">
                                            <div className="hero">
                                                <ul>
                                                    <span className="box info-link">
                                                        <li><b>Developed Industry</b></li>
                                                        
                                                        <li>
                                                        Tourism in Jamaica has ballooned from an annual trip made by visitors, to a must-do by visitors coming form all over the world.
                                                        Jamaica has become the hub for weddings, holidays, anniversary celebrations, vacation and even business outings.
                                                        This has resulted in tourism being one of the major contributor to the economy in Jamaica. As a result, every sector in Jamaica 
                                                        benefits to some extent from tourism activities. Tourism is a significant contributer to the jamaican workforce.
                                                        </li>
                                                    </span> 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabPanel>

                            <TabPanel>
                            <div className="message is-primary">
                            <div className="message-header">
                                <p>Progressive Economy</p>
                            </div>
                            <div className="message-body has-text-left">
                                <div className=" info-link">
                                    <div className="box">
                                        <div className="hero">
                                            <ul style={{listStyleType:"circle"}}>
                                                <li> The World Banks's doing business platform has ranked Jamaica 6th amongst 190 countries
                                                    in the topic of Starting a Business and 15th in getting credit. The business climate in Jamaica
                                                    is suited for International Trade and Investment.
                                                </li>
                                                    <br/>
                                                <li> <a style={{color:"green"}} href="https://dobusinessjamaica.com/about-jampro/">JAMPRO</a> is an Agency of the Government of Jamaica’s Ministry of Industry, 
                                                    Investment and Commerce that promotes business opportunities in export and 
                                                    investment to the local and international private sector. </li>
                                                    <br/>
                                                <li> View <a style={{color:"green"}} href="https://dobusinessjamaica.com/whats-happening/?tab=Success&index=success">success stories</a> of International Businesses in Jamaica and gather all information
                                                    in regards to setting up business from JAMPRO <a href="https://dobusinessjamaica.com/"> </a>DoBusiness Jamaica platform.</li>
                                                                                
                                            </ul>
                                
                                        </div>

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
export default withContext(Jamaica);

