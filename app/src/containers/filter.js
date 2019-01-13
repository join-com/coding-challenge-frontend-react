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
  filterIncidents: (incidents, filterOn) =>
    dispatch(filterIncidents({ incidents, filterOn })),
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
      if (filter.search === null || filter.search === '') {
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
    this.setState({ toDate: e.target.value }, this.applyFilter)
  }
  dateChangeFrom = e => {
    this.setState({ fromDate: e.target.value }, this.applyFilter)
  }

  render() {
    return (
      <div className="container">
        {this.props.filterApplied.toString()}
        <FilterComponent
          textChange={this.textChange}
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
