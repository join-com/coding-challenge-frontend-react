import * as types from '../actionTypes/data';

const initialState = {
  data: [],
  error: '',
  loading: '',
};

function getContent(data) {
  if (data && Object.keys(data).some(key => key === 'incidents')) {
    const { incidents } = data;
    return incidents;
  }
  return [];
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_GET:
      return {
        ...state,
        loading: action.loading,
      };
    case types.DATA_GET_SUCCESS:
      return {
        ...state,
        data: getContent(action.data),
        error: action.error,
        loading: action.loading,
      };
    case types.DATA_GET_ERROR:
      return {
        ...state,
        error: action.error,
        loading: action.loading,
      };
    case types.DATA_RESET_ERROR:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default data;

export function getData(state) {
  return state.data && state.data.data;
}

export function getDataError(state) {
  return state.data && state.data.error;
}

export function getDataLoading(state) {
  return state.data && state.data.loading;
}
