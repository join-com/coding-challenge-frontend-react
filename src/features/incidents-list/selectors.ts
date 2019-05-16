import { createSelector } from 'reselect'
import { storeKey } from './ducks'
import { mapToPages } from './utils'
import { AppState } from '@/store/state'

export const getIncidents = (state: AppState) => state[storeKey].incidents

export const getIncidentById = (state: AppState, id: number) =>
  state[storeKey].incidents[id]

export const getSelectedPage = (state: AppState) => state[storeKey].selectedPage

export const getIncidentsLoadingStatus = (state: AppState) =>
  state[storeKey].isLoading

export const getFirstPageLoadingStatus = (state: AppState) =>
  state[storeKey].firstPageLoading

export const getRequestError = (state: AppState) => state[storeKey].requestError

export const selectIncidentsCount = createSelector(
  [getIncidents, getIncidentsLoadingStatus],
  (incidents, isLoading) => !isLoading && Object.values(incidents).length,
)

export const selectPagingData = createSelector(
  [getIncidents],
  mapToPages,
)
