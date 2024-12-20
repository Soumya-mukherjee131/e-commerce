import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import './Navbar.css'
function BasicExample() {
  
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar); // Toggle the sidebar state
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <div className="navpart1">
      <NavDropdown title="All categories" id="basic-nav-dropdown" style={{paddingLeft: '20px'}} >
        <NavDropdown title="Category 1" id="basic-nav-dropdown" className="dropdown-submenu">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="Category 2" id="basic-nav-dropdown" className="dropdown-submenu">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown title="category 3" id="basic-nav-dropdown" className="dropdown-submenu">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>

        <NavDropdown.Item href="#action/3.3">Category 4</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Category 5</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Category 6</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Value of the Day</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Top 10 Deals</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">New Arrivals</NavDropdown.Item>
      </NavDropdown>
      </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
      <div className="navpart2">
          <Nav className=" nav1 me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/blog">Blogs</Nav.Link>
            <NavDropdown title="Products" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Categories</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Wishlist" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Categories</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Categories</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Categories</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav className=" nav2 ml-5">
              <Link to="/signup" className="button mr-3">Sign Up</Link>
              <Link to="/login" className="button mr-3">Log In</Link>           
          </Nav>
          </Nav>
          </div>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default BasicExample;