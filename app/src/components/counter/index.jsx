import React from 'react'
import Container from '../shared/container'

const CounterComponent = ({ totalRecords }) => (
  <Container>
    <h5 className="text-right">
      Total reported incidents
      <span className="badge badge-primary mx-2">{totalRecords}</span>
    </h5>
  </Container>
)

const Counter = ({ totalRecords, isLoading }) => {
  if (isLoading) return null
  return <CounterComponent totalRecords={totalRecords} />
}

export default Counter
