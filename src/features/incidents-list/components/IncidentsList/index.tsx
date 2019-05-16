import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import {
  loadIncidents,
  selectPage,
  LoadIncidentsPayload,
} from '@/features/incidents-list/ducks'
import { ListContainer } from './styled'
import {
  getIncidentsLoadingStatus,
  selectPagingData,
  getSelectedPage,
  getFirstPageLoadingStatus,
} from '@/features/incidents-list/selectors'
import { AppState } from '@/store/state'
import { Pagination } from '@/ui/Pagination'
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
}

type Props = OwnProps & RouterProps

const IncidentsListView = ({
  requestIncidents,
  pagingData: { pages },
  selectPage,
  currentPage,
  isLoading,
  location: { search },
}: Props) => {
  useEffect(() => {
    const queryParams = queryString.parse(search)
    console.log('hook')
    console.log(queryParams)
    requestIncidents(queryParams)
  }, [])
  const displayedIncidents = (currentPage && pages[currentPage]) || []
  return (
    <ListContainer>
      <SearchForm />
      <IncidentsCounter />
      {displayedIncidents.length > 3 && (
        <Pagination
          selectedIndex={currentPage && currentPage - 1}
          onChange={(_, page: number) => {
            selectPage({ page })
          }}
          pages={Object.keys(pages)}
        />
      )}
      {displayedIncidents.map(incident => (
        <ListItem key={incident.id} {...incident} />
      ))}
      <Pagination
        selectedIndex={currentPage && currentPage - 1}
        onChange={(_, page: number) => {
          selectPage({ page })
        }}
        pages={Object.keys(pages)}
      />
    </ListContainer>
  )
}

export const IncidentsList = connect(
  (state: AppState) => ({
    isLoading: getIncidentsLoadingStatus(state),
    firstPageLoading: getFirstPageLoadingStatus(state),
    pagingData: selectPagingData(state),
    currentPage: getSelectedPage(state),
  }),
  {
    requestIncidents: loadIncidents.request,
    selectPage,
  },
)(IncidentsListView)
