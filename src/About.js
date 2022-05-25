import React, { Component } from 'react';
import './about.css';

class About extends React.Component {
    state={
        image:require('./images/about.jpg')
    }
    render() { 
        return <div className='a_main'>
            <div className="image">
                <img src={this.state.image} alt="" />
            </div>
            <div className="content">
                <h2>About Us?</h2>
                <p>In its perpetual quest for excellence, the brand constantly enhances the aesthetics and technologies of its emblematic timepieces. They are an invitation to push boundaries, to reach ever higher. With, as always, the same promise of outstanding quality thanks to the company’s complete, in-house mastery of watchmaking expertise.</p>
                <button>Read more</button>
            </div>
        </div>;
    }
}

export default About;