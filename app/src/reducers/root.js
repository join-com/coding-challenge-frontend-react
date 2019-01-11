import { REQUEST, FAILURE, SUCCESS } from '../constants'

const initState = {
  banner: 'Police department of Berlin',
  isLoading: false,
  hasError: false,
  totalRecords: 1024
}

export default function root(state = initState, action) {
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case REQUEST:
      return { ...nextState, isLoading: true }
    case FAILURE:
      return { ...nextState, hasError: true }
    case SUCCESS:
      return { ...nextState, isLoading: false }
    default:
      return state
  }
}
