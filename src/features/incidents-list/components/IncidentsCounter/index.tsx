import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/store/state'
import { selectIncidentsCount } from '@/features/incidents-list/selectors'
import { CounterContainer } from './styled'

interface Props {
  count?: number | boolean
}

export const CounterComponent = ({ count }: Props) => (
  <CounterContainer>
    <span>{count ? `total: ${count}` : 'Loading incidents data...'}</span>
  </CounterContainer>
)

export const IncidentsCounter = connect((state: AppState) => ({
  count: selectIncidentsCount(state),
}))(CounterComponent)
