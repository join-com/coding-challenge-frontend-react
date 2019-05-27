import { clearBikes, fetchBikesFail, fetchBikesPending, fetchBikesSuccess } from "../redux/actions/BikesActions";
import chunk from "lodash.chunk"
import { setCurrentPage } from "../redux/actions/PaginationActions";
import { setFrom, setKeyword, setTo } from "../redux/actions/FilterActions";
import moment from "moment";

const baseApiUrl = "https://bikewise.org:443/api/v2/";

export function fetchAllIncidents(filter) {
  return dispatch => {
    let url = baseApiUrl + "incidents?";
    if (filter) {
      url = filter.keyword ? url + "query=" + encodeURIComponent(filter.keyword) + "&" : url;
      url = filter.from && filter.to ? url + "occurred_before=" + moment(filter.to).valueOf() / 1000 + "&" : url;
      url = filter.to && filter.from ? url + "occurred_after=" + moment(filter.from).valueOf() / 1000 + "&" : url;
    }
    dispatch(fetchBikesPending());
    dispatch(clearBikes());
    fetch(url)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          throw(data.error);
        }
        dispatch(fetchBikesSuccess(chunk(data.incidents, 10), data.incidents.length));
        return data.incidents
      }).catch(error => {
      dispatch(fetchBikesFail(error))
    })
  }
}

export function getSingleIncident(incidentId, onSuccess, onFailure) {
  return () => {
    const url = baseApiUrl + "incidents/" + incidentId;
    console.log("getSingleIncident, url: ", url);
    fetch(url)
      .then(
        res => res.json())
      .then(data => {
          if (data.error) {
            onFailure();
            return;
          }
          onSuccess(data.incident);
        }
      )
      .catch(() => onFailure());
  }
}

export function setPage(currentPage) {
  return dispatch => {
    dispatch(setCurrentPage(currentPage))
  }
}

export function setFromFilter(from) {
  return dispatch => {
    dispatch(setFrom(from))
  }
}

export function setToFilter(to) {
  return dispatch => {
    dispatch(setTo(to))
  }
}

export function setKeywordFilter(keyword) {
  return dispatch => {
    dispatch(setKeyword(keyword))
  }
}
