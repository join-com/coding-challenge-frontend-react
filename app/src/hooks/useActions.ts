import * as React from 'react'
import * as RR from 'react-redux'
import { Action, ActionCreatorsMapObject, Dispatch } from 'redux'
import * as lo from 'lodash'

import { actions } from '../redux'

function bindDeep(
  actionsMap: Record<string, any>,
  dispatch: Dispatch<Action<any>>,
): ActionCreatorsMapObject {
  return lo.reduce(
    actionsMap,
    (current, value, key) => ({
      ...current,
      [key]: lo.isPlainObject(value)
        ? bindDeep(value, dispatch)
        : (...args: any[]) => dispatch(value(...args)),
    }),
    {},
  ) as ActionCreatorsMapObject
}

export function useActions(): any {
  const dispatch = (RR as any).useDispatch()
  const boundActions = React.useCallback(() => {
    return bindDeep(actions, dispatch)
  }, [dispatch])
  return boundActions()
}
