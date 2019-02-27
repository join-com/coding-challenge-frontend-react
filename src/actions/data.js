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
        const {
          page, per_page, ...filterParams
        } = params;

        dispatch({
          type: types.DATA_GET_SUCCESS,
          data: res.data,
          filterParams,
          loading: '',
          error: '',
        });
      })
      .catch((e) => {
        dispatch({
          type: types.DATA_GET_ERROR,
          loading: '',
          error: `${
            I18n.t('en.data.states.error.loading')} – ${
            getErrorMessage(e, 'en.data.states.error')
          }`,
        });
      });
  };
}

export function fetchDataById(params) {
  return (dispatch) => {
    dispatch({
      type: types.DATA_GET_BY_ID,
      loading: I18n.t('en.data.actions.loading'),
    });
    ApiClient.fetchDataById(params)
      .then((res) => {
        dispatch({
          type: types.DATA_GET_BY_ID_SUCCESS,
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

export function onPageNumberChange(params) {
  return (dispatch) => {
    dispatch({
      type: types.DATA_PAGE_NUMBER_CHANGE,
      params,
    });
  };
}
