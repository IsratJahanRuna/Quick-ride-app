import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" className="bg-secondary">
                <Navbar.Brand href="/home" style={{ color: 'lightblue' }}><h2>Quick Ride</h2></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end nav-bar">
                    <Nav.Link href="/home" style={{ color: 'white' }}>Home</Nav.Link>
                    <Nav.Link href="/destination" style={{ color: 'white' }}>Destination</Nav.Link>
                    <Nav.Link href="/booking" style={{ color: 'white' }}>Blog</Nav.Link>
                    <Nav.Link href="/booking" style={{ color: 'white' }}>Contact</Nav.Link>
                    <Nav.Link href="/login" style={{ color: 'white', backgroundColor:'lightblue' }}>Login</Nav.Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;