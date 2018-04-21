import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import TestComp from './screens/Landing.js';

class App extends Component {
    render() {
        return (
            <div className="App">
                <TestComp/>
            </div>
        );
    }
}

export default App;
