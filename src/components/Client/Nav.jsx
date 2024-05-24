import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Logs from '../Images/bgg.png';
import './Client.css';

const CustomNavbar = () => {
return (
      <Navbar expand="lg">
        <Container>

          <Navbar.Brand href="https://demowebsite1715839541105292201.yourownwebsite.in" alt="loggo">
            <img className='logo-style' src={Logs}/>
            <span className="store-name-color store-name" style={{ fontSize: '12px',fontStyle:"italic" }}></span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          {/* Navbar content */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Menu links */}
              <Nav.Link href="/" title="Home" style={{color:'purple',fontSize:'medium'}}><b>Home</b></Nav.Link>
              <Nav.Link href="aboutus" title="About Us" style={{color:'purple',fontSize:'medium'}}><b>About Us</b></Nav.Link>
              <Nav.Link href="products" title="Products" style={{color:'purple',fontSize:'medium'}}><b>Products</b></Nav.Link>
              <Nav.Link href="scheme" title="Scheme" style={{color:'purple',fontSize:'medium'}}><b>Schemes&Offers</b></Nav.Link>

            </Nav>


            {/* Search bar */}
            <div className='searchBar-Wrapper'>
              <h6 style={{color:'purple',fontSize:'medium'}}>for more info -contact</h6>
              <h6 style={{color:'purple',fontSize:'medium'}}>+91 83456802</h6>
              <h6 style={{color:'purple',fontSize:'medium'}}>goldgalleria@gmail.com</h6>
            </div>
            {/* <div className="searchBar-wrapper">
              <input type="text" className="search-text-box" placeholder="Search" />
              <button className="search-button">
                <span className="icon-search"></span>
                <span className="srch-btn-text">Search</span>
              </button>
            </div>  */}
            {/* Cart button */}
            {/* <div className="cart-btn-wrapper">
              <div className="cart-btn">
                <span className="cart-count-val">0</span>
                <span className="cart-txt-icon">Cart</span>
              </div>
            </div> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default CustomNavbar;


