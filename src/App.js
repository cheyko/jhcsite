import React, { Component } from "react";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import HomePage from './components/HomePage';
import CitizenPage from './components/CitizenPage';
import VisitorPage from './components/VisitorPage';
import AffairsPage from './components/AffairsPage';
import AmbassadorPage from './components/AmbassadorPage';
import DocumentsPage from './components/DocumentsPage';
import MinistryPage from './components/MinistryPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import PostingList from './components/PostingList';
import PassportPage from './components/VisaPage';
import VisaPage from './components/VisaPage';
import ViewPosting from './components/ViewPosting';
import AddPosting from './components/AddPosting';
import ServicePage from './components/ServicePage';

import Footer from './components/Footer';
import Banner from './components/Banner';
import Context from "./Context";
import CitizensPage from "./components/CitizenPage";
import VistorPage from "./components/VisitorPage";

import axios from 'axios';
import jwt_decode from 'jwt-decode';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      postings: []
    };
    this.routerRef = React.createRef();
  }

  

  async componentDidMount() {
    let user = localStorage.getItem("user");
    const postings = await axios.get('http://localhost:3001/postings');
    user = user ? JSON.parse(user) : null;
    this.setState({ user, postings : postings.data });
  }

  componentDidUpdate(){
    window.scrollTo(0, 0);
  }

  addPosting = (posting, callback) => {
    let postings = this.state.postings.slice();
    postings.push(posting);
    this.setState({ postings }, () => callback && callback());
  };
  
  login = async (email, password) => {
    const res = await axios.post(
      'http://localhost:3001/login',
      { email, password },
    ).catch((res) => {
      return { status: 401, message: 'Unauthorized' }
    })
  
    if(res.status === 200) {
      const { email } = jwt_decode(res.data.accessToken)
      const user = {
        email,
        token: res.data.accessToken,
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
  

  render() {
    return (
      <Context.Provider
        value={{
          ...this.state,
          login: this.login,
          addPosting:this.addPosting
        }}
      >
        <Router ref={this.routerRef}>
        <div className="App">
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="navbar-item is-expanded is-tab is-size-4 "><Link to="/" className="navbar-item">
                  <span className="wrap-text">JHC Nigeria</span>
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
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </label>
            </div>
              <div className={`navbar-menu ${
                  this.state.showMenu ? "is-active" : ""
                }`}>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/" className="navbar-item is-expanded is-tab">
                <span>Home <br className="wrap-text"/> Page</span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/citizens" className="navbar-item is-expanded is-tab">
                <span>Jamaican <br className="wrap-text"/> Nationals</span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/visitors" className="navbar-item is-expanded is-tab">
                <span>Visiting <br className="wrap-text"/> Jamaica </span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/affairs" className="navbar-item is-expanded is-tab">
                <span>Consulate <br className="wrap-text"/> Affairs</span>
                </Link>
                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/services" className="navbar-item is-expanded is-tab">
                <span>Consulate <br className="wrap-text"/> Services</span>
                </Link>
                
                {this.state.user && this.state.user.accessLevel < 1 && (
                  <Link to="/add-posting" className="navbar-item is-expanded is-tab">
                    <span>Add <br className="wrap-text"/> Post</span>
                  </Link>
                )}

                <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/contact" className="navbar-item is-expanded is-tab">
                  <span>Contact</span>
                </Link>
                {!this.state.user ? (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/login" className="navbar-item is-expanded is-tab">
                    <span>Login</span>
                  </Link>
                ) : (
                  <Link onClick={ () => {this.setState({ showMenu: !this.state.showMenu })}}  to="/" onClick={this.logout} className="navbar-item is-expanded is-tab">
                    <span>Logout</span>
                  </Link>
                )}
              </div>
            </nav>
            <Banner />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/citizens" component={CitizenPage} />
              <Route exact path="/postings" component={PostingList} />
              <Route exact path="/visitors" component={VistorPage} />
              <Route exact path="/affairs" component={AffairsPage} />
              <Route exact path="/services" component={ServicePage} />
              <Route exact path="/add-posting" component={AddPosting} />
              <Route exact path="/contact" component={ContactPage} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Context.Provider>
    );
  }
}
