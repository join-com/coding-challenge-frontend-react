import React, { Component } from 'react'
import { connect } from 'react-redux'

import Listing from '../components/listing/index.jsx'
import Filter from './filter'
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
      </React.Fragment>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
