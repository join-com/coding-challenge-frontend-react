import Types from './types'

export interface Filters {
  page: number
  incident_type: string
  per_page: number
  proximity: string
  proximity_square: number
  occurred_before?: number
  occurred_after?: number
  query?: string
}

export interface Report {
  readonly id: number
  readonly title: string
  readonly description: string
  readonly address: string
  readonly occurred_at: number
  readonly updated_at: number
  readonly url: string
  readonly media: {
    readonly image_url?: string
    readonly image_url_thumb?: string
  }
}

export interface Error {
  readonly field: string
  readonly message: string
}

export interface FetchDataAction {
  readonly type: typeof Types.FETCH_DATA
  readonly params: Filters
}
export interface FetchDataSuccessAction {
  readonly type: typeof Types.FETCH_DATA_SUCCESS
  readonly data: Report[]
}
export interface FetchDataErrorAction {
  readonly type: typeof Types.FETCH_DATA_ERROR
  readonly error: Error
}

export type FetchDataActionType = FetchDataAction
export type FetchDataSuccessActionType = FetchDataSuccessAction
export type FetchDataErrorActionType = FetchDataErrorAction
export type FetchDataType = FetchDataAction | FetchDataSuccessAction | FetchDataErrorAction

export interface AppState {
  isLoading: boolean
  data: Report[]
  filters: Filters
  error?: Error
}
