import React, { Fragment, useState, useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'

import CalendarRange from './CalendarRange/CalendarRange'
import SearchCaseInput from './SearchCaseInput/SearchCaseInput'
import SearchButton from './SearchButton/SearchButton'
import Card from './Card/Card'
import Pagination from './Pagination/Pagination'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Content = styled.div`
  width: 100%;
`

const Filters = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 30px;
`

const CountResults = styled.div`
  text-align: right;
`

const resultsPerPage = 10

const defaultState = {
  currentPageIndex: 1,
  query: '',
  dateFrom: undefined,
  dateTo: undefined,
}

function convertDateToUnixTime(date) {
  return moment(date).unix()
}

export default function List() {
  const [data, setData] = useState({ incidents: [] })
  const [countResults, setCountResults] = useState(undefined)

  const state =
    (localStorage.getItem('state') &&
      JSON.parse(localStorage.getItem('state'))) ||
    defaultState
  const [currentPageIndex, setCurrentPageIndex] = useState(
    state.currentPageIndex
  )
  const [loading, setLoading] = useState(true)
  const [triggerCount, setTriggerCount] = useState(true)
  const [query, setQuery] = useState(state.query)
  const [dateFrom, setDateFrom] = useState(state.dateFrom)
  const [dateTo, setDateTo] = useState(state.dateTo)

  useEffect(() => {
    async function fetchData() {
      if (loading) {
        const baseUrl =
          'https://bikewise.org/api/v2/incidents/?incident_type=theft&proximity=Berlin'
        let urlCount = `${baseUrl}&per_page=300` // FIXME add a mechanism to count all the results by using paging recursively
        let url = `${baseUrl}&per_page=${resultsPerPage}&page=${currentPageIndex}`

        if (dateFrom !== undefined && dateTo !== undefined) {
          url += `&occurred_after=${convertDateToUnixTime(
            dateFrom
          )}&occurred_before=${convertDateToUnixTime(dateTo)}`
          urlCount += `&occurred_after=${convertDateToUnixTime(
            dateFrom
          )}&occurred_before=${convertDateToUnixTime(dateTo)}`
        }
        if (query.length > 0) {
          url += `&query=${query}`
          urlCount += `&query=${query}`
        }
        localStorage.setItem(
          'state',
          JSON.stringify({ currentPageIndex, query, dateFrom, dateTo })
        )
        const response = await window.fetch(url)
        const results = await response.json()
        setData(results)
        setLoading(false)

        if (triggerCount) {
          const responseCount = await window.fetch(urlCount) // TODO fetch in parallels
          const resultsCount = await responseCount.json()
          setCountResults(resultsCount.incidents.length)
          setTriggerCount(false)
        }
      }
    }
    fetchData()
  }, [query, dateFrom, dateTo, currentPageIndex, loading, triggerCount])

  return (
    <Wrapper>
      <Content>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <Fragment>
            <Filters>
              <SearchCaseInput
                value={query}
                onChange={event => setQuery(event.target.value)}
              />
              <CalendarRange
                from={dateFrom}
                to={dateTo}
                onDateFromChange={setDateFrom}
                onDateToChange={setDateTo}
              />
              <SearchButton
                onClick={() => {
                  setLoading(true)
                  setCurrentPageIndex(0)
                  setTriggerCount(true)
                }}
              />
            </Filters>

            {countResults === 0 ? (
              <div>No results</div>
            ) : (
              <Fragment>
                <CountResults>Total: {countResults}</CountResults>
                <div>
                  {data.incidents.map(item => (
                    <Card
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      imageUrlThumb={item.media.image_url_thumb}
                      address={item.address}
                      incidentDate={item.occurred_at}
                    />
                  ))}
                </div>
                <Pagination
                  countResults={countResults}
                  currentPageIndex={currentPageIndex}
                  resultsPerPage={resultsPerPage}
                  handleCurrentPageChange={index => {
                    setLoading(true)
                    setCurrentPageIndex(index)
                  }}
                />
              </Fragment>
            )}
          </Fragment>
        )}
      </Content>
    </Wrapper>
  )
}
