import { combineReducers } from 'redux';

import incidents from './incidents/reducer';

export const reducersMap = {
    incidents
};

export default function() {
    return combineReducers(reducersMap);
}
