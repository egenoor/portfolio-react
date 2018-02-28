const css = require('./app.css');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, browserHistory } from "react-router-dom";

import Home from './components/Home';
import Header from './components/Header';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
    return(
        <Router history = {browserHistory}>
            <div>
                <Header />
                <div className="app-wrapper">
                    <Switch>
                        <Route exact path = "/" component = {Home}/>
                        <Route exact path = "/portfolio" component = {Portfolio}/>
                        <Route exact path = "/contact" component = {Contact}/>
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
