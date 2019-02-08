import { combineReducers } from 'redux';

import reports from './reports/reducer';

export const reducersMap = {
    reports
};

export default function() {
    return combineReducers(reducersMap);
}
