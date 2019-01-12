import React from 'react'
import { connect } from 'react-redux'

import ListingItem from '../components/listing-item'
import HCILoader from '../components/loading'

const NoResult = props => {
  return <div className="container">No results</div>
}

const ShowList = ({ incidents }) => {
  return (
    <div className="container">
      <div className="list-group">
        {incidents.map(incident => (
          <ListingItem incident={incident} key={incident.id} />
        ))}
      </div>
    </div>
  )
}

const List = ({ currentPage, totalRecords, incidents }) => {
  const perPageItems = 10
  const from = (currentPage - 1) * perPageItems
  const pageRecords = incidents.slice(from, from + perPageItems)
  if (!totalRecords || totalRecords === 0) {
    return <NoResult />
  }
  return <ShowList incidents={pageRecords} />
}

const mapStateToProps = state => {
  return {
    incidents: state.root.incidents,
    totalRecords: state.root.totalRecords,
    currentPage: state.root.currentPage
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const ListWithLoading = HCILoader(List)

const ListLoader = props => {
  return <ListWithLoading {...props} />
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLoader)
