import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import characterSlice from './slice/charactersSlice';

export const store = configureStore({
  reducer: {
      characters: characterSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export type AppDispatch = typeof store.dispatch