import { createSelector } from 'reselect'
import { storeKey } from './ducks'
import { AppState } from '@/store/state'

const byTimeOccured = (a: Incident, b: Incident) =>
  b.occurred_at - a.occurred_at

const mapToPages = (incidents: NormalizedIncidents) => {
  const pages = Object.values(incidents).sort(byTimeOccured)
  const pagesCount = Math.ceil(pages.length / 10)
  const incidentsByPage = {}
  for (let page = 1; page <= pagesCount; page++) {
    // @ts-ignore
    incidentsByPage[page] = pages.splice(0, 10)
  }
  console.log('rest incidents', pages)
  return {
    pages: incidentsByPage,
    pageCount: Object.keys(incidentsByPage).length,
  }
}

export const getIncidents = (state: AppState) => state[storeKey].incidents

export const getIncidentById = (state: AppState, id: number) =>
  state[storeKey].incidents[id]

export const getSelectedPage = (state: AppState) => state[storeKey].selectedPage

export const getIncidentsLoadingStatus = (state: AppState) =>
  state[storeKey].isLoading

export const getFirstPageLoadingStatus = (state: AppState) =>
  state[storeKey].firstPageLoading

export const selectIncidentsCount = createSelector(
  [getIncidents, getIncidentsLoadingStatus],
  (incidents, isLoading) => !isLoading && Object.values(incidents).length,
)

export const selectPagingData = createSelector(
  [getIncidents],
  mapToPages,
)
