import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filter from './filter'
import List from './list'
import Pagination from './pagination'
import ErrorBoundary from './error'

import Listing from '../components/listing'
import Counter from '../components/counter'

const mapStateToProps = state => {
  return {
    banner: state.root.banner,
    isLoading: state.root.isLoading,
    hasError: state.root.hasError
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

class Root extends Component {
  render() {
    console.log(this.props)
    const { banner, isLoading, hasError } = this.props
    return (
      <React.Fragment>
        <Listing banner={banner} />
        <hr />
        <Filter />
        <hr />
        <Counter total={821} />
        <hr />
        <ErrorBoundary hasError={hasError}>
          <List isLoading={isLoading} />
        </ErrorBoundary>
        <hr />
        <Pagination />
      </React.Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
