import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import API from '../utils/API'

const initialState = {
  contents: [],
  isLoading: false,
  error: null,
}

export const fetchUser = createAsyncThunk(
  'user/get-user',
  async () => {
    const res = await API.get('https:/jsonplaceholder.typicode.com/photos')
    const data = await res.data
    console.log(data);
    return data
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false
      state.contents = action.payload
    })
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false
    //   state?.error = action.error.message
    })
  },
})

export default userSlice.reducer