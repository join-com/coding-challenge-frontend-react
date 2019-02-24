import I18n, { getErrorMessage } from '../utils/I18n';
import ApiClient from '../api/ApiClient';

import * as types from '../actionTypes/data';

export function fetchData(params) {
  return (dispatch) => {
    dispatch({
      type: types.DATA_GET,
      loading: I18n.t('en.data.actions.loading'),
    });
    ApiClient.fetchData(params)
      .then((res) => {
        dispatch({
          type: types.DATA_GET_SUCCESS,
          data: res.data,
          loading: '',
          error: '',
        });
      })
      .catch((e) => {
        dispatch({
          type: types.DATA_GET_ERROR,
          loading: '',
          error: `${
            I18n.t('en.data.states.error.loading')}: ${
            getErrorMessage(e, 'en.data.states.error')
          }`,
        });
      });
  };
}

export function resetDataError() {
  return (dispatch) => {
    dispatch({
      type: types.DATA_RESET_ERROR,
      error: '',
    });
  };
}
