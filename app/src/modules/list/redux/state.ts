import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'
import { FPG, PackData, updateState } from 'redux-packed'
import { Action } from 'redux'
import { PackDataEpic } from 'redux-packed-observable-middleware'
import * as lo from 'lodash'

import { createPack } from '../../../utils'
import { Incident, incidentsList } from '../../../api'
import { finishRequest, startRequest } from '../../../instructions'
import { pack as common } from '../../common/redux'
import { Filter, pack as ui } from './ui'

export type Store = {
  listRequest: null | object
}

export type Actions = {
  listRequest: {
    start: () => Action
    finish: (incidents: Incident[]) => Action
  }
}

type Pack = [PackData<Store, {}, Actions, PackDataEpic>]

export const pack = createPack<Pack>([
  {
    initial: {
      listRequest: null,
    },
    actions: {
      LIST_REQUEST: {
        START: undefined,
        FINISH: undefined,
      },
    },
    reducerCreator: ({ listRequest }, selectors) => ({
      [listRequest.start.toString()]: updateState(selectors.listRequest, startRequest),
      [listRequest.finish.toString()]: updateState(selectors.listRequest, finishRequest),
    }),
    epics: (allActions: Actions & FPG<typeof common>[2] & FPG<typeof ui>[2], allSelectors: any) => (
      action$,
      state$,
    ) => {
      return Rx.merge(
        action$.ofType(allActions.listRequest.start).pipe(
          RxOps.withLatestFrom(state$),
          RxOps.exhaustMap(([_, state]) => {
            const filter = allSelectors.filter(state) as Filter
            const page = allSelectors.page(state)
            const params = lo.omitBy(
              {
                page,
                query: filter.search,
                occurred_before: filter.to,
                occurred_after: filter.from,
              },
              lo.isNil,
            )
            return incidentsList(params).pipe(
              RxOps.catchError((error) => Rx.of(error)),
              RxOps.mergeMap((response) =>
                Rx.concat(
                  Rx.of(allActions.set(response)),
                  Rx.of(allActions.listRequest.finish(response)),
                  response instanceof Error
                    ? Rx.EMPTY
                    : Rx.of(
                        allActions.addMatching({
                          filter,
                          page,
                          keys: response.map(({ id }: any) => id),
                        }),
                      ),
                ),
              ),
            )
          }),
        ),
      )
    },
  },
])
