import React, { Component } from 'react'
import { fetchIncident, fetchLocations } from '../../api'

class Details extends Component {
  state = {
    incident: {},
    incidentError: '',
    coordinates: [0, 0],
    coordinatesError: ''
  }

  componentDidMount () {
    //Fetching incident by id
    fetchIncident(this.props.match.params.id)
      .then(response => response.json())
      .then(({ incident }) => {
        this.setState({incident})

        //Now when we have all required data, we can fetch coordinates
        fetchLocations(incident.occurred_at, incident.title)
          .then(response => response.json())
          .then(json => json.features[0].geometry.coordinates)
          .then(coordinates => {
            this.setState({coordinates})
          })
          .catch(error => this.setState({coordinatesError: error}))
      })
      .catch(error => this.setState({incidentError: error}))
  }

  render () {
    return (
      <div>
        Details view
      </div>
    )
  }
}

export default Details
