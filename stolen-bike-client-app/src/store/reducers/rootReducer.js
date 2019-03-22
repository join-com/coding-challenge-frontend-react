import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import errorReducer from "./errorReducer";
import incidentsReducer from "./incidentsReducer";

const rootReducer = combineReducers({
  alerts: alertReducer,
  errors: errorReducer,
  incidentsReducer: incidentsReducer,
});

export default rootReducer;
