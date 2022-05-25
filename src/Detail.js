import React from 'react';
import './detail.css';
import Footer from './Footer'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sub_nav from './Sub_nav';


function Detail () {
   const data = [{
        img1 : require('./images/card3.jpg'),
        img2 : require('./images/card5.jpg'),
        img3 : require('./images/card3.jpg')
      },
       {
        heading:"Rolex Daytona Yellow Gold Green Dial 116508 Unworn 2021",
        price: "$75,000",
        d_heading:"Description",
        description1:"This watch is 100% Unworn and comes with the Original Box, Booklets, Green Chronometer Tag, and Warranty Card. The watch does not come with the bezel protector nor the white serial tag. The warranty card was dated and all of the stickers were removed from the watch at the time of the original purchase from the Rolex Authorized Dealer. The bracelet may have been sized at the time of the original purchase but the watch comes with all links that come standard on Rolex Daytona models.",
        description2:" The bracelet can be sized for the buyer ahead of time at the buyer's request. If you have another Rolex watch with the oyster bracelet, simply tell us how many links are on each side of the watch and we will match it for you. If this is your first Rolex watch with the oyster bracelet, tell us your approximate wrist size and we will do our best to size it accordingly. We will, of course, include any removed links inside the package with everything else."
       }
    ]

    const location = useLocation();
    const {imag, title, price, description1, description2} = location.state;
        return (  
            <>
            {/* <Sub_nav /> */}
            <div className='d_main'>
                <div className="image">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                            <img src={imag} className="d-block w-100 img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={data[0].img2} className="d-block w-100 img" alt="..."/>
                            </div>
                            <div className="carousel-item">
                            <img src={data[0].img3} className="d-block w-100 img" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
                <div className="content">
                    <h3 className='heading'>{title}</h3>
                    <h3 className='price'>{price}</h3>
                    <div className="desp">
                    <button className='condition'>Condition: <span>Unworn</span></button>
                    <button className='year'>Year of production: <span>2021</span></button>
                    </div>
                    <div className="buttons">
                    <Link 
                        className='link'
                        to='/buy/form' 
                        >   
                        <button className='buy'>Buy</button>
                        </Link>
                        <br />
                        <Link 
                        className='link'
                        to ="/cart"
                        state={{imag: imag,title: title,price: price}}>
                        <button className='cart'>Add to cart</button> 
                        </Link>
                        <Link 
                        className='link'
                        to='/login' 
                        >   
                        <button className='contact'>Contact Seller</button>    
                        </Link>                 
                    </div>
                </div>
                
            </div>
            <div className="info">
                    <h2>DETAILS</h2>
                    <div className="b_info">
                        <div className="basic">
                            <table>
                                <thead>
                                    <th>Basic Info</th>
                                </thead>
                                <tbody >
                                    <tr className='text-center'>
                                        <td>Listing code</td>
                                        <td>24690</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Brand</td>
                                        <td>Rolex</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Model</td>
                                        <td>Daytona</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Movement</td>
                                        <td>Automatic</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Case material</td>
                                        <td>Yellow gold</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Gender</td>
                                        <td>Men's watch</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Case diameter</td>
                                        <td>40mm</td>
                                    </tr>
                                    <tr className='text-center'>
                                        <td>Glass</td>
                                        <td>Sapphire crystal</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="description">
                            <h2>{title}</h2>
                            <p>{description1}</p>
                            <p>{description2}</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        );
}
 
export default Detail;
