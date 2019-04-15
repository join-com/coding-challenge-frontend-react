import React, { Component } from 'react'
import { getIncidents } from '../../api'

class Home extends Component {
  state = {
    incidents: [],
    isLoading: true,
    error: ''
  }

  componentDidMount () {
    getIncidents()
      .then(response => response.json())
      .then(data => this.setState({ incidents: data.incidents, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }))
  }

  render () {
    const { isLoading } = this.state
    return (
      <div>
        {isLoading
          ? <p>Loading...</p>
          : <div>Done</div>
        }
      </div>
    )
  }
}

export default Home
