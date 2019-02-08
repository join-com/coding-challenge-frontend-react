import c from './constants';
import api from 'app/redux/api';

const defaultReq = {
    per_page: 10,
    incident_type: 'theft',
    proximity: 'Berlin',
    proximity_square: 100
};

function setLoading(loading = false) {
    return {
        type: c.LOADING,
        payload: { loading }
    };
}

export function getIncidents(data = {}) {
    return dispatch => {
        dispatch(setLoading(true));

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
                    ...setLoading(false).payload,
                    ...payload
                }
            });
        })();
    };
}
