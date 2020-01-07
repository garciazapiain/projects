import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss';
import Home from './Home';
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import history from "../history.js";
import Navigation from "./Nav/Navigation";
import Login from './Auth/Login';
import Register from './Auth/Register';
import LoginNav from './Nav/LoginNav';
import Search from './Search/Search';
import smoothscroll from 'smoothscroll-polyfill';
 
// kick off the polyfill!
smoothscroll.polyfill();

//const scrollToRef = (ref) => window.scrollTo(0, ref.current)

const App = () =>  {
    const [ user, setUser ] = useState({
        loggedIn: false,
        token: '',
        user: {}
    });

    const [ scrollTo, setScrollTo] = useState(null);

    const mapRef = useRef(null);

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

    useEffect(() => {
        console.log('SOMETHING HAPPENED')
        if (scrollTo) {
            console.log(scrollTo);
            const scrollToElement = document.querySelector(scrollTo)
            if (scrollToElement) {
                const scrolltop = window.pageYOffset || document.documentElement.scrollTop;
                console.log('SCROLLING TO '+scrollTo);
                // console.log(document.querySelector('.mapRow').getBoundingClientRect().top)
                // console.log(document.querySelector('.mapRow').getBoundingClientRect().top + scrolltop)
                window.scrollTo({
                    top: scrollToElement.getBoundingClientRect().top + scrolltop, 
                    left: 0, 
                    behavior: 'smooth'
                });
                
            }
            setScrollTo(null);
            
        }
    });


    if (user.loggedIn && user.token) {
        return (
            <>
            <HashRouter history={history}>
                <div style={{width:'100vw', minHeight: '100vh'}}>
                    <Navigation
                        setUser={setUser} 
                        user={user}
                    />
                    <div> 
                    <Switch>
                        <Route
                            path = '/search'
                            render={() => 
                                <Search
                                    setUser={setUser} 
                                    user={user}
                                    setScrollTo={setScrollTo}
                                />
                            }
                        />
                        <Route
                            path = '/'
                            render={() =>
                                <Home
                                    setUser={setUser} 
                                    user={user}
                                    setScrollTo={setScrollTo}
                                />
                            }
                        />
                    </Switch>
                    </div>
                </div>
            </HashRouter>
            </>
        )
    } return (
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

export default App;

ReactDOM.render(<App/>, document.getElementById('app'));