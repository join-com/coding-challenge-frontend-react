export const GET_TEXT_REQUEST = 'GET_TEXT_REQUEST';
export const GET_TEXT_SUCCESS = 'GET_TEXT_SUCCESS';
export const GET_TEXT_FAILURE = 'GET_TEXT_FAILURE';

export interface IGetTextRequestAction {
  type: typeof GET_TEXT_REQUEST;
}

export interface IGetTextSuccessAction {
  type: typeof GET_TEXT_SUCCESS;
  data: string;
}

export interface IGetTextFailureAction {
  type: typeof GET_TEXT_FAILURE;
  error?: typeof Error;
}
