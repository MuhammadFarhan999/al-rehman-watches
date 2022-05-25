import React, { Component } from 'react';
import Cards from './Cards';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import New_arival from './New_arival'
import Mcards from './Mcards'
import Main from './Main';

class Layout extends React.Component {
    render() { 
        return <div>
            <Home />
            <Navbar />
            <Main />
            <New_arival />
            <Mcards />
            <Footer />
            
        </div>;
    }
}
 
export default Layout;