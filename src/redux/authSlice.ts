/** @format */

import { createSlice } from '@reduxjs/toolkit';

type UserState = {
	user: {},
	accessToken: null,
};

const initialState: UserState = {
	user: {},
	accessToken: null,
};

const AuthSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		login: (state, action) => {
			state.user = action.payload
		},
		logout: (state) => {
			state.user = {};
			state.accessToken = null;
		},
	},
});

export const  {login, logout} = AuthSlice.actions;
export default AuthSlice.reducer

