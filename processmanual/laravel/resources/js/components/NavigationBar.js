import React, {useState} from 'react';
import '../../sass/index.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


const NavigationBar = props => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    
    return (
       <>
        <div className='navPC'>
            <div className="logoPC"><Link to='/'> <img src="images/logo.png"/></Link></div>
            <div className='navButton'>
                <Link to='/manual/mymanuals'><div>My Manuals</div></Link>
                <Link to='/manual/new'><div>Add Manual</div></Link>
                <Link to='/#aboutHomePage'><div>About</div></Link>
                <Link to='/#contactHomePage'><div>Contact</div></Link>
                <Link to='/'><div>Profile</div></Link>
            </div>
        </div>
        <div className="navMobile">
          <div className="logoMobile"><Link to='/'><img src="images/logo.png"/></Link></div>
          <div>
          <Navbar color="faded" light>
          <NavbarToggler className="mr-2" onClick={toggleNavbar} />
          <Collapse isOpen={!collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <div className='navMobileItems'>
                  <Link to='/manual/mymanuals' className="navLink">My Manuals</Link>
                  <Link to='/manual/new' className="navLink">Add Manual</Link>
                  <Link to='/#aboutHomePage' className="navLink">About</Link>
                  <Link to='/#contactHomePage' className="navLink">Contact</Link>
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

