import React,{ Component } from 'react';
import './home.css'

 
class Home extends React.Component {
    state = { 
        video: require('./images/video.mp4') 
     }
    render() { 
        return ( 
            <div className='main' >
                <video autoPlay muted loop id="myVideo"   >
                <source src={this.state.video} type="video/mp4" />
                Your browser does not support HTML5 video.
                </video>
                <div className="overlay"></div>
            </div>
         );
    }
}
 
export default Home;