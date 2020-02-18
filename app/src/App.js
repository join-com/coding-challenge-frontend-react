import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';
import Cases from './components/cases/Cases.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      loading: false,
    };
  }

  componentDidMount() {
    fetch('https://bikewise.org:443/api/v2/incidents?page=1&proximity=Berlin%2C%20DE&proximity_square=100')
      .then((results) => results.json())
      .then((data) => {
        this.setState({ cases: data.incidents })
      })
    ;
  }

  render() {
    return (
      <section className="container">
        <Header />
        <Filters />
        <Cases cases={this.state.cases} loading={this.state.loading}/>
      </section>
    )
  };
};
