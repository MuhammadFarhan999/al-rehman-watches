import React, { Component } from 'react'
import { useLocation } from 'react-router-dom';
import Detail from './Detail';
import Card_data from './Card_data';
import Mcards from './Mcards';
import './cart.css';



function Add_to_cart() {
    

    const location = useLocation();
    const { imag,title,price } = location.state;
    const img = "./images/minus.png";
    
     return(
        <div className="a_main">
            <div className="cart">
                <div className="heading">
                    <h6>Shopping Cart</h6>
                    
                </div>
                <div className="data">
                <div className="img">
                    <img src={imag} alt="" />
                </div>
                <div className="content">
                    <h3>{title}</h3>
                    <div className="buttons">
                        <div className="plus">+</div>
                        <div className="number">
                        <p>1</p>
                        </div>
                        <div className="minus">-</div>
                    </div>
                </div>
                <div className="price">
                    <h4>{price}</h4>
                    <button className="btn btn-danger">Remove</button>
                </div>
                </div>
            </div>
        </div>




        // <div className="container">
        //     <div className="card mb-3" style={{maxWidth: "540px;"}}>
        //     <div className="row g-0">
        //         <div className="col-md-4">
        //         <img src={imag} className="img-fluid rounded-start" alt="..."/>
        //         </div>
        //         <div className="col-md-8">
        //         <div className="card-body">
        //             <h5 className="card-title">{title}</h5>
        //             <p className="card-text">{price}</p>
        //             <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        //         </div>
        //         </div>
        //     </div>
        //     </div>
        // </div>
     )
 }
export default Add_to_cart;