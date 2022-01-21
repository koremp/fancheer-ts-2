import { configureStore } from '@reduxjs/toolkit'
import reducer from './reducer'

const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export type RootState = ReturnType<typeof store.getState>

export const crews = (state: RootState) => state.crews
export const crewKey = (state: RootState) => state.crewKey
export const selectedCrew = (state: RootState) => state.crew

export const dancers = (state: RootState) => state.dancers
export const dancerKey = (state: RootState) => state.dancerKey
export const selectedDancer = (state: RootState) => state.dancer


export default store