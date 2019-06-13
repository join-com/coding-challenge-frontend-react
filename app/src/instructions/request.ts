import { AnyAction } from 'redux'

export type RequestState = {
  startTime: number | null
  isLoading: boolean
  error: Error | null
  endTime: number | null
  key: unknown
}

function createRequestState(key: any): RequestState {
  return {
    key,
    isLoading: true,
    startTime: Date.now(),
    error: null,
    endTime: null,
  }
}

export function startRequest() {
  return {
    startTime: Date.now(),
    isLoading: true,
    error: null,
    endTime: null,
  }
}

export function finishRequest(value: any, action: AnyAction) {
  return {
    ...value,
    isLoading: false,
    error: action.error ? action.payload : null,
    endTime: Date.now(),
  }
}

export function startSetRequest(value: RequestState[], action: AnyAction): RequestState[] {
  const currentRequest = value.find((state) => state.key === action.meta.key)
  const newRequest: RequestState = createRequestState(action.meta.key)
  if (currentRequest) {
    Object.assign(currentRequest, newRequest)
  } else {
    value.push(newRequest)
  }
  return value
}

export function finishSetRequest(value: RequestState[], action: AnyAction) {
  const currentRequest = value.find((state) => state.key === action.meta.key)
  if (currentRequest) {
    Object.assign(currentRequest, {
      isLoading: false,
      endTime: Date.now(),
      error: action.error ? action.payload : null,
    })
  }
  return value
}
