import { configureStore } from '@reduxjs/toolkit'
import usersReducer from './features/users/UserSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer
  },
})
