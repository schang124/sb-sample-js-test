import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';

import { Main } from './components';
import './App.css';
import history from './history';

import styled from 'styled-components';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <SendBird>
          <Route path="/" component={Main}></Route>
        </SendBird>
      </Router>
    );
  }
}

export default App;

const SendBird = styled.div`
  margin: auto;
`;