import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Filter from './filter'
import List from './list'
import Pagination from './pagination'
import ErrorBoundary from './error'

import HeaderComponent from '../components/header'
import CounterComponent from '../components/counter'

import { fetchIncidents } from '../actions/root'
import Footer from '../components/footer'

const mapStateToProps = state => {
  return {
    banner: state.root.banner,
    isLoading: state.root.isLoading,
    hasError: state.root.hasError,
    totalRecords: state.root.totalRecords
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIncidents: () => {
      dispatch(fetchIncidents())
    }
  }
}

class Root extends Component {
  componentDidMount() {
    this.props.fetchIncidents()
  }
  render() {
    const { banner, isLoading, hasError, totalRecords } = this.props
    return (
      <React.Fragment>
        <HeaderComponent banner={banner} />
        <hr />
        <Filter />
        <CounterComponent totalRecords={totalRecords} isLoading={isLoading} />
        <ErrorBoundary hasError={hasError}>
          <List isLoading={isLoading} key={totalRecords} />
        </ErrorBoundary>
        <hr />
        <Pagination />
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Root)
)
