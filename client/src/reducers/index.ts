import { combineReducers } from "redux";
import items from "./ItemsReducer";
import theme from "./ThemeReducer";

export const reducer = combineReducers({ items, theme });
export { setItemsCount, setSearchQuery } from "./ItemsReducer";
export { setNightMode } from "./ThemeReducer";
