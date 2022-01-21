import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from 'datas/crews'

import Crew from 'types/Crew'
import Dancer from 'types/Dancer'

export interface DancerCrewState {
  crews: Crew[]
  crewKey: string
  crew: Crew
  dancerKey: string
  dancer: Dancer
}

const dancerCrewSlice = createSlice({
  name: 'dancerCrew',
  initialState: {
    crews: data.crews,
    crewKey: data.crews[0].name.eng,
    crew: data.crews[0],
    dancerKey: data.crews[0].dancers[0].name.eng,
    dancer: data.crews[0].dancers[0],
  } as DancerCrewState, 
  reducers: {
    chooseCrew: (state, action: PayloadAction<string>) => {
      if (state.crewKey === action.payload) {
        return
      }
    
      state.crewKey = action.payload
      state.crew = state.crews.find((crew) => crew.name.eng === action.payload)
    },
    chooseDancer: (state, action: PayloadAction<string>) => {
      if (state.dancerKey === action.payload) {
        return
      }

      state.crew.key = action.payload
      state.dancerKey = action.payload
      state.dancer = state.crew.dancers.find((dancer) => dancer.name.eng === action.payload)
    }
  }
})

export const crewNames = (state: DancerCrewState) => state.crews
export const crew = (state: DancerCrewState) => state.crew
export const dancerNames = (state: DancerCrewState) => state.crew.dancers
export const dancer = (state: DancerCrewState) => state.dancer

export const { chooseCrew, chooseDancer } = dancerCrewSlice.actions

export default dancerCrewSlice.reducer