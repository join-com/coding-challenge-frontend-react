import { GET_ALL_INCIDENTS_REQUEST, GET_ALL_INCIDENTS_REQUEST_SUCCESS, GET_ALL_INCIDENTS_REQUEST_FAILURE } from '../constants/get_all_incidents.constants';
import { COUNT_ALL_INCIDENTS_REQUEST_FAILURE, COUNT_ALL_INCIDENTS_REQUEST_SUCCESS } from "../constants/count_all_incidents.constants";
import { SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST, SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_SUCCESS, SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_FAILURE } from "../constants/search_incidents_by_date_range.constants";

const initialState = {
  incidents: null,
  all_incidents: null,
  page: null,
  total: null,
  isSearch: false,
  error: null
};

export const Incidents_reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_INCIDENTS_REQUEST:
      return {
        ...state,
        loading: true,
        page: action.page
      };
    case SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_ALL_INCIDENTS_REQUEST_SUCCESS:
      return {
        ...state,
        incidents: action.payload,
        loading: false
      };
    case COUNT_ALL_INCIDENTS_REQUEST_SUCCESS:
      return {
        ...state,
        all_incidents: action.payload,
        total: action.payload.length
      };
    case SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        incidents: action.payload,
        total: action.payload.length,
        isSearch: true
      };
    case 'SEARCH_BY_INCIDENT_TITLE':
      return {
        ...state,
        incidents: state.all_incidents.filter(incident => incident.title.toLowerCase().includes(action.value.toLowerCase())),
        total: action.value ? null : state.all_incidents.length,
        isSearch: !!action.value
      };
    case 'CUSTOM_PAGINATION':
      return {
        ...state,
        page: action.page
      };
    case 'RESET_SEARCH_OPTION':
      return {
        ...state,
        isSearch: false
      };
    case COUNT_ALL_INCIDENTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error
      };
    case GET_ALL_INCIDENTS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        incidents: null,
        error: action.error
      };
    case SEARCH_ALL_INCIDENTS_BY_DATE_RANGE_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        incidents: null,
        error: action.error
      };
    default:
      return state;
  }
};