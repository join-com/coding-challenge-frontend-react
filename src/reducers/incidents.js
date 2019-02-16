export default (
  state = {
    items: [],
    queryState: 'loading',
    queryFilters: {}
  },
  action
) => {
  switch (action.type) {
    case 'FETCH_LIST':
      return {
        ...state,
        items: action.payload.items.incidents,
        filters: action.payload.items.filters,
        queryState: ''
      };
    case 'FETCHING_LIST':
      return {
        ...state,
        queryState: 'loading'
      };
    case 'ERROR_FETCHING_LIST': {
      return {
        ...state,
        queryState: 'error'
      };
    }
    default:
      return state;
  }
};
