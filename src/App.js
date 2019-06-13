import React from 'react';
import styled, { keyframes } from 'styled-components'

import logo from './logo.svg';
import './App.css';

const AppWrapper = styled.div`
    text-align: center;
`

function App() {
  return (
    <AppWrapper>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="test">
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </AppWrapper>
  );
}

export default App;
