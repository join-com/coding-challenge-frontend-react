import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';
import Case from './components/case/Case.js';
import Cases from './components/cases/Cases.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      loading: false,
    };
  }

  render() {
    return (
      <section class="container">
        <Header />
        <Filters />
        <Cases cases={this.state.cases} loading={this.state.loading} />
      </section>
    )
  };
};
