import { combineReducers } from "redux";
import todoReducer from "./todoReducer";
// import storeReducer from "./storeReducer";
export default combineReducers({
    todo: todoReducer,
    // store: storeReducer
});