import React, { Component } from 'react';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';
import './card.css'

class Cards extends React.Component {
    state ={
        card1:require('./images/card_1.jpeg'),
        card2:require('./images/card2.jpg'),
        card3:require('./images/card3.jpg'),
        card4:require('./images/card5.jpg'),
        card5:require('./images/card5.jpg'),
        card6:require('./images/card6.jpg'),
        card7:require('./images/card7.png'),
        card8:require('./images/card8.jpg'),
        h3:"Luxury Watches",
        btn:"Explore more",
    }
    render() { 
        return <div className='main_container'>
            <div className="heading">
                <h3>{this.state.h3}</h3>
            </div>
            <div className="card_main">
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card1} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <Link className='link' to="/buy"><a href="/" className="btn btn-secondary">Buy Now</a></Link>
                    
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card2} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card3} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card4} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card5} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card6} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card" style={{width:" 18rem"}}>
                <img src={this.state.card7} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <div className="card m_card"  style={{width:" 18rem"}}>
                <img src={this.state.card8} className="card-img-top" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            </div>
            {/* <div className="button">
                <button>
                <a href="/">{this.state.btn}</a>
                </button> */}
            </div>
        // </div>;
    }
}
 
export default Cards;