import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import {Link} from "react-router-dom";


const LoginNav = props => {
    return (
    <div className='navPC'>
        <div className="logoPC"><img src="images/logo.png"/></div>
        <div className='navButton'>
        <Link to="/" className="navLink">Login</Link>
        <Link to="/register" className="navLink">Register</Link>
        </div>
    </div>
    );
}

export default LoginNav;