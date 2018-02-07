const css = require('./app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";

import Home from './components/Home'

const App = () => {
    return(
        <Router history = {browserHistory}>
            <div>
                <Switch>
                    <Route path = "/" component = {Home}/>
                </Switch>
            </div>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
