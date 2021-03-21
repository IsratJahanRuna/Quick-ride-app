import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { UserContext } from '../../App';
import "firebase/auth";
import firebase from "firebase/app";
import {
    Link
  } from "react-router-dom";

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            let signedOutUser = {
                isSignedIn: false,
                name: '',
                email: '',
                password: '',
                photo: '',
                error: '',
                success: false
            }
            setLoggedInUser(signedOutUser);
        })
            .catch((error) => {

            });
        }
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
                    {/* <Nav.Link href="/login" style={{ color: 'white', backgroundColor:'lightblue', width:'70px' }}>Login</Nav.Link> */}
                    <Link to="/login" style={{ color: 'white', backgroundColor:'lightblue', width:'77px' }} className="nav-link text-white"onClick={handleSignOut}>{loggedInUser.email?'Logout':'Login'}</Link>
                <Link to="#" className="nav-link active text-white">{loggedInUser.displayName||loggedInUser.email}</Link>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;