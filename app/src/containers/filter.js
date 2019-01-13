import React, { Component } from 'react'
import { connect } from 'react-redux'

import FilterComponent from '../components/filter/index'
import { filterIncidents, clearFilter } from '../actions/filter'

const mapStateToProps = state => ({
  incidents: state.root.incidents,
  filterIncidents: state.filter.filterIncidents,
  filterApplied: state.filter.filterApplied
})

const mapDispatchToProps = dispatch => ({
  filterIncidents: (incidents, filter) =>
    dispatch(filterIncidents({ incidents, filter })),
  removeFilter: incidents => dispatch(clearFilter(incidents))
})

class Filter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      toDate: null,
      fromDate: null,
      search: null
    }
    this.timeout = null
  }

  applyFilter = () => {
    const incidents = this.props.incidents
    const filter = this.state

    clearTimeout(this.timeout)
    this.timeout = setTimeout(() => {
      if (
        (filter.search === null || filter.search === '') &&
        this.props.filterApplied && filter.toDate === null && filter.fromDate === null
      ) {
        this.props.removeFilter(incidents)
      } else {
        this.props.filterIncidents(incidents, filter)
      }
    }, 250)
  }
  textChange = e => {
    this.setState({ search: e.target.value }, this.applyFilter)
  }
  dateChangeTo = e => {
    this.setState({ toDate: e }, this.applyFilter)
  }
  dateChangeFrom = e => {
    this.setState({ fromDate: e }, this.applyFilter)
  }

  render() {
    return (
      <div className="container">
        <FilterComponent
          textChange={this.textChange}
          toDate={this.state.toDate}
          fromDate={this.state.fromDate}
          dateChangeFrom={this.dateChangeFrom}
          dateChangeTo={this.dateChangeTo}
        />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filter)
