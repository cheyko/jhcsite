import React, { Component } from "react";
import { Switch, Route, Link, useHistory, BrowserRouter as Router } from "react-router-dom";
//import {IndexRoute} from "react-router";

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-image-lightbox/style.css';

import HomePage from './components/HomePage';
import CitizenPage from './components/CitizenPage';
import VisitorPage from './components/VisitorPage';
import AboutPage from './components/AboutPage';
import CommissionerPage from './components/CommissionerPage';
import DocumentsPage from './components/DocumentsPage';
//import MinistryPage from './components/MinistryPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import PostingList from './components/PostingList';
import ViewPosting from './components/ViewPosting';
import AddPosting from './components/AddPosting';
import ServicePage from './components/ServicePage';
import GeneralInfo from './components/GeneralInfo';

import Footer from './components/Footer';
import Banner from './components/Banner';
import Context from "./Context";

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import jwt_encode from 'jwt-encode';

import Covid19 from "./components/Covid19";
import Covidja from "./components/Covidja";
import Covidwa from "./components/Covidwa";
import Businessja from "./components/Businessja";
import Businesswa from "./components/Businesswa";
import Terms from "./components/Terms";
import Test from "./components/Test";
import Staff from "./components/Staff";
import Jamaica from "./components/Jamaica";
import WestAfrica from "./components/WestAfrica";
import Attractions from "./components/Attractions";
import Fees from "./components/Fees";

//const cors = require('cors');
/**constants created for security feature of website; a token is creadted and signed, then encoded. */
const sign = require('jwt-encode');
const secret = 'some$3cretKey';
const algorithm = 'HS256';
const data = {
  token : 'Required'
};

let browserHistroy = useHistory;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null, //initialized user object
      postings: [], //initialized postings array; empty initially
      contactName:"", contactEmail: "", nationality: "", contactSubject:"", contactMessage:"", //initialized variables used in contact page  
      showQues1 : false, showQues2 : false, showQues3 : false,
    };
    this.routerRef = React.createRef();
  }

  
  async componentDidMount() {
    const jwt = sign(data, secret, algorithm); // creation of the JSON Web Token which is placed in the API request headers.
    /**API request sent to check API; recommended by some cloud platforms */
    const checkApi = await axios.get("/api/",{
      headers: {
        'Authorization' : jwt
      }
    });
    /**API request sent to retreive server time, also used as a check on the API */
    const time = await axios.get('/api/time',{
      headers: {
        'Authorization' : jwt
      }
    });
    console.log(time); //used to see if request are being sent and responses retrieved.

    /*const response = await axios.get('https://jamaica-gleaner.com/feed/rss.xml', {
      //mode: '*cors',
      //withCredentials: true,
      headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token, Authorization, Accept,charset,boundary,Content-Length',
      'Access-Control-Allow-Credentials':true
      //'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(data => {
        console.log(data);
    });*/

    let user = localStorage.getItem("user");

    /**API request sent to retreive all postings from server time.*/
    const postings = await axios.get("/api/postings",{
      headers: {
        'Authorization' : jwt
      }
    });

    user = user ? JSON.parse(user) : null; //user object is given a value from parse item in local storage 
    this.setState({ user, postings:postings.data.postings}); // states of objects are created and saved inside context.
    window.scrollTo(0, 0); //used to scroll to top of page on render.
    window.addEventListener('scroll', this.handleScroll);// call of function that is used to set the navbar at top of page.
  }

  componentDidUpdate() {
    window.addEventListener('scroll', this.handleScroll); // call of function that is used to set the navbar at top of page.
  }

  // used to set navigation at top of page when user is scrolling the web application (website).
  handleScroll = e => {
    // Get the navbar
    let navbar = document.getElementById("navbar");
    
    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  //function used to retreive photos for each respective post.
  getTargetPhotos = async (theID, numOfPics) => {
    let targetPhotos = [];
    console.log("test");
    for ( var x = 0; x < numOfPics; x++){
      targetPhotos.push("image"+x+".jpg"); 
    }
    return targetPhotos;
  }

  //function used to get each respective post. 
  getPost = postID => {
    const { postings } = this.state
    return postings.find(post => post.id.toString() === postID.toString())
  }

  //function used in addPosting function componet to get add a posting; notice, article or album.
  addPosting = (posting, callback) => {
    let postings = this.state.postings.slice();
    postings.push(posting);
    this.setState({ postings }, () => callback && callback());
  };
  
  /* login function called inside the login funciton component; this function accepts two parameters
  an email and a password which are admin privileaged */
  login = async (email, password) => {
    const jwt = sign(data,secret,algorithm);
    const res = await axios.post("/api/login",{email,password},{
      headers: {
        'Authorization' : jwt
      }
    }).catch(
      (res) => { 
        if (res.status !== 200) { return { status: res.status, message: 'Not successful' } }
      }
    )

    if(res.status === 200) {
      let email  = jwt_decode(res.data.access_token).sub;
      const user = {
        id: res.data.id,
        email,
        token: res.data.access_token,
        accessLevel: res.data.access_rights ? 1 : 0
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  //function used to logout of website
  logout = e => {
    e.preventDefault();
    this.setState({ user: null, showMenu: !this.state.showMenu });
    localStorage.removeItem("user");
  };

  /* functions that can be used to control the display of FAQ's that are on the GeneralInfo Page,
  however FAQ's are currently commented out

  showQues1Func = e => {
    e.preventDefault();
    this.setState({ showQues1: !this.state.showQues1 });
  };

  showQues2Func = e => {
    e.preventDefault();
    this.setState({ showQues2: !this.state.showQues2 });
  };

  showQues3Func = e => {
    e.preventDefault();
    this.setState({ showQues3: !this.state.showQues3 });
  };*/

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          login: this.login,
          addPosting:this.addPosting,
          getPost:this.getPost,
          showQues1Func:this.showQues1Func,
          showQues2Func:this.showQues2Func,
          showQues3Func:this.showQues3Func,
          getTargetPhotos:this.getTargetPhotos,
        }}
      >
        <Router ref={this.routerRef} history={browserHistroy}>
          {/*style={{backgroundImage: `url(${process.env.PUBLIC_URL + '/images/jhc_wallpaper.jpg'})`,backgroundPositionX:'center',backgroundSize:'contain'}} */}
        <div className="App" >
          <Banner />
          <nav
            id="navbar"
            className="navbar has-text-centered"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="nav-span"><Link to="/home" style={{color:"black"}}>
                  <span className="is-size-6"> JHC Nigeria <br className="wrap-text"></br> <i className="fa fa-home"> </i> Home </span>
                </Link></b>
              <label
                role="button"
                className="navbar-burger burger has-text-weight-bold"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
                
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <b>menu</b>
              </label>
            </div>
              <div className={`navbar-menu has-text-centered ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                  <div className="dropdown navbar-item is-tab is-hoverable">
                    <div className="dropdown-trigger navbar-link is-expanded is-tab">
                      <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/general" className="custom-nav" style={{paddingTop:"0"}}>
                        <span><i className="fa fa-laptop"></i> General <br className="wrap-text"/> Information </span> 
                      </Link>
                    </div>
                    <div className="dropdown-menu standardLook has-text-centered" id="dropdown-menu4" role="menu">
                      <div className="dropdown-content standardLook has-text-centered">                      
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/jamaica" className="navbar-item is-expanded is-tab">
                          About Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/westafrica" className="navbar-item is-expanded is-tab">
                          About West Africa 
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/covid19" className="navbar-item is-expanded is-tab">
                          General COVID-19 Information
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/covidja" className="navbar-item is-expanded is-tab">
                          COVID-19 in Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/covidwa" className="navbar-item is-expanded is-tab">
                          COVID-19 in West Africa
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/businessja" className="navbar-item is-expanded is-tab">
                          Doing Business in Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}} onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/businesswa" className="navbar-item is-expanded is-tab">
                          Doing Business in West Africa
                        </Link>
                        <a style={{textAlign:"left"}}  onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} href="https://www.gov.jm/" className="navbar-item is-expanded is-tab">
                          Government of Jamaica
                        </a>
                        <a style={{textAlign:"left"}} href="https://mot.gov.jm/" className="navbar-item is-expanded is-tab">
                          Ministry of Tourism, Jamaica
                        </a>
                      </div>
                    </div>
                  </div>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/citizens" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-book"></i> Jamaican <br className="wrap-text"/> Nationals</span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/visitors" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-plane"></i> Visiting <br className="wrap-text"/> Jamaica </span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/postings" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-globe"></i> News Articles, <br className="wrap-text"/> Notices and Gallery</span>
                </Link>


                <div className="dropdown navbar-item is-tab is-hoverable">
                    <div className="dropdown-trigger navbar-link is-expanded is-tab">
                      <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/about" className="custom-nav" style={{paddingTop:"0"}}>
                        <span> <i className="fa fa-building"></i> About <br className="wrap-text"/> The Consulate </span>
                      </Link>
                    </div>
                    <div className="dropdown-menu standardLook" id="dropdown-menu4" role="menu">
                      <div className="dropdown-content standardLook is-size-6">                      
                        <Link style={{textAlign:"left"}} to="/fees" onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} className="navbar-item is-expanded is-tab">
                          Fees
                        </Link>
                        <Link style={{textAlign:"left"}} onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/commissioner" className="navbar-item is-expanded is-tab">
                          The Commissioner
                        </Link>
                        <Link style={{textAlign:"left"}} to="/staff" onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} className="navbar-item is-expanded is-tab">
                          The General Staff
                        </Link>
                        <a style={{textAlign:"left"}} onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} href="https://mfaft.gov.jm/jm/" className="navbar-item is-expanded is-tab">
                          Ministry of Foreign Affairs and Foreign Trade Jamaica
                        </a>
                      </div>
                    </div>
                  </div>
                
                {this.state.user && this.state.user.accessLevel > 0 && (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/add-posting" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-plus"></i> Add <br className="wrap-text"/> Post</span>
                  </Link>
                )}
                {/*<Link to="/add-posting" className="navbar-item is-expanded is-tab">
                  <span> <i className="fa fa-plus"></i> Add <br className="wrap-text"/> Post</span>
                </Link>
                */}
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/contact" className="navbar-item is-expanded is-tab">
                  <span> <i className="fa fa-phone"></i> Contact <br className="wrap-text"/> Us</span>
                </Link>
                {!this.state.user ? (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/login" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-user"></i> Login</span>
                  </Link>
                ) : (
                  <Link onClick={ (e) => {this.logout(e)}}  to="/" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-share"></i>Logout</span>
                  </Link>
                )}
              </div>
            </nav>
            
              <Route exact path="/" component={HomePage} />
              <Route exact path="/home" component={HomePage} />
              <Route exact path="/general" component={GeneralInfo} />
              <Route exact path="/covid19" component={Covid19} />
              <Route exact path="/covidja" component={Covidja} />
              <Route exact path="/covidwa" component={Covidwa} />
              <Route exact path="/businessja" component={Businessja} />
              <Route exact path="/businesswa" component={Businesswa} />
              <Route exact path="/documents" component={DocumentsPage} />
              <Route exact path="/terms" component={Terms} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/citizens" component={CitizenPage} />
              <Route exact path="/postings" component={PostingList} />
              <Route exact path="/visitors" component={VisitorPage} />
              <Route exact path="/about" component={AboutPage} />
              <Route exact path="/commissioner" component={CommissionerPage} />
              <Route exact path="/services" component={ServicePage} />
              <Route exact path="/add-posting" component={AddPosting} />
              <Route exact path="/view-posting/:id" component={ViewPosting} />
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/test/:id" component={Test} />
              <Route exact path="/staff" component={Staff} />
              <Route exact path="/jamaica" component={Jamaica} />
              <Route exact path="/westafrica" component={WestAfrica} />
              <Route exact path="/attractions" component={Attractions} />
              <Route exact path="/fees" component={Fees} />
            <Footer />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
