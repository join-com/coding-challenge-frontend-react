import { combineReducers } from "redux";
import alertReducer from "./alertReducer";
import errorReducer from "./errorReducer";
import bikesReducer from "./incidentsReducer";

const rootReducer = combineReducers({
  alerts: alertReducer,
  errors: errorReducer,
  bokes: bikesReducer,
});

export default rootReducer;
