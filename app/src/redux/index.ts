import { pack as common } from '../modules/common'
import { pack as list } from '../modules/list'
import { combinePacks, extractPack } from '../utils'

export const { reducer, actions, selectors, epics } = extractPack(
  combinePacks({
    app: combinePacks({
      common,
      list,
    }),
  }),
) as any
