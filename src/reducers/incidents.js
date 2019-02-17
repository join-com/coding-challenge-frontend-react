import {
  FETCHING_LIST,
  FETCHED_LIST,
  ERROR_FETCHING_LIST,
  FETCH_CASE_DETAILS
} from '../constants/actions';

export const incidents = (
  state = {
    cases: [],
    totalCases: 0,
    currentCase: undefined,
    queryState: 'loading',
    filters: {
      occurred_after: '',
      occurred_before: '',
      query: '',
      page: 1,
      per_page: 10
    }
  },
  action
) => {
  switch (action.type) {
    case FETCHED_LIST:
      return {
        ...state,
        cases: action.payload.cases,
        filters: action.payload.filters,
        queryState: '',
        totalCases: action.payload.totalCases
      };
    case FETCHING_LIST:
      return {
        ...state,
        queryState: 'loading'
      };
    case ERROR_FETCHING_LIST:
      return {
        ...state,
        queryState: 'error'
      };
    case FETCH_CASE_DETAILS:
      let currentCase = state.cases.find(
        eachCase => eachCase.id === parseInt(action.payload.caseId),
        10
      );
      return {
        ...state,
        currentCase
      };
    default:
      return state;
  }
};
