import * as types from '../actionTypes/data';

const initialState = {
  data: [],
  pagination: {
    totalElements: 23,
    totalPages: 5,
    page: 1,
    per_page: 5,
  },
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

function getPagination(state, params) {
  return {
    ...state.pagination,
    page: params.page,
  };
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
    case types.DATA_PAGE_NUMBER_CHANGE:
      return {
        ...state,
        pagination: getPagination(state, action.params),
      };
    default:
      return state;
  }
};

export default data;

export function getData(state) {
  return state.data && state.data.data;
}

export function getDataPagination(state) {
  return state.data && state.data.pagination;
}

export function getDataPageNumber(state) {
  const pagination = getDataPagination(state);
  return (pagination && pagination.page) || 1;
}

export function getDataError(state) {
  return state.data && state.data.error;
}

export function getDataLoading(state) {
  return state.data && state.data.loading;
}
