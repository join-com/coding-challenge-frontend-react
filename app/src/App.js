import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';

function App() {
  return (
    <section class="container">
      <Header />
      <Filters />
      <p>Page content</p>
    </section>
  );
}

export default App;
