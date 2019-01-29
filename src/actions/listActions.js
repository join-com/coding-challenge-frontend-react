import { ListActionTypes } from "./actionTypes";
import Api from "../api/api";

export const listActions = {
    fetchIncidents: () => dispatch => {
        let params = {
            perPage : 10,
            page : 1
        }
        Api.fetchIncidents(params,dispatch)
        .then(
            response => {
                dispatch({
                    type : ListActionTypes.FETCH_LIST,
                    payload : response.data.incidents
                })
            }
        )
    }
}
