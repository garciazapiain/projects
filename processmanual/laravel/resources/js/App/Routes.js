import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import history from '../history'
import Home from './Home.js'
import AddManual from './Components/AddManual.js';
import Nav from './Components/Nav.js'

const NotFound = () => {
  return <h1>Not Found</h1>
}
const containerStyle = {
  display: "flex",
  flexDirection: "column"
};

const Routes = props => {
  return(
      <BrowserRouter history={history}>
        <Nav />
        <Switch>
          <Route path='/manual/new' component={AddManual} />
          <Route path='/' component={Home} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
  )
};

export default Routes;