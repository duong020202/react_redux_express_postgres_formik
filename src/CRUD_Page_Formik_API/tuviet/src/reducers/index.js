import { combineReducers } from "redux";
import {getItemsReducer} from "./getItemsReducer";

export default combineReducers({ items: getItemsReducer });
