import { configureStore } from '@reduxjs/toolkit'
import reducer from 'features/dancerCrew/dancerCrewSlice'

export default const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production"
})
