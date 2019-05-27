export const LOAD_BIKES_PENDING = "LOAD_BIKES_PENDING";
export const LOAD_BIKES_SUCCESS = "LOAD_BIKES_SUCCESS";
export const LOAD_BIKES_FAIL = "LOAD_BIKES_FAIL";
export const CLEAR_BIKES = "CLEAR_BIKES";

export function fetchBikesPending() {
  return {
    type: LOAD_BIKES_PENDING
  }
}

export function fetchBikesSuccess(paginatedIncidents,count) {
  return {
    type: LOAD_BIKES_SUCCESS,
    paginatedIncidents,
    count
  }
}

export function fetchBikesFail() {
  return {
    type: LOAD_BIKES_FAIL
  }
}

export function clearBikes() {
  return {
    type: CLEAR_BIKES
  }
}
