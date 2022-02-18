import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import SideBar from "./SideBar";
//import Alerts from "./Alerts";
//import ExternalWebsites from "./ExternalWebsites";
import withContext from "../withContext";

const Covid19 = props => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);

  return (
<>
      <div className="hero">
        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title"> The Coronavirus Disease 2019 (COVID-19)  </h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/general">General Information</Link></li>
              <li className="is-active"><span aria-current="page">&nbsp;Covid-19</span></li>
            </ul>
          </nav>
        </div>
        
        <div className="body" style={{color:"yellow"}}>
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">

                <div className="column is-three-quarters">
                    <article>
                        <h1 className="title"> What is COVID-19 ?</h1>
                        <p style={{color:"black"}} className="has-text-left"> Last Updated : August 6, 2021</p>
                        <br />
                        <div className="message is-info">
                            <div className="message-header">
                                <p>Overview</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p className="p-format">
                                    There are many viruses that comprise the Large family of Coronaviruses
                                    capable of causing illnesses that range from the common cold to severe diseases 
                                    such as Severe Acute Respiratory Syndrome (SARS-CoV) or Middle East 
                                    Respiratory Syndrome (MERS-CoV). The coronavirus disease 2019 or 
                                    more commonly known as COVID-19 is a new strain of the coronavirus 
                                    and was discovered in 2019 hence given the name COVID-19 (COVID for Coronavirus 
                                    Disease and -19 represents the year 2019). This new disease has caused millions 
                                    of deaths around the world as well as lasting health problems in some who have 
                                    survived the illness. 
                                </p>
                                <br/>
                                <p> According to The World Health Organization;</p>
                                <br/>
                                <ul style={{listStyleType:"circle"}}>
                                    <li> Most people infected with the COVID-19 virus will recover without requiring 
                                        special treatment after experiencing mild to moderate respiratory illness. 
                                        Older people, and those with underlying medical problems like cardiovascular 
                                        disease, diabetes, chronic respiratory disease, and cancer 
                                        are more likely to develop serious illness.</li>
                                        <br/>
                                    <li> The COVID-19 virus spreads primarily through droplets of saliva or discharge 
                                        from the nose when an infected person coughs or sneezes, so it’s important 
                                        that you also practice respiratory etiquette (for example, by coughing into 
                                        a flexed elbow).</li>
                                        <br/>
                                    <li>  Protect yourself and others from infection by washing your hands or using an alcohol 
                                        based rub frequently and not touching your face. The best way to prevent and slow down transmission is to be well informed 
                                        about the COVID-19 virus, the disease it causes and how it spreads. </li>
                                                                      
                                </ul>
                            </div>
                        </div>
                    </article>
                    
                    <br/>
                    <article>
                        <div className="message is-warning">
                            <div className="message-header">
                                <p>Symptoms</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p> COVID-19 Symptoms include :</p>
                                <ul style={{listStyleType:"square"}}>
                                    <li>Congestion or runny nose</li>
                                    <li>Cough</li>
                                    <li>Diarrhea</li>
                                    <li>Fever or chills</li>
                                    <li>Headache</li>
                                    <li>Muscle or body aches</li>
                                    <li>New fatigue</li>
                                    <li>New loss of taste or smell</li>
                                    <li>Nausea or vomiting</li>
                                    <li>Shortness of breath or difficulty breathing</li>
                                    <li>Sore throat</li>                                
                                </ul>
                            </div>
                        </div>
                    </article>
                    <br/>
                    <article>
                        <div className="message is-success">
                            <div className="message-header">
                                <p>Prevention</p>
                            </div>
                            <div className="message-body has-text-left">
                                <p> To prevent infection and to slow transmission of COVID-19, do the following:</p>
                                <ul style={{listStyleType:"disc"}}>
                                    <li>Avoid touching your face.</li>
                                    <li>Cover your mouth and nose when coughing or sneezing.</li>
                                    <li>Maintain at least 1 metre distance between you and people coughing or sneezing.</li>
                                    <li>Practice physical distancing by avoiding unnecessary travel and staying away from large groups of people.</li>
                                    <li>Refrain from smoking and other activities that weaken the lungs</li>
                                    <li>Stay home if you feel unwell.</li>
                                </ul>
                                <span style={{marginLeft:"1rem"}}>and</span>
                                <ul style={{listStyleType:"disc"}}>
                                    <li style={{fontWeight:"bold"}}>Wash your hands regularly with soap and water, or clean them with alcohol-based hand rub.</li>
                                </ul>
                            </div>
                        </div>
                    </article>
                    <div className="hero-body">
                      <div className="card">
                        <h1 style={{textDecoration:"underline"}}> Sources </h1>
                        <span> World Health Organisation : https://www.who.int/</span>
                      </div>
                    </div>
                </div>

                <div className="column is-one-quarter">
                  <SideBar />
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default withContext(Covid19);