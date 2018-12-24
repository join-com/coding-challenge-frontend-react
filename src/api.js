import { API_PATH, ERROR_MESSAGE } from "./constants/global";

const checkSuccessResponse = response => {
  if (response.ok) {
    return response.json();
  } else {
    throw new Error(ERROR_MESSAGE);
  }
};

export const loadIncidents = () =>
  fetch(`${API_PATH}incidents?proximity=berlin`)
    .then(checkSuccessResponse)
    .then(response => {
      return response;
    });
export const loadIncidentById = id =>
  fetch(`${API_PATH}incidents/${id}`)
    .then(checkSuccessResponse)
    .then(response => {
      return response;
    });
