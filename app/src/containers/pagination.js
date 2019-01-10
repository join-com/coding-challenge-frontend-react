import React, { Component } from 'react'
import { connect } from 'react-redux'

import PaginationComponent from '../components/pagination'

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
        <PaginationComponent />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root)
