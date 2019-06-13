import * as React from 'react'
import * as RR from 'react-redux'

import { Content, ErrorState, LoadingState } from '../../common'
import { BikesList, Filters, ListPagination } from '../containers'
import { useActions } from '../../../hooks'
import { selectors } from '../../../redux'

export const ListPage: React.FC = () => {
  const actions = useActions()
  const request = (RR as any).useSelector(selectors.listRequest)
  const error = request !== null ? request.error : null
  const isLoading = request !== null ? request.isLoading : false
  React.useEffect(() => {
    actions.listRequest.start()
  }, [])
  function renderContent() {
    return (
      <>
        <BikesList />
        <ListPagination />
      </>
    )
  }
  return (
    <Content>
      <Filters />
      {isLoading ? (
        <LoadingState />
      ) : error === null ? (
        renderContent()
      ) : (
        <ErrorState retry={actions.listRequest.start} />
      )}
    </Content>
  )
}
