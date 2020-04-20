import React from 'react';
import ReactDOM from 'react-dom';
import '../../sass/index.scss'
import Routes from './Routes.js'

export default class App extends React.Component {
    render() {
        return (
            <>
            <Routes/>
            </>
        );
    }
}

if (document.getElementById('index')) {
    ReactDOM.render(<App />, document.getElementById('index'));
}
