import { createSlice } from '@reduxjs/toolkit'

const UserState = {
        user: {}, 
        accessToken: null,      
}

const initialState = {
  user: {},
  userToken: null, 
}

const AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.userToken = action.payload
    }
  },
})

