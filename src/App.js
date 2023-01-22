import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from "./Context";
import axios from 'axios';
import jwt_decode from 'jwt-decode';

import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from './components/Layout';
import HomePage from './components/HomePage';
import CitizenPage from './components/CitizenPage';
import VisitorPage from './components/VisitorPage';
import AboutPage from './components/AboutPage';
import CommissionerPage from './components/CommissionerPage';
import DocumentsPage from './components/DocumentsPage';
import ContactPage from './components/ContactPage';
import Login from './components/Login';
import PostingList from './components/PostingList';
import ViewPosting from './components/ViewPosting';
import AddPosting from './components/AddPosting';
import ServicePage from './components/ServicePage';
import GeneralInfo from './components/GeneralInfo';
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

const sign = require('jwt-encode');
const secret = 'some$3cretKey';
const algorithm = 'HS256';
const data = {
  token : 'Required'
};

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: null, //initialized user object
          postings: [], //initialized postings array; empty initially
          contactName:"", contactEmail: "", nationality: "", contactSubject:"", contactMessage:"", //initialized variables used in contact page
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
        console.log(checkApi);
        /**API request sent to retreive server time, also used as a check on the API */
        const time = await axios.get('/api/time',{
          headers: {
            'Authorization' : jwt
          }
        });
        console.log(time); //used to see if request are being sent and responses retrieved.
        
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
        console.log("componentdidupdate");
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    // used to set navigation at top of page when user is scrolling the web application (website).
    handleScroll = e => {
        console.log("handle scroll");
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
      
    render() {
      return (
        <Context.Provider
        value={{ 
            ...this.state,
            logout:this.logout,
            login: this.login,
            addPosting:this.addPosting,
            getPost:this.getPost,
            getTargetPhotos:this.getTargetPhotos
          }}
        >
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index  element={<HomePage />} />
                        <Route path='citizens' element={<CitizenPage />} />
                        <Route path='visitors' element={<VisitorPage />} />
                        <Route path="general" element={<GeneralInfo />} />
                        <Route path="covid19" element={<Covid19/>} />
                        <Route path="covidja" element={<Covidja />} />
                        <Route path="covidwa" element={<Covidwa />} />
                        <Route path="businessja" element={<Businessja />} />
                        <Route path="businesswa" element={<Businesswa />} />
                        <Route path="documents" element={<DocumentsPage />} />
                        <Route path="terms" element={<Terms />} />
                        <Route path="login" element={<Login />} />
                        <Route path="postings" element={<PostingList />} />
                        <Route path="about" element={<AboutPage />} />
                        <Route path="commissioner" element={<CommissionerPage />} />
                        <Route path="services" element={<ServicePage />} />
                        <Route path="add-posting" element={<AddPosting />} />
                        <Route path="view-posting/:id" element={<ViewPosting />} />
                        <Route path="contact" element={<ContactPage />} />
                        <Route path="test/:id" element={<Test />} />
                        <Route path="staff" element={<Staff />} />
                        <Route path="jamaica" element={<Jamaica />} />
                        <Route path="westafrica" element={<WestAfrica />} />
                        <Route path="attractions" element={<Attractions />} />
                        <Route path="fees" element={<Fees />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </Context.Provider>
      );
    }
}

export default App;