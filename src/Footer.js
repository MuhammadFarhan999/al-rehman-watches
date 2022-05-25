import * as React from 'react';
import { Component } from 'react';
import './footer.css';

 
class Footer extends React.Component{
    state = { 
       facebook :require('./images/facebook.png'),
       instagram :require('./images/instagram.png'),
       google :require('./images/google.png'),
       twitter :require('./images/twitter.png'),
      }
    render() { 
        return ( 
            <div className="footer">
                <div className="icons">
                    <a href="https://www.google.com/"><img src={this.state.facebook} alt=""></img></a>
                    <a href="https://www.instagram.com/"><img src={this.state.instagram} alt=""></img></a>
                    <a href="https://www.twitter.com/"><img src={this.state.twitter} alt=""></img></a>
                    <a href="https://business.google.com/dashboard/l/02364719397196129444?hl=en"><img src={this.state.google} alt=""></img></a>
                </div>
                <div className="contact">
                    <a href="/">About Us</a>
                    <a href="/">Contact Us</a>
                    <a href="/">Privacy</a>
                    <a href="/">FAQ's</a>
                    <a href="/">Need Help?</a>
                </div>
                <div className="copy_right">
                <span>&copy; Copyright 2022 <a href="/">AL-REHMAN WATCHES</a> AL RIGHTS RESERVED.</span>

                </div>
            </div>
         );
    }
}
 
export default Footer;