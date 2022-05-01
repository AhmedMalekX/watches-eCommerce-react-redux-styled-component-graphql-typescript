import {combineReducers} from "@reduxjs/toolkit";
import {darkmodeSlice} from "./darkmode";

export const rootReducer = combineReducers({
	darkmode: darkmodeSlice.reducer,
});
