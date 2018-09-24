import React from 'react'
import { Route } from 'react-router-dom'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Sequences from '../containers/Sequences'
import Courses from '../containers/Courses'

const createRoutes = () => {
    return (
        <div>
            <Route path="/Profile" component={Profile} />
            <Route path="/Home" component={Home} />
            <Route exact path="/" component={Home} />
            <Route path={'/profile'} component={Profile} />
            <Route path={'/sequences'} component={Sequences} />
            <Route path={'/courses'} component={Courses} />
        </div>
    )
}

const TemplateRoutes = createRoutes()

export default TemplateRoutes
