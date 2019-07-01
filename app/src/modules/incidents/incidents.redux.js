import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types: IncidentsTypes, Creators: IncidentsActions } = createActions(
  {
    requestBikeThefts: ['page', 'per_page', 'incident_type', 'proximity', 'query', 'occurred_after', 'occurred_before'],
    requestBikeTheftsSuccess: ['payload'],
    requestBikeTheftsFailure: ['error'],
    requestBikeInfo: ['id'],
    requestBikeInfoSuccess: ['payload'],
    requestBikeInfoFailure: ['error'],
    showBikeDetails: ['details'],
  },
  { prefix: 'INCIDENTS/' }
);

export const INITIAL_STATE = new Immutable({
  loading: false,
  list: [],
  selected: {},
  error: null,
});

export const loadList = (state = INITIAL_STATE) => {
  return { ...state, loading: true, error: null };
};

export const loadSuccess = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  return { ...state, loading: false, list: payload };
};

export const loadFailure = (state = INITIAL_STATE, action) => {
  const { error } = action;
  return { ...state, loading: false, error };
};

export const showBikeDetails = (state = INITIAL_STATE, action) => {
  const { details } = action;
  return { ...state, loading: false, selected: details };
};

export const requestBikeInfo = (state = INITIAL_STATE) => {
  return { ...state, loading: true, error: null };
};

export const requestBikeInfoSucess = (state = INITIAL_STATE, action) => {
  const { payload } = action;
  return { ...state, loading: false, selected: payload };
};

export const requestBikeFailure = (state = INITIAL_STATE, action) => {
  const { error } = action;
  return { ...state, loading: false, error };
};
export const reducer = createReducer(INITIAL_STATE, {
  [IncidentsTypes.REQUEST_BIKE_THEFTS]: loadList,
  [IncidentsTypes.REQUEST_BIKE_THEFTS_SUCCESS]: loadSuccess,
  [IncidentsTypes.REQUEST_BIKE_THEFTS_FAILURE]: loadFailure,
  [IncidentsTypes.REQUEST_BIKE_INFO]: requestBikeInfo,
  [IncidentsTypes.REQUEST_BIKE_INFO_SUCCESS]: requestBikeInfoSucess,
  [IncidentsTypes.REQUEST_BIKE_INFO_FAILURE]: requestBikeFailure,
  [IncidentsTypes.SHOW_BIKE_DETAILS]: showBikeDetails,
});
