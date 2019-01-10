import React, { Component } from 'react'
import { connect } from 'react-redux'

import Filter from './filter'
import List from './list'
import Pagination from './pagination';


import Listing from '../components/listing'
import Counter from '../components/counter'

const mapStateToProps = state => {
  return { banner: state.root.banner }
}

const mapDispatchToProps = dispatch => {
  return {}
}

class Root extends Component {
  render() {
    const { banner } = this.props
    return (
      <React.Fragment>
        <Listing banner={banner} />
        <hr />
        <Filter />
        <hr />
        <Counter total={821} />
        <hr />
        <List />
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
