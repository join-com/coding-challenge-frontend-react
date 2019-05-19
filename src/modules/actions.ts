import {
  Filters, Report, Error,
  FetchDataActionType, FetchDataSuccessActionType, FetchDataErrorActionType,
} from './interfaces'
import Types from './types'

export function fetchDataAction(params: Filters): FetchDataActionType {
  return {
    type: Types.FETCH_DATA,
    params,
  };
}

export function fetchDataSuccess(data: Report[]): FetchDataSuccessActionType {
  return {
    type: Types.FETCH_DATA_SUCCESS,
    data,
  };
}

export function fetchDataError(error: Error): FetchDataErrorActionType {
  return {
    type: Types.FETCH_DATA_ERROR,
    error,
  };
}
