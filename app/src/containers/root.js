import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filter from './filter'
import List from './list'
import Pagination from './pagination'
import ErrorBoundary from './error'

import Listing from '../components/listing'
import Counter from '../components/counter'

import { REQUEST } from '../constants'

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
      dispatch({ type: REQUEST })
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
        <Listing banner={banner} />
        <hr />
        <Filter />
        <hr />
        <Counter totalRecords={totalRecords} />
        <hr />
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
