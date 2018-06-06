import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import SearchResult from './SearchResult.js';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/search/:SearchTerms" component={SearchResult}/>
            <Route component={Home}/>
        </Switch>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
