import React, { useState, useEffect } from 'react';
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

const Routes = props => {
  const [ manualId, setManualId ] = useState(null);
 
  return(
      <BrowserRouter history={history}>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manual/new' exact component={AddManual} />
          <Route path='/manual/mymanuals' 
            render = {()=>    
              <MyManuals
                setManualId={setManualId}
                />                           
              }/>
            <Route path='/manual/edit/' 
              render={()=>
              <EditManual
                manualId={manualId}
              />
            }/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  )
};

export default Routes;
