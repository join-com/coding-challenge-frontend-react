import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'
import { FPG, PackData, updateState } from 'redux-packed'
import { PackDataEpic } from 'redux-packed-observable-middleware'
import { Action } from 'redux'

import { createPack } from '../../../utils'
import { incident, Incident } from '../../../api'
import { pack as common } from '../../common'
import { finishSetRequest, RequestState, startSetRequest } from '../../../instructions'

export type Store = {
  incidentRequests: RequestState[]
}

export type Actions = {
  getIncident: {
    start: (key: string) => Action & { meta: { key: number } }
    finish: (response: Incident, key: string) => Action & { meta: { key: number } }
  }
}

export type Selectors = {
  incidentRequest: (state: any, key: number) => RequestState | {}
}

export type Pack = [PackData<Store, Selectors, Actions, PackDataEpic>]

export const pack = createPack<Pack>([
  {
    initial: {
      incidentRequests: [],
    },
    actions: {
      GET_INCIDENT: {
        START: [() => null, (key: number) => ({ key })],
        FINISH: [(p: any) => p, (_: any, meta: { key: number }) => meta],
      },
    },
    reducerCreator: ({ getIncident }, selectors) => ({
      [getIncident.start.toString()]: updateState(selectors.incidentRequests, startSetRequest),
      [getIncident.finish.toString()]: updateState(selectors.incidentRequests, finishSetRequest),
    }),
    selectors: (selectors) => ({
      incidentRequest: (state, rk) =>
        selectors.incidentRequests(state).find(({ key }) => key === rk) || {},
    }),
    epics: (allActions: Actions & FPG<typeof common>[2]) => (action$) =>
      Rx.merge(
        action$.ofType(allActions.getIncident.start).pipe(
          RxOps.groupBy(({ meta }) => meta.key, (action) => action),
          RxOps.mergeMap((group$) =>
            group$.pipe(
              RxOps.exhaustMap((action) =>
                incident(action.meta.key).pipe(
                  RxOps.catchError((error) => Rx.of(error)),
                  RxOps.mergeMap((response) =>
                    Rx.concat(
                      Rx.of(allActions.set(response)),
                      Rx.of(allActions.getIncident.finish(response, action.meta)),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ),
  },
])
