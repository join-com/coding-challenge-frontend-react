import React from 'react'
import { connect } from 'react-redux'

import ListingItem from '../components/listing-item'
import HCILoader from '../components/loading'
import { CHANGE_PAGE } from '../constants'
import Container from '../components/shared/container'
import { ListGroup } from '../components/shared/list'

const NoResult = props => {
  return <div className="container">No results</div>
}

const ShowList = ({ incidents, pageChange }) => {
  return (
    <Container splitLines={false}>
      <ListGroup>
        {incidents.map(incident => (
          <ListingItem incident={incident} key={incident.id} pageChange={pageChange} />
        ))}
      </ListGroup>
    </Container>
  )
}

const List = ({ currentPage, totalRecords, incidents, pageChange, filterApplied, filteredIncidents }) => {
  if (filterApplied) {
    incidents = filteredIncidents
  }
  const perPageItems = 10
  const from = (currentPage - 1) * perPageItems
  const pageRecords = incidents.slice(from, from + perPageItems)
  if (!totalRecords || totalRecords === 0) {
    return <NoResult />
  }
  return <ShowList incidents={pageRecords} pageChange={pageChange} />
}

const mapStateToProps = state => {
  return {
    incidents: state.root.incidents,
    totalRecords: state.root.totalRecords,
    currentPage: state.root.currentPage,
    filterApplied: state.filter.filterApplied,
    filteredIncidents: state.filter.filteredIncidents
  }
}

const mapDispatchToProps = dispatch => {
  return {
    pageChange: () => {
      dispatch({ type: CHANGE_PAGE })
    }
  }
}

const ListWithLoading = HCILoader(List)

const ListLoader = props => {
  return <ListWithLoading {...props} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLoader)
