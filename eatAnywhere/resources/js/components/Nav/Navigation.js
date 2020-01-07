import React, {useState} from 'react';
import {Link} from "react-router-dom";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';



const Navigation = props => {
    const [collapsed, setCollapsed] = useState(true);
    const { user, setUser } = props
    const toggleNavbar = () => setCollapsed(!collapsed);

    const handleLogout = () => {
        console.log('logout');
        async function logout() {
            const token = window.localStorage.getItem('token');
            const response = await fetch('/api/logout' , {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Authorization': 'Bearer ' + token,
                  'X-Requested-With': 'XMLHttpRequest',
                  'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            window.localStorage.removeItem('token');
            window.localStorage.removeItem('user');
            setUser({
                loggedIn: false,
                token: '',
                user: {}
            })
            console.log('logged out');
            window.location = '/';
        }

        logout();
    }

    return (
        
        
      <Navbar  color="faded" className="navBar" light> 
      
        <NavbarBrand href="/" className="mr-auto">eatAnywhere</NavbarBrand>
        
        <Nav navbar className="navLaptop">
            <NavItem>
                <Link to="/" className="navLink navLaptopItem">Home</Link>
            </NavItem>
            <NavItem>
                <Link to="/search" className="navLink navLaptopItem">Search</Link>
            </NavItem>
            <NavItem>
              <Button onClick={handleLogout} className="navLaptopItem">Logout</Button>
            </NavItem>
        </Nav>
        <div className="navMobile">
          <NavbarToggler onClick={toggleNavbar} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar >
            <Nav navbar>
              <NavItem>
                <Link to="/" className="navLink">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/search" className="navLink">Search</Link>
              </NavItem>
              <NavItem>
                <Button onClick={handleLogout}>Logout</Button>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    
    );
}

export default Navigation;