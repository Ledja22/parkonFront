import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import spinnerSlice from './spinnerSlice';
import authSlice from './authSlice';
import userSlice from './userSlice';

export const store = configureStore({
    reducer: { counterReducer, spinnerSlice, authSlice, userSlice },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
