import React, { Component } from 'react'
import { connect } from 'react-redux'

import PaginationComponent from '../components/pagination'

import { CHANGE_PAGE_NUMBER } from '../constants'
import Container from '../components/shared/container'

const mapStateToProps = state => {
  return {
    totalRecords: state.root.totalRecords,
    currentPage: state.root.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    changeCurrentPage: pageNo => {
      dispatch({ type: CHANGE_PAGE_NUMBER, payload: pageNo })
    }
  }
}

class Pagination extends Component {
  changeCurrentPage = pageNo => {
    this.props.changeCurrentPage(pageNo)
  }

  render() {
    const { totalRecords, currentPage } = this.props
    return (
      <Container splitLines={false}>
        <PaginationComponent
          currentPage={currentPage}
          totalRecords={totalRecords}
          changeCurrentPage={this.changeCurrentPage}
        />
      </Container>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination)
