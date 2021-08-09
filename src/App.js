import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import CitizenPage from './components/CitizenPage';
import VisitorPage from './components/VisitorPage';
import AboutPage from './components/AboutPage';
import CommissionerPage from './components/CommissionerPage';
import DocumentsPage from './components/DocumentsPage';
import MinistryPage from './components/MinistryPage';
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
import Covid19 from "./components/Covid19";
import Covidja from "./components/Covidja";
import Covidwa from "./components/Covidwa";
import Businessja from "./components/Businessja";
import Businesswa from "./components/Businesswa";
import Terms from "./components/Terms";


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      postings: [],
      contactName:"", contactEmail: "", nationality: "", contactSubject:"", contactMessage:"",
      showQues1 : false, showQues2 : false, showQues3 : false
    };
    this.routerRef = React.createRef();
  }


  async componentDidMount() {
    const time = await axios.get("/api/time");
    console.log(time);
    let user = localStorage.getItem("user");
    const postings = await axios.get('/api/postings');
    user = user ? JSON.parse(user) : null;
    this.setState({ user, postings : postings.data });
    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll);
  }

  componentDidUpdate() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    // Get the navbar
    let navbar = document.getElementById("navbar");
    console.log(navbar);
    // Get the offset position of the navbar
    let sticky = navbar.offsetTop;

    if (window.pageYOffset > sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }
  }

  getPost = postID => {
    const { postings } = this.state
    return postings.find(post => post.id.toString() === postID.toString())
  }

  addPosting = (posting, callback) => {
    let postings = this.state.postings.slice();
    postings.push(posting);
    this.setState({ postings }, () => callback && callback());
  };
  
  login = async (email, password) => {
    const res = await axios.post(
      '/api/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
    console.log(res);
    if(res.status === 200) {
      let email  = jwt_decode(res.data.access_token).sub;
      
      const user = {
        id: res.data.id,
        email,
        token: res.data.access_token,
        accessLevel: email === 'admin@example.com' ? 0 : 1
      }
  
      this.setState({ user });
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  
  logout = e => {
    e.preventDefault();
    this.setState({ user: null });
    localStorage.removeItem("user");
  };

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
  };
  

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
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App">
          <Banner />
          <nav
            id="navbar"
            className="navbar is-size-6"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-expanded is-tab "><Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}} to="/" style={{width:"100%"}} className="navbar-item is-expanded is-tab">
                  <span className="is-size-6"> JHC Nigeria &nbsp; <br className="wrap-text"></br> <i className="fa fa-home"> </i> &nbsp; Home </span>
                </Link></b>
              <label
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
                onClick={e => {
                  e.preventDefault();
                  this.setState({ showMenu: !this.state.showMenu });
                }}
                style={{backgroundColor:"yellow"}}
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <small style={{fontSize:"x-small"}}>menu</small>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <div class="navbar-item is-expanded is-tab has-dropdown is-hoverable">
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/general" className="navbar-link is-expanded is-tab" style={{paddingTop:"0"}}>
                   <span><i class="fa fa-laptop"></i> General <br className="wrap-text"/> Information </span> 
                  </Link>
                  <div className="navbar-dropdown standardLook is-size-6">
                    <Link to="/covid19" className="navbar-item is-expanded is-tab">
                      General COVID-19 Information
                    </Link>
                    <Link to="/covidja" class="navbar-item is-expanded is-tab">
                      COVID-19 in Jamaica
                    </Link>
                    <Link to="/covidwa" class="navbar-item is-expanded is-tab">
                      COVID-19 in West Africa
                    </Link>
                    <Link to="/businessja" class="navbar-item is-expanded is-tab">
                      Doing Business in Jamaica
                    </Link>
                    <Link to="/businesswa" class="navbar-item is-expanded is-tab">
                      Doing Business in West Africa
                    </Link>
                    <a href="https://www.gov.jm/" class="navbar-item is-expanded is-tab">
                      Government of Jamaica
                    </a>
                    <a href="https://mot.gov.jm/" class="navbar-item is-expanded is-tab">
                      Ministry of Tourism, Jamaica
                    </a>

                  </div>
                </div>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/citizens" className="navbar-item is-expanded is-tab">
                <span> <i class="fa fa-book"></i> Jamaican <br className="wrap-text"/> Nationals</span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/visitors" className="navbar-item is-expanded is-tab">
                <span> <i class="fa fa-plane"></i> Visiting <br className="wrap-text"/> Jamaica </span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/postings" className="navbar-item is-expanded is-tab">
                <span> <i class="fa fa-globe"></i> News Articles <br className="wrap-text"/> and Notices</span>
                </Link>
                <div class="navbar-item is-expanded is-tab has-dropdown is-hoverable">
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/about" className="navbar-link is-expanded is-tab" style={{paddingTop:"0"}}>
                  <span> <i class="fa fa-building"></i> About <br className="wrap-text"/> The Consulate </span>
                  </Link>
                  <div class="navbar-dropdown standardLook is-size-6">
                    <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/commissioner" class="navbar-item is-expanded is-tab">
                      The Commissioner
                    </Link>
                    <a class="navbar-item is-expanded is-tab">
                      The General Staff
                    </a>
                    <a href="https://mfaft.gov.jm/jm/" class="navbar-item is-expanded is-tab">
                      Ministry of Foreign Affairs and Foreign Trade Jamaica
                    </a>
                  </div>
                </div>
                
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-posting" className="navbar-item is-expanded is-tab">
                    <span> <i class="fa fa-plus"></i> Add <br className="wrap-text"/> Post</span>
                  </Link>
                )}

                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/contact" className="navbar-item is-expanded is-tab">
                  <span> <i class="fa fa-phone"></i> Contact <br className="wrap-text"/> Us</span>
                </Link>
                {!this.state.user ? (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/login" className="navbar-item is-expanded is-tab">
                    <span> <i class="fa fa-user"></i> Login</span>
                  </Link>
                ) : (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/" onClick={this.logout} className="navbar-item is-expanded is-tab">
                    <span>Logout</span>
                  </Link>
                )}
              </div>
            </nav>
            
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/jhcsite" component={HomePage} />
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
            </Switch>
            <Footer />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
