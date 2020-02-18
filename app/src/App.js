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
      pageNum: 1,
      searchText: '',
      fromDate: null,
      toDate: null,
    };
    this.updateSearchText = this.updateSearchText.bind(this);
    this.updateFromDate = this.updateFromDate.bind(this);
    this.updateToDate = this.updateToDate.bind(this);
    this.setCases = this.setCases.bind(this);
  };
  updateSearchText(e) {
    this.updateState({
      searchText: e.target.value,
    });
  };
  updateFromDate(e) {
    this.updateState({
      fromDate: e.target.value,
    });
  };
  updateToDate(e) {
    this.updateState({
      toDate: e.target.value,
    });
  };
  updateState(o) {
    let newState = {};

    if (o.loading === true || o.loading === false) { newState.loading = o.loading; }
    if (o.pageNum) { newState.pageNum = o.pageNum; }
    if (o.searchText || o.searchText === '') { newState.searchText = o.searchText; }
    if (o.fromDate) { newState.fromDate = o.fromDate; }
    if (o.toDate) { newState.toDate = o.toDate; }

    this.setState(newState);
  };
  getUrlForSettingCases() {
    let url = `https://bikewise.org:443/api/v2/incidents?page=${this.state.pageNum}&per_page=10&incident_type=theft&proximity=Berlin%2C%20DE&proximity_square=100`;

    if (this.state.searchText) { url += `&query=${this.state.searchText}`; }
    // if (this.state.fromDate) { url += `&occurred_after=${this.state.fromDate.getTime()}`; }
    // if (this.state.toDate) { url += `&occurred_before=${this.state.toDate.getTime()}`; }

    return url;
  };
  setCases(o) {
    if (this.state.loading) {
      return; // TODO: disable links when loading
    }

    let url;

    o.loading = true;
    this.updateState(o);
    url = this.getUrlForSettingCases();
    fetch(url)
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
    this.setCases({ pageNum: 1 });
  };
  render() {
    return (
      <section className="container">
        <Header />
        <Filters
          searchText={this.state.searchText}
          fromDate={this.state.fromDate}
          toDate={this.state.toDate}
          updateSearchText={this.updateSearchText}
          updateFromDate={this.updateFromDate}
          updateToDate={this.updateToDate}
          setCases={this.setCases}
        />
        <Cases
          cases={this.state.cases}
          loading={this.state.loading}
        />
        <Pagination
          currPage={this.state.pageNum}
          numPages={5}
          setCases={this.setCases}
        />
      </section>
    )
  };
};
