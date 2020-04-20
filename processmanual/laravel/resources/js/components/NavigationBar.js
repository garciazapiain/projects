import React, {useState} from 'react';
import '../../sass/index.scss'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button } from 'reactstrap';
import { HashLink as Link } from 'react-router-hash-link';


const NavigationBar = props => {
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    console.log(props.user.userinfo.name);

    const handleLogout = () => {
      console.log('logout');
      async function logout() {
          const token = window.localStorage.getItem('token');
          const response = await fetch('http://www.processmanual.test:8080/api/logout' , {
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
              userinfo: {
                name:'',
                email:'',
                password:''
              }
          })
          console.log('logged out');
          window.location = '/';
      }

      logout();
  }
    
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
                <NavItem>
                  <Button onClick={handleLogout}>Logout</Button>
                </NavItem>
                <h5>Hello {props.user.userinfo.name}</h5>
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

