import React, { PureComponent } from 'react';
import Card_data from './Card_data';
import { Link } from 'react-router-dom';
import './card.css';

function Scards(props){
    return(
        <>
            <div className="card_main">
            <div className="card" style={{width:" 18rem"}}>
                <img src={props.imag} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.price}</p>
                    <Link 
                    className='link btn btn-secondary'
                    to="/buy"
                    state={{imag: props.imag,title: props.title,price: props.price,description1: props.description1,description2: props.description2}}
                    >Buy Now</Link>
                    
                </div>
            </div>
            </div>
            </>
    );
}
 
export default Scards;
