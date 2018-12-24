import { NAMESPACE } from "../constants/global";

export const createPrefix = prefix => name => `${NAMESPACE}/${prefix}/${name}`;
export const createAction = type => payload => ({ type, payload });
