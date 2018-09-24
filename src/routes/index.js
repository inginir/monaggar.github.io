import React from 'react'
import {Route} from 'react-router-dom'
import Template from '../containers/Template'
import Home from '../containers/Home'
import Profile from '../containers/Profile'
import Sequences from '../containers/Sequences'
import Courses from '../containers/Courses'

const createRoutes = () => {
  return (
    <Route path='/' component={Template}>
      <Route exact path="/" component={Home}/>
      <Route path = {'/profile'} component={Profile}/>
      <Route path = {'/sequences'} component={Sequences}/>
      <Route path = {'/courses'} component={Courses}/>

    </Route>
  )
}

const Routes = createRoutes()

export default Routes
