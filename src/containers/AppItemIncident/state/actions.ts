import { action } from 'typesafe-actions';

import { Actions } from './types';
import API from '../../../resources';


const doGetIncidentById = (id: number) => (dispatch: Function) => {
    dispatch(doClearError());
    dispatch({ type: Actions.DO_GET_INCIDENT_BY_ID, payload: { incident: undefined } });
    API.incidents.getIncidentById(id)
        .then(
            (res) => {
                dispatch({
                    type: Actions.DO_GET_INCIDENT_BY_ID,
                    payload: {
                        incident: res,
                    },
                });
            },
            (err) => {
                switch (err.response.status) {
                    case 404:
                        dispatch(doSetError('404 / Incident Not Found'));
                        break;
                    default:
                        dispatch(doSetError(`${err.response.status} / Something went wrong`));
                        break;
                }
            },
        );
};

const doClearError = () => action(Actions.DO_CLEAR_ERROR);

const doSetError = (error?: string) => action(Actions.DO_SET_ERROR, { error });


export const actions = {
    doGetIncidentById,
    doClearError,
    doSetError,
};
