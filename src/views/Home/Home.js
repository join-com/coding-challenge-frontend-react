import React, { Component } from 'react'
import { Pagination } from 'antd'
import SearchForm from '../../components/SearchForm'
import TotalFound from '../../components/TotalFound'
import BikeList from '../../components/BikeList'
import { getIncidents } from '../../api'
import 'antd/dist/antd.css'

class Home extends Component {
  state = {
    incidents: [],
    isLoading: true,
    error: '',
    query: '',
    startDate: '',
    endDate: '',
    currentPage: 1,
    itemsPerPage: 10
  }

  componentDidMount () {
    getIncidents()
      .then(response => response.json())
      .then(data => this.setState({ incidents: data.incidents, isLoading: false }))
      .catch(error => this.setState({ error: error.message, isLoading: false }))
  }

  handleQuery = event => {
    this.setState({query: event.target.value})
  }

  handleDate = (date, dateStrings) => {
    this.setState({
      startDate: dateStrings[0],
      endDate: dateStrings[1]
    })
  }

  handlePagination = page => {
    this.setState({ currentPage: page })
  }

  render () {
    const { isLoading, incidents, itemsPerPage, currentPage } = this.state
    const endIndex = itemsPerPage * currentPage
    const startIndex = endIndex - itemsPerPage

    return (
      <div>
        <div>
          <SearchForm
            handleQuery={this.handleQuery}
            handleDate={this.handleDate}
          />
        </div>
        <div>
          <TotalFound amount={incidents.length} />
        </div>
        {isLoading
          ? <p>Loading...</p>
          : <BikeList list={incidents.slice(startIndex, endIndex)} />
        }
        <div>
          <Pagination onChange={this.handlePagination} total={incidents.length} />
        </div>
      </div>
    )
  }
}

export default Home
