import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import Header from '../components/header'
import Footer from '../components/footer'

import MapContainer from './map'

import { fetchIncidentByID } from '../actions/root'

import { CHANGE_PAGE } from '../constants'

import HCILoader from '../components/loading'
import IncidentDetailsComponent from '../components/incident-details'
import Container from '../components/shared/container'
import Button from '../components/shared/button'

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
        <Container>
          <Link to={'/'} onClick={this.props.pageChange}>
            <Button>Back to records</Button>
          </Link>
          <ShowLoader incident={incident} isLoading={isLoading} pageChange={() => {}} MapContainer={MapContainer}/>
        </Container>
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
