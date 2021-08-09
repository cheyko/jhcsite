import React,{useEffect} from "react";
import {Link} from "react-router-dom";
import withContext from "../withContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faInbox} from '@fortawesome/free-solid-svg-icons';


import Map from "./Map";

const ContactPage = props => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const {contactName, contactEmail, nationality, contactSubject, contactMessage } = props.context;

  const countries = ["Nigeria", "Jamaica", "Ghana", "Cameroon", "Sierra Leone", "Senegal"];
  
  return (
    <>
      <div className="hero">

        <div className="header">
          <div className="hero blkYellow page-header" >
            <div className="page-header-body container">
              <h4 className="title">Contact Us</h4>
            </div>
          </div>
          <br />
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li className="is-active"><a href="#" aria-current="page">Contact</a></li>
            </ul>
          </nav>
        </div>
        
        <div className="body">
          <div className="hero">
            <div className="hero-body"> 
              <div className="columns">
                <div className="column map">
                  <div className="box" style={{height:"100%"}}>
                  <h3><strong>Location of Jamaican High Commission </strong></h3>
                  <br/>
                  <Map />
                  </div>
                </div>
                <div className="column info">
                  <div className="columns">
                    <div className="column">
                      <div className="box yellowbkgn" style={{height:"100%"}}>
                        <FontAwesomeIcon className="is-size-1" icon={faPhone} />
                        <br/><br/>
                        <h3><strong style={{textDecoration:"underline"}}> Call Us At </strong></h3>
                        <ul>
                          <li> 0813 606 3356 </li>
                          or
                          <li> 0816 737 4252 </li>
                        </ul>
                      </div>

                    </div>
                    <div className="column">
                      <div className="box yellowbkgn" style={{height:"100%"}}>
                        <FontAwesomeIcon className="is-size-1" icon={faMapMarkedAlt} />
                        <br/><br/>
                        <h3><strong style={{textDecoration:"underline"}}> Our Address </strong> </h3>
                        <dl>
                          <dd>The Jamaican High Commission</dd>
                          <dd>13 Hassan Musa Katsina Street</dd>
                          <dd>Asokoro, Abuja</dd>
                          <dd>Federal Republic of Nigeria</dd>
                        </dl>
                      </div>
                    </div>

                  </div>
                  <div className="columns">
                    <div className="column">
                      <div className="box yellowbkgn"style={{height:"100%"}} >
                        <FontAwesomeIcon className="is-size-1" icon={faClock} />
                        <br/><br/>
                        <h3> <strong style={{textDecoration:"underline"}}> Operating Hours</strong> </h3>
                        <dl>
                          <dd style={{textAlign:"left"}}><strong> Office Hours :</strong> </dd>
                          <dd >Monday - Friday</dd>
                          <dd>8:30am - 4:30pm</dd>
                          <dd style={{textAlign:"left"}}><strong>Consular Appointments :</strong> </dd>
                          <dd>Tuesdays & Thursdays</dd>
                          <dd>9:00am - 12noon</dd>
                        </dl>
                      </div>
                    </div>
                    <div className="column">
                      <div className="box yellowbkgn" style={{height:"100%"}}>
                        <FontAwesomeIcon className="is-size-1" icon={faInbox} />
                        <br/><br/>
                        <h3> <strong style={{textDecoration:"underline"}}> Email </strong> </h3>
                        <dl>
                          <dd>admin@exmaple.com</dd>
                        </dl>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              <div>
                <br /><br /><br />
                <form onSubmit="">
                    <div className="columns is-mobile is-centered">
                      <div className="column box contactForm is-two-thirds">
                        <h1 className="title"> Send Direct Message</h1>
                        <div className="has-text-left" style={{marginBottom:"3rem"}}>
                          <div className="field">
                            <label className="label">Your Name (required) </label>
                            <input
                              className="input"
                              type="text"
                              name="contactName"
                              value={contactName}
                              onChange={props.handleChange}
                              required
                            />
                          </div>
                          <div className="field">
                            <label className="label">Nationality (required) </label>
                            <select
                                className="select form-select"
                                name="nationality"
                                id="nationality"
                                value={nationality}
                                onChange={props.handleChange}
                                required
                                >
                                {countries.map((option,index) => (
                                  <option value={option}>{option}</option>
                                ))}
                            </select>
                          </div>
                          <div className="field">
                            <label className="label">Email (required)</label>
                            <input
                              className="input"
                              type="text"
                              name="contactEmail"
                              value={contactEmail}
                              onChange={props.handleChange}
                              
                            />
                          </div>
                          <div className="field">
                            <label className="label">Subject (required)</label>
                            <input
                              className="input"
                              type="text"
                              name="contactSubject"
                              value={contactSubject}
                              onChange={props.handleChange}
                              
                            />
                          </div>
                          <div className="field">
                            <label className="label"> Message (required) </label>
                            <textarea
                              className="textarea"
                              type="text"
                              rows="6"
                              style={{ resize: "block"}}
                              name="contactMessage"
                              value={contactMessage}
                              onChange={props.handleChange}
                            />
                          </div>
                        </div>
                        {props.context.flash && (
                          <div className={`notification ${props.context.flash.status}`}>
                            {props.context.flash.msg}
                          </div>
                        )}
                        <div className="field is-clearfix">
                          <button
                            className="button is-info is-pulled-right"
                            type="submit"
                            onClick={props.save}
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
        
              </div>
              
            </div>
          </div>
        </div> 

      </div>
    </>
  );
};

export default withContext(ContactPage);