import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import Banner from './Banner';
import Footer from './Footer';
import withContext from '../withContext';

const Layout = props => {
    const [showMenu , setShowMenu] = useState(false);
    //console.log(props);
    return (
        <div className="App">
          <Banner />
          <nav
            id="navbar"
            className="navbar has-text-centered"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="navbar-brand">
              <b className="nav-span"><Link to="/" style={{color:"black"}}>
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
                  setShowMenu(!showMenu);
                }}
                
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <b>menu</b>
              </label>
            </div>
            <div className={`navbar-menu has-text-centered ${
                  showMenu ? "is-active" : ""
                }`}>
                  <div className="dropdown navbar-item is-tab is-hoverable">
                    <div className="dropdown-trigger navbar-link is-expanded is-tab">
                      <Link style={{textAlign:"left",paddingTop:"0"}}  onClick={ () => {setShowMenu(!showMenu);}}  to="/general" className="custom-nav">
                        <span><i className="fa fa-laptop"></i> General <br className="wrap-text"/> Information </span> 
                      </Link>
                    </div>
                    <div className="dropdown-menu standardLook has-text-centered" id="dropdown-menu4" role="menu">
                      <div className="dropdown-content standardLook has-text-centered">                      
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/jamaica" className="navbar-item is-expanded is-tab">
                          About Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/westafrica" className="navbar-item is-expanded is-tab">
                          About West Africa 
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/covid19" className="navbar-item is-expanded is-tab">
                          General COVID-19 Information
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/covidja" className="navbar-item is-expanded is-tab">
                          COVID-19 in Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/covidwa" className="navbar-item is-expanded is-tab">
                          COVID-19 in West Africa
                        </Link>
                        <Link style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} to="/businessja" className="navbar-item is-expanded is-tab">
                          Doing Business in Jamaica
                        </Link>
                        <Link style={{textAlign:"left"}} onClick={ () => {setShowMenu(!showMenu)}} to="/businesswa" className="navbar-item is-expanded is-tab">
                          Doing Business in West Africa
                        </Link>
                        <a style={{textAlign:"left"}}  onClick={ () => {setShowMenu(!showMenu)}} href="https://www.gov.jm/" className="navbar-item is-expanded is-tab">
                          Government of Jamaica
                        </a>
                        <a style={{textAlign:"left"}} href="https://mot.gov.jm/" className="navbar-item is-expanded is-tab">
                          Ministry of Tourism, Jamaica
                        </a>
                      </div>
                    </div>
                  </div>
                <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/citizens" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-book"></i> Jamaican <br className="wrap-text"/> Nationals</span>
                </Link>
                <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/visitors" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-plane"></i> Visiting <br className="wrap-text"/> Jamaica </span>
                </Link>
                <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/postings" className="navbar-item is-expanded is-tab">
                <span> <i className="fa fa-globe"></i> News Articles, <br className="wrap-text"/> Notices and Gallery</span>
                </Link>


                <div className="dropdown navbar-item is-tab is-hoverable">
                    <div className="dropdown-trigger navbar-link is-expanded is-tab">
                      <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/about" className="custom-nav" style={{paddingTop:"0"}}>
                        <span> <i className="fa fa-building"></i> About <br className="wrap-text"/> The Consulate </span>
                      </Link>
                    </div>
                    <div className="dropdown-menu standardLook" id="dropdown-menu4" role="menu">
                      <div className="dropdown-content standardLook is-size-6">                      
                        <Link style={{textAlign:"left"}} to="/fees" onClick={ () => {setShowMenu(!showMenu)}} className="navbar-item is-expanded is-tab">
                          Fees
                        </Link>
                        <Link style={{textAlign:"left"}} onClick={ () => {setShowMenu(!showMenu)}}  to="/commissioner" className="navbar-item is-expanded is-tab">
                          The Commissioner
                        </Link>
                        <Link style={{textAlign:"left"}} to="/staff" onClick={ () => {setShowMenu(!showMenu)}} className="navbar-item is-expanded is-tab">
                          The General Staff
                        </Link>
                        <a style={{textAlign:"left"}} onClick={ () => {setShowMenu(!showMenu)}} href="https://mfaft.gov.jm" className="navbar-item is-expanded is-tab">
                          Ministry of Foreign Affairs and Foreign Trade Jamaica
                        </a>
                      </div>
                    </div>
                  </div>
                
                {props.context.user && props.context.user.accessLevel > 0 && (
                  <Link onClick={ () => {setShowMenu(!showMenu)}} to="/add-posting" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-plus"></i> Add <br className="wrap-text"/> Post</span>
                  </Link>
                )}
                {/*<Link to="/add-posting" className="navbar-item is-expanded is-tab">
                  <span> <i className="fa fa-plus"></i> Add <br className="wrap-text"/> Post</span>
                </Link>
                */}
                <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/contact" className="navbar-item is-expanded is-tab">
                  <span> <i className="fa fa-phone"></i> Contact <br className="wrap-text"/> Us</span>
                </Link>
                {!props.context.user ? (
                  <Link onClick={ () => {setShowMenu(!showMenu)}}  to="/login" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-user"></i> Login</span>
                  </Link>
                ) : (
                  <Link onClick={ (e) => {props.context.logout(e)}}  to="/" className="navbar-item is-expanded is-tab">
                    <span> <i className="fa fa-share"></i>Logout</span>
                  </Link>
                )}
              </div>
          </nav>
          <Outlet />
          <Footer />
        </div>
    );
}

export default withContext(Layout);