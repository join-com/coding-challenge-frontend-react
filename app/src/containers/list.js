import React, { Component } from 'react'
import { connect } from 'react-redux'

import ListRecord from '../components/list-record'
import Loading from '../components/loading'

const mapStateToProps = state => {
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&')
  return {
    incidents: state.root.incidents,
    totalRecords: state.root.totalRecords
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
    const { totalRecords, incidents} = this.props
    if (!totalRecords || totalRecords === 0) {
      return <NoResult />
    } else {
      return (
        <div className="container">
          <div className="list-group">
            { incidents.map((incident) => <ListRecord incident={incident} key={incident.id} />)}
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
