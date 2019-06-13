import { combinePacks } from '../../../utils'
import { pack as state } from './state'
import { pack as ui } from './ui'

export const pack = combinePacks({
  state,
  ui,
})
