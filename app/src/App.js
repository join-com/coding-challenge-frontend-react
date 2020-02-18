import React from 'react';
import './App.css';
import Header from './components/header/Header.js';
import Filters from './components/filters/Filters.js';
import Cases from './components/cases/Cases.js';
import Pagination from './components/pagination/Pagination.js';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cases: [],
      loading: false,
      error: false,
      page: 1,
    };
    this.visitPage = this.visitPage.bind(this);
  }

  visitPage(pageNum) {
    if (this.state.loading) {
      return; // TODO: disable links when loading
    }

    this.setState({ loading: true, page: pageNum });
    fetch(`https://bikewise.org:443/api/v2/incidents?page=${pageNum}&per_page=10&incident_type=theft&proximity=Berlin%2C%20DE&proximity_square=100`)
      .then((results) => results.json())
      .then((data) => {
        this.setState({ cases: data.incidents, loading: false })
      })
      .catch((e) => {
        this.setState({ error: true, loading: false })
      })
    ;
  };

  componentDidMount() {
    this.visitPage(1);
  }

  render() {
    return (
      <section className="container">
        <Header />
        <Filters />
        <Cases cases={this.state.cases} loading={this.state.loading}/>
        <Pagination currPage={this.state.page} numPages={5} visitPage={this.visitPage} />
      </section>
    )
  };
};
