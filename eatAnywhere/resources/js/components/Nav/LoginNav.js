import React, {useState} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Row } from 'reactstrap';
import {Link} from "react-router-dom";


const LoginNav = props => {
    return (
    <div>
        <Navbar  color="faded" className="navBar" light> 
            <NavbarBrand href="/" className="mr-auto">eatAnywhere</NavbarBrand>
            <Nav navbar>
               <Row>
                    <NavItem className="navLaptopItem">
                        <Link to="/" className="navLink">Login</Link>
                    </NavItem>
                    <NavItem className="navLaptopItem">
                        <Link to="/register" className="navLink">Register</Link>
                    </NavItem>
               </Row>
            </Nav>
        </Navbar>
    </div>
    );
}

export default LoginNav;