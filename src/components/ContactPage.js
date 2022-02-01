import React,{Component} from "react";
import {Link} from "react-router-dom";
import withContext from "../withContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone} from '@fortawesome/free-solid-svg-icons';
import { faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faClock} from '@fortawesome/free-solid-svg-icons';
import { faInbox} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import Map from "./Map";
import { send } from "process";

const sign = require('jwt-encode');
const secret = 'some$3cretKey';
const algorithm= 'HS256' ;
const data = {
  token : 'token'
};

const initState = {
  contactName : "", 
  contactEmail : "", 
  nationality : "Nigerian", 
  category : "General",
  contactSubject : "", 
  contactMessage : "",
  otherText: false,
  otherNation: "",
  nation: ""
}

const countries = ["Nigerian", "Jamaican", "Ghanian", "Cameroonian", "Sierra Leonean", "Senegalese", "Other"];
const categories = ["General","Consular", "Diplomatic"];
class ContactPage extends Component {

  constructor(props){
    super(props);
    this.state = initState;
    window.scrollTo(0,0);
  }

  handleChange = (e) => {
    if(e.target.name === "nationality" && e.target.value === "Other"){
      this.setState({otherText: true,[e.target.name]: e.target.value, error: ""});
    }else{
      this.setState({[e.target.name]: e.target.value,otherText: false, error: ""});
    }
  }

  sendMessage = async (e) => {
    e.preventDefault();
    const jwt = sign(data,secret,algorithm);
    this.setState({ flash:null });
    
    const {contactName, contactEmail, nationality, contactSubject, contactMessage, category, otherNation } = this.state;
   

    if(contactName !== " " && contactEmail !== " " && nationality !== " " && contactSubject !== " " && contactMessage !== " " && category !== " " ){

      const res = await axios.post(
        '/api/message',
        {contactName, contactEmail, nationality, contactSubject, contactMessage, otherNation, category },{
          headers: {
            'Authorization' : jwt
          }
        }).catch(
          (res) => { console.log(res) }
      )

      if(res.status === 200){
        this.setState({flash:{ status: 'is-success', msg: 'message sent successfully' }})
      }else{
        this.setState({flash:{ status: 'is-warning', msg: 'message not sent, please try again' }})
      }
    }else{
      if (contactName === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Please enter your contact name.' }})
      }else if(contactEmail === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Enter a valid email address.' }})
      }else if(nationality === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Select your nationality.' }})
      }else if(contactSubject === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Message requires a subject to be sent.' }})
      }else if(contactMessage === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Place your query inside the message field.' }})
      }else if(category === ""){
        this.setState({flash:{ status: 'is-warning', msg: 'Category was not selected.' }})
      }
    }
  }

  render(){
    const {contactName, contactEmail, nationality, contactSubject, contactMessage, category, otherText, otherNation } = this.state;
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
                <li className="is-active"><span aria-current="page">&nbsp; Contact </span></li>
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
                          <FontAwesomeIcon className="is-size-1" icon={faInbox} />
                          <br/><br/>
                          <h3> <strong style={{textDecoration:"underline"}}> Email </strong> </h3>
                          <dl>
                            <dd>info-jhcnig@mfaft.gov.jm</dd>
                          </dl>
                        </div>
                      </div> 
                    </div>
                    <div className="columns">
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
                      <div className="column">
                        <div className="box yellowbkgn"style={{height:"100%"}} >
                          <FontAwesomeIcon className="is-size-1" icon={faClock} />
                          <br/><br/>
                          <h3> <strong style={{textDecoration:"underline"}}> Operating Hours</strong> </h3>
                          <dl>
                            <dd style={{textAlign:"left"}}><strong> Office Hours :</strong> </dd>
                            <dd>Monday - Thursday</dd>
                            <dd>9:00am - 5:00pm</dd>
                            <dd>Fridays</dd>
                            <dd>9:00am - 4:00pm</dd>
                            <dd style={{textAlign:"left"}}><strong>Consular Hours :</strong> </dd>
                            <dd>Tuesdays, Wednesdays & Thursdays</dd>
                            <dd>9:00am - 12:00noon</dd>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <br /><br /><br />
                  <form onSubmit={this.sendMessage}>
                      <div className="columns is-mobile is-centered">
                        <div className="column box contactForm is-two-thirds-desktop">
                          <h1 className="title"> Send Direct Message</h1>
                          <div className="has-text-left" style={{marginBottom:"3rem"}}>
                            <div className="field">
                              <label className="label">Your Name (required) </label>
                              <input
                                className="input"
                                type="text"
                                name="contactName"
                                value={contactName}
                                onChange={this.handleChange}
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
                                  onChange={this.handleChange}
                                  required
                                  >
                                  {countries.map((option,index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                              </select>
                              {otherText && 
                                <input
                                  className="input"
                                  type="text"
                                  name="otherNation"
                                  value={otherNation}
                                  onChange={this.handleChange}
                                  required
                                />
                              }
                            </div>
                            <div className="field">
                              <label className="label">Email (required)</label>
                              <input
                                className="input"
                                type="email"
                                name="contactEmail"
                                value={contactEmail}
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                            <div className="field">
                              <label className="label">Category (required) </label>
                              <select
                                  className="select form-select"
                                  name="category"
                                  id="category"
                                  value={category}
                                  onChange={this.handleChange}
                                  required
                                  >
                                  {categories.map((option,index) => (
                                    <option key={index} value={option}>{option}</option>
                                  ))}
                              </select>
                            </div>
                            <div className="field">
                              <label className="label">Subject (required)</label>
                              <input
                                className="input"
                                type="text"
                                name="contactSubject"
                                value={contactSubject}
                                onChange={this.handleChange}
                                required
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
                                onChange={this.handleChange}
                                required
                              />
                            </div>
                          </div>
                          {this.state.flash && (
                            <div className={`notification ${this.state.flash.status}`}>
                              {this.state.flash.msg}
                            </div>
                          )}
                          <div className="field is-clearfix">
                            <button
                              className="button is-info is-pulled-right"
                              type="submit"
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
  }

};

export default withContext(ContactPage);