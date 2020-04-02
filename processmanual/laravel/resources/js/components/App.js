import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import '../../sass/index.scss'
import Routes from './Routes.js'
import NavigationBar from './NavigationBar.js';


export default class App extends React.Component {
    render() {
        return (
            <>
            <Routes/>
            </>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
