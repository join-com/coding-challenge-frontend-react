import { ListActionTypes } from "./actionTypes";
import Api from "../api/api";
import axios from 'axios';

export const listActions = {
    fetchIncidents: (params, callBack) => dispatch => {
        Api.fetchIncidents(params)
            .then(
                axios.spread(
                    (list, pagination) => {
                        let payload = {
                            list: list.data.incidents,
                            total: pagination.data.incidents.length
                        }
                        dispatch({
                            type: ListActionTypes.FETCH_LIST,
                            payload: payload
                        })
                        callBack();
                    },
                    error => {
                        callBack("Some Error Occured")
                    }
                )
            )
            .catch(error => {
                callBack("Some Error Occured")
            })
    },
    fetchIncidentMapDetails: (title, callback = null) => dispatch => {
        Api.fetchIncidentMapDetails(title)
            .then(
                response => {
                    if (response.data.features.length > 0) {
                        dispatch({
                            type: ListActionTypes.FETCH_SINGLE_INCIDENT_MAP,
                            payload: response.data.features[0].geometry.coordinates
                        })
                    }
                    else {
                        if (!!callback)
                            callback("No map Found")
                    }
                }
            )
    },
    fetchIncident: (id, callBack) => dispatch => {
        Api.fetchIncident(id, dispatch)
            .then(
                response => {

                    dispatch({
                        type: ListActionTypes.FETCH_SINGLE_INCIDENT,
                        payload: response.data.incident
                    })
                    callBack()
                },
                err => {
                    callBack(err.response.data.error)
                }
            )
    },
    resetDetailState: () => dispatch => {
        dispatch({
            type: ListActionTypes.RESET_DETAIL_STATE,
        })
    },
    resetListState: () => dispatch => {
        dispatch({
            type: ListActionTypes.RESET_LIST_STATE,
        })
    }
}
