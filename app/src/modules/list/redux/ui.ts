import { PackData, updateState } from 'redux-packed'
import { PackDataEpic } from 'redux-packed-observable-middleware'
import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'
import * as lo from 'lodash'
import { Action } from 'redux'

import { createPack } from '../../../utils'

export type Matching = Pick<Store, 'page' | 'filter'> & {
  keys: number[]
}

export type Filter = {
  search: string
  from: number | null
  to: number | null
}
export type Store = {
  page: number
  filter: Filter
  matching: Matching[]
}

export type FlatActions = {
  searchTextChange: (text: string) => any
  pageChange: (page: number) => any
  addMatching: (matching: Matching) => any
  search: (filter: Partial<Filter>) => Action
}

export type Selectors = {
  currentMatching: (state: any) => Matching | {}
}

export type Pack = [PackData<Store, Selectors, FlatActions, PackDataEpic>]

export const pack = createPack<Pack>([
  {
    initial: {
      page: 1,
      filter: {
        search: '',
        from: null,
        to: null,
      },
      matching: [],
    },
    actions: {
      SEARCH: undefined,
      PAGE_CHANGE: undefined,
      ADD_MATCHING: undefined,
    },
    selectors: ({ matching, page: pageSelector, filter: filterSelector }) => ({
      currentMatching: (state) => {
        const currentPage = pageSelector(state)
        const currentFilter = filterSelector(state)
        return (
          matching(state).find(
            ({ page, filter }) => page === currentPage && lo.isEqual(currentFilter, filter),
          ) || {}
        )
      },
    }),
    reducerCreator: (
      { pageChange, searchTextChange, addMatching, search },
      { filter, page, matching },
    ) => ({
      [search.toString()]: updateState(filter, (value, action) => ({
        ...value,
        ...action.payload,
      })),
      [pageChange.toString()]: updateState(page, (_, action) => action.payload),
      [addMatching.toString()]: updateState(matching, (value, { payload }) => [...value, payload]),
    }),
    epics: (allActions: any, allSelectors: any) => (action$, state$) =>
      Rx.merge(
        action$.ofType(allActions.search).pipe(
          RxOps.withLatestFrom(state$),
          RxOps.distinct(([_, state]) => JSON.stringify(allSelectors.filter(state))),
          RxOps.mapTo(allActions.listRequest.start()),
        ),
        action$.ofType(allActions.pageChange).pipe(
          RxOps.withLatestFrom(state$),
          RxOps.filter(([action, state]) => {
            const matching = allSelectors.matching(state) as Matching[]
            const currentFilter = allSelectors.filter(state)
            return !matching.find(
              ({ page, filter }) => lo.isEqual(filter, currentFilter) && page === action.payload,
            )
          }),
          RxOps.mapTo(allActions.listRequest.start()),
        ),
      ),
  },
])
