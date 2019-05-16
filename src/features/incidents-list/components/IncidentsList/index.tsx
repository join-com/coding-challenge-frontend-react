import React from 'react'
import { connect } from 'react-redux'
import { useDidMount } from 'react-hooks-lib'
import queryString from 'query-string'
import {
  loadIncidents,
  selectPage,
  LoadIncidentsPayload,
} from '@/features/incidents-list/ducks'
import { ListContainer, CounterContainer } from './styled'
import {
  getIncidentsLoadingStatus,
  selectPagingData,
  getSelectedPage,
  getFirstPageLoadingStatus,
  getRequestError,
} from '@/features/incidents-list/selectors'
import { AppState } from '@/store/state'
import { Pagination } from '@/ui/Pagination'
import { AppError } from '@/ui/AppError'
import { ListItem } from '@/features/incidents-list/components/ListItem'
import { SearchForm } from '@/features/incidents-list/components/SearchForm'
import { IncidentsCounter } from '@/features/incidents-list/components/IncidentsCounter'

interface RouterProps {
  location: {
    search: string
  }
}

interface OwnProps {
  requestIncidents: (payload: LoadIncidentsPayload) => void
  selectPage: ({ page }: { page: number }) => void
  pagingData: PagingData
  isLoading: boolean
  firstPageLoading: boolean
  pages: number[]
  currentPage: number | undefined
  requestError: null | string
}

type Props = OwnProps & RouterProps

const IncidentsListView = ({
  requestIncidents,
  pagingData: { pages },
  selectPage,
  currentPage,
  requestError,
  isLoading,
  location: { search },
}: Props) => {
  useDidMount(() => {
    const queryParams = queryString.parse(search)
    requestIncidents(queryParams)
  })
  const displayedIncidents = (currentPage && pages[currentPage]) || []
  const noResults = currentPage && displayedIncidents.length === 0
  const manyResults = displayedIncidents.length > 3
  return (
    <ListContainer>
      <SearchForm />
      <CounterContainer>
        {manyResults && (
          <Pagination
            selectedIndex={currentPage && currentPage - 1}
            onChange={(_, page: number) => {
              selectPage({ page })
              window.scrollTo(0, 0)
            }}
            pages={Object.keys(pages)}
          />
        )}
        <IncidentsCounter />
      </CounterContainer>
      {requestError && <AppError message={requestError} />}
      {noResults && 'No results'}
      {displayedIncidents.map(incident => (
        <ListItem key={incident.id} {...incident} />
      ))}
      {!noResults && displayedIncidents.length > 0 && (
        <Pagination
          selectedIndex={currentPage && currentPage - 1}
          onChange={(_, page: number) => {
            selectPage({ page })
            window.scrollTo(0, 0)
          }}
          pages={Object.keys(pages)}
        />
      )}
    </ListContainer>
  )
}

export const IncidentsList = connect(
  (state: AppState) => ({
    isLoading: getIncidentsLoadingStatus(state),
    firstPageLoading: getFirstPageLoadingStatus(state),
    pagingData: selectPagingData(state),
    currentPage: getSelectedPage(state),
    requestError: getRequestError(state),
  }),
  {
    requestIncidents: loadIncidents.request,
    selectPage,
  },
)(IncidentsListView)
