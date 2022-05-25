import React, { PureComponent } from 'react';
import Card_data from './Card_data';
import Scards from './Scards';
import Add_to_cart from './Add_to_cart';
import ReactDOM from 'react-dom';
import './card.css'

function Mcards(){
    return(
        <div className="main_container" >
             <div className="heading">
                 <h3>{Card_data[0].h3}</h3>
             </div>
             
             <div className="card_main">
                 {Card_data.map((val) =>{
                     return(
                        <Scards 
                        imag = {val.imag}
                        title = {val.title}
                        price= {val.price}
                        description1={val.description1}
                        description2={val.description2}
                        />
                         );
                 })}
             </div>
         </div>

);
    }

export default Mcards;