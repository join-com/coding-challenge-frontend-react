import * as React from 'react'
import * as RR from 'react-redux'

import { Pagination } from '../../common'
import { selectors } from '../../../redux'
import { useActions } from '../../../hooks'

export const ListPagination: React.FC = () => {
  const actions = useActions()
  const page = (RR as any).useSelector(selectors.page)
  return <Pagination activePage={page} onPageChange={actions.pageChange} pages={7} />
}
