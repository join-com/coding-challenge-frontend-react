import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'

import { Incident } from './types'
import data from './data.json'

export function incidentsList(params: object = {}): Rx.Observable<Incident[]> {
  return Rx.of(data).pipe(
    RxOps.delay(1000),
    /*RxOps.map((v) => {
      if (1) {
        throw new Error('test')
      }
      return v
    }),*/
  )
}

export function incident(key: number): Rx.Observable<Incident | undefined> {
  return Rx.of(data.find((i) => i.id === key)).pipe(
    RxOps.delay(1000),
    /*RxOps.map((v) => {
      if (1) {
        throw new Error('test')
      }
      return v
    }),*/
  )
}
