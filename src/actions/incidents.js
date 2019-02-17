import { incidents, markers } from '../services/bikewise';
import {
  FETCHING_LIST,
  FETCHED_LIST,
  ERROR_FETCHING_LIST,
  FETCH_CASE_DETAILS
} from '../constants/actions';

export const fetchStolenBikesList = filters => async dispatch => {
  dispatch({
    type: FETCHING_LIST
  });

  try {
    const { incidents: incidentsList } = await incidents(filters);
    const { features: markersList } = await markers({ ...filters, all: true });
    const markersMap = markersList.reduce((currentMap, marker) => {
      currentMap[marker.properties.id] = marker.geometry.coordinates;
      return currentMap;
    }, {});

    const items = incidentsList.reduce((currentList, incident) => {
      if (markersMap[incident.id]) {
        currentList.push({ coordinates: markersMap[incident.id], ...incident });
      }
      return currentList;
    }, []);

    dispatch({
      type: FETCHED_LIST,
      payload: {
        cases: items,
        totalCases: markersList.length,
        filters: filters
      }
    });
  } catch (e) {
    dispatch({
      type: ERROR_FETCHING_LIST
    });
  }
};

export const getCaseDetails = caseId => async dispatch => {
  dispatch({
    type: FETCH_CASE_DETAILS,
    payload: {
      caseId: caseId
    }
  });
};
