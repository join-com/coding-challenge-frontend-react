import { REQUEST, FAILURE, SUCCESS } from '../constants'

const initState = { banner: 'Police department of Berlin' }

export default function root(state = initState, action) {
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case REQUEST:
      return nextState
    case FAILURE:
      return nextState
    case SUCCESS:
      return nextState
    default:
      return state
  }
}
