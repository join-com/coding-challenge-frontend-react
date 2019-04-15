import React, { Component } from 'react'
import { Pagination } from 'antd'
import { getIncidents } from '../../api'
import 'antd/dist/antd.css'

class Home extends Component {
  state = {
    incidents: [],
    isLoading: true,
    error: '',
    query: '',
    currentPage: 1
  }

  componentDidMount () {
    getIncidents()
      .then(response => response.json())
      .then(data => this.setState({ incidents: data.incidents, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }))
  }

  handleChange = event => {
    this.setState({ query: event.target.value })
  }

  render () {
    const { isLoading, incidents } = this.state
    return (
      <div>
        <div>
          <input onChange={this.handleChange} type="text" placeholder="Search case descriptions" />
          <button>Find cases</button>
        </div>
        <div>
          Found cases: {incidents.length}
        </div>
        {isLoading
          ? <p>Loading...</p>
          : <div>Done</div>
        }
        <div>
          <Pagination total={incidents.length} />
        </div>
      </div>
    )
  }
}

export default Home
