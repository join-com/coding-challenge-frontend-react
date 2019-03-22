import { combineReducers } from "redux";
import incidentsReducer from "./incidentsReducer";

const rootReducer = combineReducers({
  incidentsReducer: incidentsReducer,
});

export default rootReducer;
