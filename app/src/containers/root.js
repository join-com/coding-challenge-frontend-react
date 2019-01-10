import React, { Component } from 'react'
import { connect } from 'react-redux'

import Listing from '../components/listing'

const mapStateToProps = state => {
  return { banner: state.root.banner }
}

const mapDispatchToProps = dispatch => {
  return {}
}

class Root extends Component {
  render() {
    const { banner } = this.props
    return <Listing banner={banner} />
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
