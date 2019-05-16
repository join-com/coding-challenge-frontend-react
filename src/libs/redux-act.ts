import { createAction as createAct, createReducer } from 'redux-act'

const createRequestAction = (name: string) => {
  const action = createAct(name.toUpperCase(), payload => payload, meta => meta)

  return Object.assign(action, {
    request: action,
    success: createAct(
      `${name.toUpperCase()}_SUCCESS`,
      payload => payload,
      meta => meta,
    ),
    failure: createAct(
      `${name.toUpperCase()}_FAILURE`,
      payload => payload,
      meta => meta,
    ),
  })
}

const createAction = (name: string) => createAct(name.toUpperCase())

export { createAction, createReducer, createRequestAction }
