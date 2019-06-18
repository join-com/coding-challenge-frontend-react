const initialState = {
    search: '',
    to: '',
    from: '',
    itemsCount: null,
    currentPage: 0
  };
const SET_NUMBEROFELEMENTS = "SET_NUMBEROFELEMENTS";
const SET_SEARCHQUERY = "SET_SEARCHQUERY";
  
const reducer = (state: any = initialState, action: any) => {
      switch (action.type) {
        case SET_SEARCHQUERY: {
          return {
            ...state,
            search: action.search,
            from: action.from,
            to: action.to,
          }
        }
        case SET_NUMBEROFELEMENTS: {
          return {
            ...state,
            itemsCount: action.itemsCount,
          }
        }
        default: {
            return state;
        }
      }
  };
export default reducer;
export const setItemsCount = (itemsCount?: number) => ({ type: SET_NUMBEROFELEMENTS, itemsCount })
export const setSearchQuery = (search?: string, from?: string, to?: string) => ({ type: SET_SEARCHQUERY, search, from, to })
