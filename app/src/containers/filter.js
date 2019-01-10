import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilterComponent from '../components/filter/index'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

class Root extends Component {
  render() {
    return (
      <div className="container">
        <FilterComponent />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
