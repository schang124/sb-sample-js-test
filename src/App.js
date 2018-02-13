import 'babel-polyfill';
import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { Main } from './components';
import './App.css';
import history from './history';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route path="/" component={Main}></Route>
      </Router>
    );
  }
}

export default App;
