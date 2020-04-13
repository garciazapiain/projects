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

const NotFound = () => {
  return <h1>Not Found</h1>
}

const Routes = props => {
  const [ manual, setManual ] = useState([]); 
  return(
      <HashRouter history={history}>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/manual/new' component={AddManual} />
          <Route path='/manual/mymanuals' 
            render = {()=>    
              <MyManuals
                setManual={setManual}
                />                           
              }/>
            <Route path={`/manual/edit/${manual.id}`} 
              render={()=>
              <EditManual
                manual={manual}
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
};

export default Routes;
