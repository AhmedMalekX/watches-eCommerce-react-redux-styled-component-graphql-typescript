import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export const darkmodeSlice = createSlice({
	name: 'darkmode',
	initialState: false,
	reducers: {
		toggle: (state, action:PayloadAction<{status: boolean}>) => state = action.payload.status
	}
})

export const {toggle} = darkmodeSlice.actions;