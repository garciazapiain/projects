import React, { useState, useEffect } from 'react';
import {HashRouter, Route, Switch, Redirect } from "react-router-dom";
import history from '../history.js'
import Home from './Home.js'
import NavigationBar from './NavigationBar.js';
import MyManuals from './MyManuals';
import AddManual from './AddManual.js';
import ViewManual from './ViewManual.js'
import EditManual from './EditManual';
import Footer from './Footer.js'
import LoginNav from './LoginNav.js'
import Login from './Login.js'
import Register from './Register.js'
import Profile from './Profile.js'


const NotFound = () => {
  return <h1>Not Found</h1>
} 

const Routes = props => {
  const [ manual, setManual ] = useState([]); 
  const [ user, setUser ] = useState({
    loggedIn: false,
    token: '',
    user: {
      name : '',
      email: '',
      password: ''
    }
});

useEffect(() => {
  const token = window.localStorage.getItem('token');
  const user = JSON.parse(window.localStorage.getItem('user'));
  if (token && user) {
      setUser({
          loggedIn: true,
          token: token,
          user: user
      })
  }
}, []);

if (user.loggedIn && user.token) {
  console.log(user);
  console.log("this is user token " + user.token);
  return(
      <HashRouter history={history}>
        <NavigationBar 
        user={user}
        setUser={setUser}
        />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' 
            render = {()=>    
              <Profile
                user = {user}
                setUser={setUser} 
                />                           
              }/>
          <Route path='/manual/new' 
            render = {()=>    
              <AddManual
                user = {user}
                setUser={setUser} 
                />                           
              }/>
          <Route path='/manual/mymanuals' 
            render = {()=>    
              <MyManuals
                setManual={setManual}
                user = {user}
                setUser={setUser} 
                />                           
              }/>
            <Route path={`/manual/edit/${manual.id}`} 
              render={()=>
              <EditManual
                manual={manual}
                user = {user}
              />
            }/>
            <Route path={`/manual/view/${manual.id}`} 
              render={()=>
              <ViewManual
                manual={manual}
              />
            }/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </HashRouter>
  )
          }
          return (
            <>
               <HashRouter>
                    <div style={{width:'100vw', height: '100vh'}}>
                        <LoginNav />
                        <Switch>
                            <Route
                                exact={true} 
                                path='/'
                                render = {()=>    
                                    <Login 
                                        user={user}
                                        setUser={setUser}
                                    />
                                }
                            />  
                            <Route
                                exact={true} 
                                path='/register'
                                render = {()=>    
                                    <Register 
                                        user={user}
                                        setUser={setUser}
                                    />
                                }
                            />  
                        </Switch>
                    </div>
               </HashRouter>
            </>
        )
                              }

export default Routes;
