import c from './constants';
import createAction from 'app/redux/createAction';

export const getIncidents = createAction({
    loadingType: c.INCIDENTS_LOADING,
    type: c.GET_INCIDENTS,
    apiName: 'getIncidents',
    defaultReq: {
        incident_type: 'theft',
        proximity: 'Berlin',
        proximity_square: 100
    }
});

export const getIncident = createAction({
    loadingType: c.INCIDENT_LOADING,
    type: c.GET_INCIDENT,
    apiName: 'getIncident'
});

export const getBike = createAction({
    loadingType: c.BIKE_LOADING,
    type: c.GET_BIKE,
    apiName: 'getBike'
});
