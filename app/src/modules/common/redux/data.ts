import { PackData, updateState } from 'redux-packed'
import { PackDataEpic } from 'redux-packed-observable-middleware'
import { Action } from 'redux'

import { createPack } from '../../../utils'
import { Incident } from '../../../api'
import { setMap, updateMap } from '../../../instructions'

export type Store = {
  incidents: Map<number, Incident>
}
type ModifyAction = (v: Incident | Incident[]) => Action & { payload: Incident | Incident[] }
export type Actions = {
  set: ModifyAction
  update: ModifyAction
}

export type Selectors = {
  incidentsArray: (state: any) => Incident[]
  incidentExists: (state: any, key: number) => boolean
  incident: (state: any, key: number) => Incident
}

type Pack = [PackData<Store, Selectors, Actions, PackDataEpic>]

export const pack = createPack<Pack>([
  {
    initial: {
      incidents: new Map(),
    },
    actions: {
      SET: undefined,
      UPDATE: undefined,
    },
    selectors: (selectors) => ({
      incidentsArray: (state) => Array.from(selectors.incidents(state).values()),
      incidentExists: (state, key) => selectors.incidents(state).has(key),
      incident: (state, key) => selectors.incidents(state).get(key)!,
    }),
    reducerCreator: (actions, selectors) => ({
      [actions.set.toString()]: updateState(selectors.incidents, setMap),
      [actions.update.toString()]: updateState(selectors.incidents, updateMap),
    }),
  },
])
