import React, { PureComponent } from 'react';
function Mens_watch(props){
    return(
        <>
         <div className="card" style={{width:" 18rem"}}>
                <img src={props.card1} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">Audemers Piguit</h5>
                    <p className="card-text">25,000</p>
                    <a href="/" className="btn btn-secondary">Buy Now</a>
                </div>
            </div>
            <Mens_watch card1='./images/card_1.jpeg'/>
        </>
    );
}
export default Mens_watch;