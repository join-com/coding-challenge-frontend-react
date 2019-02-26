import * as types from '../actionTypes/data';

const initialState = {
  data: [],
  pagination: {
    totalElements: 23,
    totalPages: 3,
    page: 1,
    per_page: 10,
  },
  filterParams: {},
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

function getItem(data) {
  if (data && Object.keys(data).some(key => key === 'incident')) {
    const { incident } = data;
    return incident;
  }
  return {};
}

function getPagination(state, params) {
  return {
    ...state.pagination,
    page: params.page,
  };
}

function addItemToDataState(state, data) { // unique values
  return Array.from(
    new Set([
      ...state.data,
      ...[data],
    ])
  );
}

const data = (state = initialState, action) => {
  switch (action.type) {
    case types.DATA_GET:
    case types.DATA_GET_BY_ID:
      return {
        ...state,
        loading: action.loading,
      };
    case types.DATA_GET_SUCCESS:
      return {
        ...state,
        data: getContent(action.data),
        filterParams: action.filterParams,
        error: action.error,
        loading: action.loading,
      };
    case types.DATA_GET_BY_ID_SUCCESS:
      return {
        ...state,
        data: addItemToDataState(state, getItem(action.data)),
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

export function getDataFiltersParams(state) {
  return state.data && state.data.filterParams;
}

export function getDataError(state) {
  return state.data && state.data.error;
}

export function getDataLoading(state) {
  return state.data && state.data.loading;
}
