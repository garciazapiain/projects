import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import Home from './App/Home.js'
import Routes from './App/Routes.js'
 
ReactDOM.render(<Routes />, document.getElementById('app'));
