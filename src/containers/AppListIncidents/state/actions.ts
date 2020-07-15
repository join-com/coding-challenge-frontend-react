import { action } from 'typesafe-actions';

import { Actions, StateQueryFilter, StateQueryFilterDefault } from './types';
import API from '../../../resources';


const doFetchIncidents = (filter: StateQueryFilter) => (dispatch: Function) => {
    dispatch(doClearError());
    dispatch(doSetBusyStatus());
    dispatch(doSetFilter(filter));
    dispatch({ type: Actions.DO_FETCH_INCIDENTS, payload: { incidents: undefined } });
    API.incidents.fetchIncidents(filter || StateQueryFilterDefault)
        .then(
            (res) => {
                dispatch({
                    type: Actions.DO_FETCH_INCIDENTS,
                    payload: {
                        incidents: res,
                    },
                });
                dispatch(doClearError());
                dispatch(doSetBusyStatus(false));
            },
            (err) => {
                if (err.name) {
                    dispatch(doSetError('Oops, something went wrong...'));
                    dispatch(doSetBusyStatus(false));
                }
            },
        );
};

const doClearError = () => action(Actions.DO_CLEAR_ERROR);

const doSetError = (error?: string) => action(Actions.DO_SET_ERROR, { error });

const doSetBusyStatus = (isBusy: boolean = true) => action(Actions.DO_SET_BUSY_STATUS, { isBusy });

const doSetFilter = (filter?: StateQueryFilter) => action(Actions.DO_SET_FILTER, { filter: filter || StateQueryFilterDefault });

const doPaginate = (page: number) => action(Actions.DO_PAGINATE, { page });


export const actions = {
    doFetchIncidents,
    doClearError,
    doSetError,
    doSetBusyStatus,
    doSetFilter,
    doPaginate,
};
