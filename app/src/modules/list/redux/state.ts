import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'
import { PackData } from 'redux-packed'
import { Action } from 'redux'
import { PackDataEpic } from 'redux-packed-observable-middleware'

import { createPack } from '../../../utils'
import { incidentsList } from '../../../api'

export type Store = {
  listRequest: null | object
}

export type Actions = {
  listRequest: {
    start: () => Action
    finish: () => Action
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
    reducerCreator: (actions, selectors) => ({}),
    epics: (allActions: any) => (action$: any) => {
      return Rx.merge(
        action$.ofType(allActions.listRequest.start).pipe(
          RxOps.exhaustMap(() =>
            incidentsList().pipe(
              RxOps.catchError((error) => Rx.of(error)),
              RxOps.mergeMap((response) =>
                Rx.concat(
                  Rx.of(allActions.set(response)),
                  Rx.of(allActions.listRequest.finish(response)),
                ),
              ),
            ),
          ),
        ),
      )
    },
  },
])
