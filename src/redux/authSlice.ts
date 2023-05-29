/** @format */

import { createSlice } from '@reduxjs/toolkit';

type UserState = {
	isLogedin: boolean;
	accessToken: null;
};

const initialState: UserState = {
	isLogedin: false,
	accessToken: null,
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.accessToken = action.payload;
		},
		logout: (state) => {
			state.isLogedin = false;
			state.accessToken = null;
		},
	},
});

export const { login, logout } = AuthSlice.actions;
export default AuthSlice.reducer;
