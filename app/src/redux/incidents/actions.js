import c from './constants';
import api from 'app/redux/api';

const defaultReq = {
    incident_type: 'theft',
    proximity: 'Berlin',
    proximity_square: 100
};

export function getIncidents(data = {}) {
    return dispatch => {
        dispatch({
            type: c.INCIDENTS_LOADING,
            payload: { loading: true }
        });

        (async () => {
            let payload;

            try {
                const res = await api.getIncidents({
                    ...defaultReq,
                    ...data
                });

                payload = {
                    status: 'success',
                    ...res.data
                };
            } catch (error) {
                payload = {
                    status: 'error',
                    error
                };
            }

            dispatch({
                type: c.GET_INCIDENTS,
                payload: {
                    uuid: Date.now(),
                    loading: false,
                    ...payload
                }
            });
        })();
    };
}

export function getIncident(data = {}) {
    return dispatch => {
        dispatch({
            type: c.INCIDENT_LOADING,
            payload: { loading: true }
        });

        (async () => {
            let payload;

            try {
                const res = await api.getIncident(data);

                payload = {
                    status: 'success',
                    ...res.data
                };
            } catch (error) {
                payload = {
                    status: 'error',
                    error
                };
            }

            dispatch({
                type: c.GET_INCIDENT,
                payload: {
                    uuid: Date.now(),
                    loading: false,
                    ...payload
                }
            });
        })();
    };
}

export function getBike(data = {}) {
    return dispatch => {
        dispatch({
            type: c.BIKE_LOADING,
            payload: { loading: true }
        });

        (async () => {
            let payload;

            try {
                const res = await api.getBike(data);

                payload = {
                    status: 'success',
                    ...res.data
                };
            } catch (error) {
                payload = {
                    status: 'error',
                    error
                };
            }

            dispatch({
                type: c.GET_BIKE,
                payload: {
                    uuid: Date.now(),
                    loading: false,
                    ...payload
                }
            });
        })();
    };
}
