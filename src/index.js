import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home';
import SearchResult from './SearchResult.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path="/search/:SearchTerms" component={SearchResult}/>
    </Router>
    , document.getElementById('root'));
registerServiceWorker();
