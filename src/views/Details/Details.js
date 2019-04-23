import React, { Component } from 'react'
import Header from '../../components/Header'
import BikeDescription from '../../components/BikeDescription'
import Error from '../../components/Error'
import Loader from '../../components/Loader'
import { fetchIncident, fetchLocations } from '../../api'

import { Container, HeaderContainer } from './styled'

class Details extends Component {
  state = {
    isLoading: true,
    incident: {},
    coordinates: null,
    error: '',
    locationError: '',
    locationIsLoading: true
  }

  componentDidMount () {
    //Fetching incident by id
    fetchIncident(this.props.match.params.id)
      .then(response => response.json())
      .then(({ incident }) => {
        this.setState({incident, isLoading: false})

        //Now when we have all required data, we can fetch coordinates
        fetchLocations(incident.occurred_at, incident.title)
          .then(response => response.json())
          .then(json => {
            if (!json.features.length) {
              throw({message: 'Missing geo data'})
            } else {
              return json.features[0].geometry.coordinates
            }
          })
          .then(coordinates => {
            this.setState({coordinates, locationIsLoading: false})
          })
          .catch(error => this.setState({locationError: error.message, locationIsLoading: false}))
      })
      .catch(error => this.setState({error, isLoading: false}))
  }

  renderResult = () => {
    const { error, isLoading } = this.state

    if (error) {
      return <Error message={error} />
    }

    if (isLoading) {
      return <Loader />
    }

    return <BikeDescription {...this.state} />
  }

  render () {
    return (
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        {this.renderResult()}
      </Container>
    )
  }
}

export default Details
