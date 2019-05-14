import React, { Component } from 'react';
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Home from "./Home.jsx";
import Resume from './Resume.jsx';
import Portfolio from "./Portfolio.jsx";
import Blog from "./Blog.jsx";
import ContactUs from './ContactUs.jsx';
import { Route, withRouter } from 'react-router-dom';


class App extends Component{
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home}/>
                <Route exact path="/resume" component={Resume} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path = "/blog" component={Blog}/>
                <Route exact path="/contactus" component={ContactUs}/>
                <Footer />
            </div>
        );
        
    }
}

export default withRouter(App);