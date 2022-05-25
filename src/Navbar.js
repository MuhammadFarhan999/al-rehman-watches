import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';


class Navbar extends React.Component {
  state = {
             logo: "AL-REHMAN WATCHES",
             cart: require('./images/cart.png')
       }
    render() { 
        return <div className='n_main'>
          <div className="main">
           <a href="" id='logo'><h2 className='logo'>{this.state.logo}</h2></a>

           <nav className="navbar navbar-expand-lg navbar-dark bg-none">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
      
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle bg-none" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="/">Men's Watches</a></li>
            <li><a className="dropdown-item" href="/">Ladies Watches</a></li>
            <li><hr className="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Luxury Watches</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Contact Us</a>
        </li>
      </ul>
      
      <form className="d-flex" id='search_section'>
        <input className="form-control me-2" id='search' type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-light" type="submit">Search</button>
        
        < Link to = "/login" > LogIn </Link> 
        <Link to = "/signup" > SignUp </Link> 
        <Link to = '/cart' > 
        < img id = 'cart' src = { this.state.cart } alt = "" / > 
        </Link>
      </form>

    </div>
  </div>
</nav>
</div>

        </div>;
    }
}
 
export default Navbar;





// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import Main from './Main';
// import './navbar.css';


// class Navbar extends React.Component {
//     state = {
//         logo: "AL-REHMAN WATCHES",
//         cart: require('./images/cart.png')
//     }
//     render() {
//         return ( <
//             div className = 'n_main' >
//             <
//             div className = "main" >
//             <
//             a href = ""
//             id = 'logo' > < h2 className = 'logo' > { this.state.logo } < /h2></a >

//             <
//             nav className = "navbar navbar-expand-lg navbar-dark bg-none" >
//             <
//             div className = "container-fluid" >
//             <
//             button className = "navbar-toggler"
//             type = "button"
//             data - bs - toggle = "collapse"
//             data - bs - target = "#navbarSupportedContent"
//             aria - controls = "navbarSupportedContent"
//             aria - expanded = "false"
//             aria - label = "Toggle navigation" >
//             <
//             span className = "navbar-toggler-icon" > < /span> <
//             /button> <
//             div className = "collapse navbar-collapse"
//             id = "navbarSupportedContent" >
//             <
//             ul className = "navbar-nav me-auto mb-2 mb-lg-0" >
//             <
//             li className = "nav-item" >
//             <
//             a className = "nav-link active"
//             aria - current = "page"
//             href = "/" > Home < /a> <
//             /li>

//             <
//             li className = "nav-item dropdown" >
//             <
//             a className = "nav-link dropdown-toggle bg-none"
//             href = "/"
//             id = "navbarDropdown"
//             role = "button"
//             data - bs - toggle = "dropdown"
//             aria - expanded = "false" >
//             Category <
//             /a> <
//             ul className = "dropdown-menu"
//             aria - labelledby = "navbarDropdown" >
//             <
//             Link > < li > < a className = "dropdown-item"
//             href = "/" > Men 's Watches</></li></Link> <
//             li > < a className = "dropdown-item"
//             href = "/" > Ladies Watches < /a></li >
//             <
//             li > < hr className = "dropdown-divider" / > < /li> <
//             li > < a className = "dropdown-item"
//             href = "/" > Luxury Watches < /a></li >
//             <
//             /ul> <
//             /li> <
//             li className = "nav-item" >
//             <
//             a className = "nav-link"
//             href = "/" > Contact Us < /a> <
//             /li> <
//             /ul>

//             <
//             form className = "d-flex"
//             id = 'search_section' >
//             <
//             input className = "form-control me-2"
//             id = 'search'
//             type = "search"
//             placeholder = "Search"
//             aria - label = "Search" / >
//             <
//             button className = "btn btn-outline-light"
//             type = "submit" > Search < /button> <
//             Link to = "/login" > LogIn < /Link> <
//             Link to = "/signup" > SignUp < /Link> <
//             Link to = '/cart' > < img id = 'cart'
//             src = { this.state.cart }
//             alt = "" / > < /Link> <
//             /form>

//             <
//             /div> <
//             /div> <
//             /nav> <
//             /div>


//             <
//             /div>
//         );
//     }
// }

// export default Navbar;