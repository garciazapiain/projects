import React, { useState, useEffect } from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import history from '../history'
import Home from './Home.js'
import NavigationBar from './NavigationBar.js';
import MyManuals from './MyManuals';
import AddManual from './AddManual.js';
import ViewManual from './ViewManual.js'
import EditManual from './EditManual';
import Footer from './Footer.js'

const NotFound = () => {
  return <h1>Not Found</h1>
}

const Routes = props => {
  const [ manual, setManual ] = useState([]);
 
  return(
      <BrowserRouter history={history}>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manual/new' exact component={AddManual} />
          <Route path='/manual/mymanuals' 
            render = {()=>    
              <MyManuals
                setManual={setManual}
                />                           
              }/>
            <Route path='/manual/edit/' 
              render={()=>
              <EditManual
                manual={manual}
              />
            }/>
            <Route path='/manual/view/' 
              render={()=>
              <ViewManual
                manual={manual}
              />
            }/>
          <Route component={NotFound} />
        </Switch>
        <Footer/>
      </BrowserRouter>
  )
};

export default Routes;
