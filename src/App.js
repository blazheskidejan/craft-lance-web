import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
 import Landing from './screens/Landing.js';
import Home from './screens/Home.js';
import Gigs from './screens/Gigs.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import FormField from './components/Gig';

export default () => (
    <BrowserRouter>
    <MuiThemeProvider>
        <Switch>
            <Route exact path='/' component={Landing}  />
            <Route path='/app' component={Home}/>
            <Route path='/gigs' component={Gigs}/>
            <Route path='/gigscreen' component={FormField} />
        </Switch>
        </MuiThemeProvider>
    </BrowserRouter>
)