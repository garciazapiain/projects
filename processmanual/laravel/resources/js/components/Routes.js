import React from 'react'
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import history from '../history'
import Home from './Home.js'
import AddManual from './AddManual.js';
import NavigationBar from './NavigationBar.js';
import EditManual from './EditManual';
import MyManuals from './MyManuals';
import Footer from './Footer.js'

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
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manual/new' exact component={AddManual} />
          <Route path='/manual/mymanuals' exact component={MyManuals} />
          <Route path='/manual/edit' render={()=>
            <EditManual
            manualId={manualId}
            />
          } 
          />
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  )
};

export default Routes;
