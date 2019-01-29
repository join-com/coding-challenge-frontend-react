import { combineReducers } from 'redux';
import listReducer from './reducers/listReducer';


export default combineReducers({
    bikeList : listReducer
});

