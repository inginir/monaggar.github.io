import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Template from './containers/Template'
import Profile from './containers/Profile'


ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Template}/>
            <Route path = {'/profile'} component={Profile}/>
        </Switch>
    </Router>,
    document.getElementById('root')
);
