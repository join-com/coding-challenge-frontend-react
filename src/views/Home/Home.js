import React, { Component } from 'react'
import { Pagination } from 'antd'
import SearchForm from '../../components/SearchForm'
import TotalFound from '../../components/TotalFound'
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

  render () {
    const { isLoading, incidents } = this.state
    return (
      <div>
        <div>
          <SearchForm />
        </div>
        <div>
          <TotalFound amount={incidents.length} />
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
