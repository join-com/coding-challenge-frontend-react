import * as Rx from 'rxjs'
import * as RxOps from 'rxjs/operators'
import { fromFetch } from 'rxjs/fetch'

import { Incident } from './types'

const API_URL = 'https://bikewise.org:443/api/v2'

export function incidentsList(params: Record<string, string> = {}): Rx.Observable<Incident[]> {
  params.per_page = '10'
  const query = Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&')
  return fromFetch(`${API_URL}/incidents?${query}`).pipe(
    RxOps.switchMap((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`Error ${response.status}`)
    }),
    RxOps.map((data) => data.incidents),
    RxOps.catchError((error) => Rx.of({ error: true, message: error.message })),
  )
}

export function incident(id: number): Rx.Observable<Incident> {
  return fromFetch(`${API_URL}/incidents/${id}`).pipe(
    RxOps.switchMap((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(`Error ${response.status}`)
    }),
    RxOps.map((data) => data.incident),
    RxOps.catchError((error) => Rx.of({ error: true, message: error.message })),
  )
}
