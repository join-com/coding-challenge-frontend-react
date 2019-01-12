import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'

import { fetchIncidentByID } from '../actions/root'

import HCILoader from '../components/loading'
import { CHANGE_PAGE } from '../constants'
import IncidentDetailsComponent from '../components/incident-details'

const mapStateToProps = state => {
  return {
    banner: state.root.banner,
    isLoading: state.root.isLoading,
    hasError: state.root.hasError,
    totalRecords: state.root.totalRecords,
    incident: state.root.incident
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchIncidentByID: id => {
      dispatch(fetchIncidentByID(id))
    },
    pageChange: () => {
      dispatch({ type: CHANGE_PAGE })
    }
  }
}

const ShowLoader = HCILoader(IncidentDetailsComponent)

class IncidentDetails extends Component {
  componentDidMount() {
    const incident = this.props.incident
    if (!incident || incident.id !== this.props.match.params.id) {
      this.props.fetchIncidentByID(this.props.match.params.id)
    }
  }

  render() {
    const { banner, incident, isLoading } = this.props
    return (
      <React.Fragment>
        <Header banner={banner} />
        <div className="container">
          <Link to={'/'} onClick={this.props.pageChange}>
            <button type="button" className="btn my-3 btn-primary btn-sm">
              Back to records
            </button>
          </Link>
          <ShowLoader
            incident={incident}
            isLoading={isLoading}
            pageChange={() => {}}
          />
        </div>
        <Footer />
      </React.Fragment>
    )
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(IncidentDetails)
)
