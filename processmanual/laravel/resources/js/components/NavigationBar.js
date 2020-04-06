import React, {useState} from 'react';
import {   BrowserRouter } from 'react-router-dom'
import '../../sass/index.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import Home from './Home.js'
import { HashLink as Link } from 'react-router-hash-link';


const NavigationBar = props => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const aboutScroll = () => {
      console.log('hey')
    }
    
    return (
       <>
        <div className='navPC'>
            <Link to='/'><div><img src="images/logo.png"/></div></Link>
            <div className='navButton'>
                <Link to='/manual/mymanuals'><div>My Manuals</div></Link>
                <Link to='/manual/new'><div>Add Manual</div></Link>
                <Link  to=
                  '/#aboutHomePage'>
                  <div>About</div></Link>
                <Link to='/#contactHomePage'>
                  <div>Contact</div></Link>
                <Link to='/'><div>Profile</div></Link>
            </div>
        </div>
        <div className="navMobile">
          <div className="logoMobile">
          <Link to='/'><img src="images/logo.png"/></Link>
          </div>
          <div>
          <Navbar color="faded" light>
          <NavbarToggler className="mr-2" onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <div className='navMobileItems'>
                  <Link to='/manual/mymanuals' className="navLink">My Manuals</Link>
                  <Link to='/manual/new' className="navLink">Add Manual</Link>
                  <Link to='/' className="navLink">About</Link>
                  <Link to='/' className="navLink">Contact</Link>
                  <Link to='/' className="navLink">Profile</Link>
                </div>
              </NavItem>
            </Nav>
          </Collapse>
          </Navbar>
          </div>
        </div>
      </>
    )
}

export default NavigationBar

