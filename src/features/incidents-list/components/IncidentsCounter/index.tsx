import React from 'react'
import { connect } from 'react-redux'
import { AppState } from '@/store/state'
import {
  selectIncidentsCount,
  getIncidentsLoadingStatus,
} from '@/features/incidents-list/selectors'
import { StyledCounter } from './styled'

interface Props {
  count?: number | boolean
  isLoading: boolean
}

export const CounterComponent = ({ count, isLoading }: Props) => (
  <StyledCounter>
    {isLoading && 'Loading incidents data...'}
    {count ? `total: ${count}` : ''}
  </StyledCounter>
)

export const IncidentsCounter = connect((state: AppState) => ({
  count: selectIncidentsCount(state),
  isLoading: getIncidentsLoadingStatus(state),
}))(CounterComponent)
