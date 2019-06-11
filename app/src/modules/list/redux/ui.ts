import { PackData, updateState } from 'redux-packed'
import { PackDataEpic } from 'redux-packed-observable-middleware'

import { createPack } from '../../../utils'

export type Store = {
  pages: number
  filter: {
    search: string
    from: string
    to: string
  }
  matching: any[]
}

export type FlatActions = {
  searchTextChange: () => any
}

export type Pack = [PackData<Store, {}, FlatActions, PackDataEpic>]

export const pack = createPack<Pack>([
  {
    initial: {
      pages: 0,
      filter: {
        search: '',
        from: '',
        to: '',
      },
      matching: [{}],
    },
    actions: {
      SEARCH_TEXT_CHANGE: undefined,
    },
    reducerCreator: ({ searchTextChange }, { filter }) => ({
      [searchTextChange.toString()]: updateState(filter, (value, action) => ({
        ...value,
        search: action.payload,
      })),
    }),
  },
])
