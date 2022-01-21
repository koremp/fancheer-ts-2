import { configureStore } from '@reduxjs/toolkit'
import dancerCrewSlice from 'features/dancerCrew/dancerCrewSlice'

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== "production"
})
