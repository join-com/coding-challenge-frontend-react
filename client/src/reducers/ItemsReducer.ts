const initialState = {
    itemsCount: null,
    currentPage: 0
  };
const SET_NUMBEROFELEMENTS = "SET_NUMBEROFELEMENTS";
  
const reducer = (state: any = initialState, action: any) => {
      switch (action.type) {
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
