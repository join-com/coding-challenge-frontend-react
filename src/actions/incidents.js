import { incidents, markers } from '../services/bikewise';

export const fetchStolenBikesList = params => async dispatch => {
  dispatch({
    type: 'FETCHING_LIST'
  });

  try {
    const incidentsList = await incidents(params);
    const markersList = await markers(params);
    console.log(incidentsList, markersList);
    dispatch({
      type: 'FETCH_LIST',
      // payload: {
      //     incidentsList,
      //     markersList
      // }
      payload: {
        items: incidentsList
      }
    });
  } catch (e) {
    dispatch({
      type: 'ERROR_FETCHING_LIST'
    });
  }
};
