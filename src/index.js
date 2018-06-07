import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';
import store from './store';
import './index.css';

import Home from './components/Home';
import SearchResult from './components/SearchResult.js';

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/search/:SearchTerms" component={SearchResult} />
        <Route component={Home} />
      </Switch>
    </Provider>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
