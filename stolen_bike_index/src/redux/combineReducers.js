import { combineReducers } from "redux";
import { Incidents_reducer } from "./reducers/incidents.reducer";
import { Profile } from "./reducers/profile.reducer";

export const rootReducer = combineReducers({
  Incidents_reducer,
  Profile
});

