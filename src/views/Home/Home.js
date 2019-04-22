import React, { Fragment, Component } from 'react'
import { Row, Col, Pagination } from 'antd'
import Header from '../../components/Header'
import SearchForm from '../../components/SearchForm'
import TotalFound from '../../components/TotalFound'
import BikeList from '../../components/BikeList'
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

  handlePagination = page => {
    this.setState({ currentPage: page })
  }

  renderResult = () => {
    const { isLoading, incidents, itemsPerPage, currentPage, error } = this.state
    const endIndex = itemsPerPage * currentPage
    const startIndex = endIndex - itemsPerPage

    if (error) {
      return <h1>{error}</h1>
    }

    if (isLoading) {
      return <h1>Is loading...</h1>
    }

    if (incidents.length === 0) {
      return <h1>No results</h1>
    }

    return (
      <Fragment>
        <TotalContainer>
          <TotalFound amount={incidents && incidents.length} />
        </TotalContainer>
        {isLoading
          ? <p>Loading...</p>
          : <BikeList list={incidents && incidents.slice(startIndex, endIndex)} />
        }
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
        />
        {this.renderResult()}
      </Container>
    )
  }
}

export default Home
