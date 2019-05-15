import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadIncidents, selectPage } from '@/features/incidents-list/ducks'
import { ListContainer } from './styled'
import {
  getIncidentsLoadingStatus,
  selectPagingData,
  getSelectedPage,
} from '@/features/incidents-list/selectors'
import { AppState } from '@/store/state'
import { Pagination } from '@/ui/Pagination'
import { ListItem } from '@/features/incidents-list/components/ListItem'
import { SearchForm } from '@/features/incidents-list/components/SearchForm'

interface Props {
  requestIncidents: () => void
  selectPage: ({ page }: { page: number }) => void
  pagingData: PagingData
  isLoading: boolean
  pages: number[]
  currentPage: number
}

const IncidentsListView = ({
  requestIncidents,
  pagingData: { pages, pageCount },
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
    pagingData: selectPagingData(state),
    currentPage: getSelectedPage(state),
  }),
  {
    requestIncidents: loadIncidents.request,
    selectPage,
  },
  // @ts-ignore
)(IncidentsListView)
