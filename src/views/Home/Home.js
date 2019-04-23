import React, { Fragment, Component } from 'react'
import { Row, Col, Pagination, Spin } from 'antd'
import Header from '../../components/Header'
import SearchForm from '../../components/SearchForm'
import TotalFound from '../../components/TotalFound'
import BikeList from '../../components/BikeList'
import Error from '../../components/Error'
import Loader from '../../components/Loader'

import { getIncidents } from '../../api'
import 'antd/dist/antd.css'

import { Container, HeaderContainer, TotalContainer, PaginationContainer } from './styled'

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
      .then(response => {
        if (response.status === 404) {
          this.setState({error: 'Endpoint not found'})
        }
        return response.json()
      })
      .then(data => this.setState({incidents: data.incidents, isLoading: false}))
      .catch(error => this.setState({error: error.message, isLoading: false }))
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

  handleSubmit = event => {
    event.preventDefault()
    const { query, startDate, endDate } = this.state
    this.setState({isLoading: true})

    getIncidents(query, startDate, endDate)
      .then(response => response.json())
      .then(data => this.setState({incidents: data.incidents, isLoading: false}))
      .catch(error => this.setState({error: error.message, isLoading: false }))
  }

  handlePagination = page => {
    this.setState({ currentPage: page })
  }

  renderResult = () => {
    const { isLoading, incidents, itemsPerPage, currentPage, error } = this.state
    const endIndex = itemsPerPage * currentPage
    const startIndex = endIndex - itemsPerPage

    if (error) {
      return <Error message={error} />
    }

    if (isLoading) {
      return <Loader />
    }

    if (incidents.length === 0) {
      return <h1>No results</h1>
    }

    return (
      <Fragment>
        <TotalContainer>
          <TotalFound amount={incidents && incidents.length} />
        </TotalContainer>
        <BikeList list={incidents && incidents.slice(startIndex, endIndex)} />
        <PaginationContainer>
          <Pagination onChange={this.handlePagination} total={incidents && incidents.length} />
        </PaginationContainer>
      </Fragment>
    )
  }

  render () {
    return (
      <Container>
        <HeaderContainer>
          <Header />
        </HeaderContainer>
        <SearchForm
          handleQuery={this.handleQuery}
          handleDate={this.handleDate}
          handleSubmit={this.handleSubmit}
        />
        {this.renderResult()}
      </Container>
    )
  }
}

export default Home
