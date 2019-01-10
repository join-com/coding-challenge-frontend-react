import { REQUEST, FAILURE, SUCCESS } from '../constants'

const initState = {
  banner: 'Police department of Berlin',
  isLoading: true,
  hasError: false
}

export default function root(state = initState, action) {
  console.log(state)
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case REQUEST:
      return { isLoading: true, ...nextState }
    case FAILURE:
      return { hasError: true, ...nextState }
    case SUCCESS:
      return nextState
    default:
      return state
  }
}
