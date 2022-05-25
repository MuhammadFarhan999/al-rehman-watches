import React, { Component } from 'react';
import './new_arival.css';
import Mcards from './Mcards';
import { BrowserRouter, Route, Routes,Link} from 'react-router-dom';


class New_arival extends React.Component {
    state ={
        img1: require('./images/na_rolex.jpg'),
        img2: require('./images/rado.jpg'),
        img3: require('./images/pp.jpg'),
        img4: require('./images/iwc.jpg'),
        heading: "NEW ARRIVAL",
        c1_h: "ROLEX",
        c2_h: "RADO",
        c3_h: "Patek Phillipe",
        c4_h: "IWC",
        card_p:"Check Out New stunning articles Here ",
        btn:"Explore more",
    }


    render() { 
        return <div className='new_arival'>
            <h2>{this.state.heading}</h2>
            <div className="n_card">
               <div className="card">
                    <img src={this.state.img1} alt="" />
                    <div className="na_content" id='1_cont'>
                        <div className="data">
                        <h4>{this.state.c1_h}</h4>
                        <p>{this.state.card_p}</p>
                        <Link className='link' to="/rolex" >Explore</Link>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img src={this.state.img2} alt="" />
                <div className="na_content" id='cont_2'>
                        <div className="data">
                        <h4>{this.state.c2_h}</h4>
                        <p>{this.state.card_p}</p>
                        <Link className='link' to="/rolex">Explore</Link>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img src={this.state.img3} alt="" />
                <div className="na_content" id='cont_3'>
                        <div className="data">
                        <h4>{this.state.c3_h}</h4>
                        <p>{this.state.card_p} </p>
                        <Link className='link' to="/rolex">Explore</Link>
                    </div>
                    </div>
                </div>
                <div className="card">
                    <img src={this.state.img4} alt="" />
                    <div className="na_content" id='cont_4'>
                        <div className="data">
                        <h4>{this.state.c4_h}</h4>
                        <p>{this.state.card_p} </p>
                        <Link className='link' to="/rolex">Explore</Link>
                    </div>
                    </div>
                    </div>
            </div>
            {/* <div className="button">
                <button>
                <a href="/">{this.state.btn}</a>
                </button>
            </div> */}
        </div>;
    }
}
 

// function New_arival(){
//     <div className='new_arival'>
//             <h2>{new_arival_data[0].heading}</h2>
    
//             <div className="n_card">
//      {new_arival_data.map((val) =>{
//                 return(
//                     <Sub_new_arival 
//                     img1 = {val.img1}
//                     c1_h = {val.c1_h}
//                     card_p = {val.card_p}
//                     />
//                 )
//             })}
//     </div>
//     </div>
           
   
// }
export default New_arival;