import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Card_data from './Card_data';
import Mcards from './Mcards';
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render( 
< React.StrictMode >
    <>
        <App />
        
    </>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();