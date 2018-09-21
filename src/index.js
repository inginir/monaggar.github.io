import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Template from './containers/Template'
import Profile from './containers/Profile'


ReactDOM.render(
    <div style={{marginLeft:""}}>
    <Router>
        <Route path="/" component={Template}/>
    </Router>
    </div>,
    document.getElementById('root')
);
