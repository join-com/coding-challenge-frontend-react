import { NAMESPACE } from "../constants/global";
/**
 * Create action type creation function
 * @param {String} prefix - action prefix (actually reducer name)
 */
export const createPrefix = prefix => name => `${NAMESPACE}/${prefix}/${name}`;

/**
 * Create action creation function
 * @param {String} type - action type
 */
export const createAction = type => payload => ({ type, payload });
