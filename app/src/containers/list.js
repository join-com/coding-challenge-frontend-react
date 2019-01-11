import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListRecord from '../components/list-record'
import Loading from '../components/loading'

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

const NoResult = props => {
  return <div className="container">No results</div>
}
class List extends Component {
  render() {
    const { currentPage, totalRecords, incidents} = this.props
    const from = (currentPage - 1) * 10
    const page = incidents.slice(from, from + 10)
    if (!totalRecords || totalRecords === 0) {
      return <NoResult />
    } else {
      return (
        <div className="container">
          <div className="list-group">
            { page.map((incident) => <ListRecord incident={incident} key={incident.id} />)}
          </div>
        </div>
      )
    }
  }
}


const ListWithLoading = Loading(List)

const ListLoader = (props) => {
  return <ListWithLoading {...props} />
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListLoader)
