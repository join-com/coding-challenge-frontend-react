import {
  GET_TEXT_REQUEST,
  GET_TEXT_SUCCESS,
  GET_TEXT_FAILURE,
  IGetTextRequestAction,
  IGetTextSuccessAction,
  IGetTextFailureAction
} from './Home.actionTypes';

export function getTextRequest(): IGetTextRequestAction {
  return {
    type: GET_TEXT_REQUEST
  };
}

export function getTextSuccess(data): IGetTextSuccessAction {
  return {
    type: GET_TEXT_SUCCESS,
    data
  };
}

export function getTextFailure(error): IGetTextFailureAction {
  return {
    type: GET_TEXT_FAILURE,
    error
  };
}
