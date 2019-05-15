import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadIncidents, selectPage } from '@/features/incidents-list/ducks'
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

interface Props {
  requestIncidents: () => void
  selectPage: ({ page }: { page: number }) => void
  pagingData: PagingData
  isLoading: boolean
  firstPageLoading: boolean
  pages: number[]
  currentPage: number
}

const IncidentsListView = ({
  requestIncidents,
  pagingData: { pages },
  selectPage,
  currentPage,
  isLoading,
}: Props) => {
  useEffect(() => {
    requestIncidents()
  }, [])
  const displayedIncidents = pages[currentPage] || []
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
  // @ts-ignore
)(IncidentsListView)
