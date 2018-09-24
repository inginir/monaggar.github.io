import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, applyRouterMiddleware} from 'react-router-dom';
import Template from './containers/Template'
import Relay from 'react-relay'

ReactDOM.render(
    <div style={{marginLeft:""}}>
    <Router>
        <Route path="/" component={Template}/>
    </Router>
    </div>,
    document.getElementById('root')
);
