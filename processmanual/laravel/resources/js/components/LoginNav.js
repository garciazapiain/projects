import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import {Link} from "react-router-dom";


const LoginNav = props => {
    return (
    <div style ={{backgroundColor:'black'}} className='navButton'>
        <Link to="/" className="navLink">Login</Link>
        <Link to="/register" className="navLink">Register</Link>
    </div>
    );
}

export default LoginNav;