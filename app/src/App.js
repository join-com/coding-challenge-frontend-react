import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';
import Case from './components/case/Case.js';

function App() {
  return (
    <section class="container">
      <Header />
      <Filters />
      <p>Page content</p>
      <Case
        imageSrc=""
        title="foo"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        dateOfTheft="Tues Nov 27th 2018"
        reported="Tues Nov 28th 2018"
        location="Berlin, 10405, DE"
      />
    </section>
  );
}

export default App;
