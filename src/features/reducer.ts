import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import data from 'datas/crews'

import Crew from 'types/Crew'
import Dancer from 'types/Dancer'


interface IRootState {
  crews: Crew[]
  crewKey: string
  crew: Crew
  dancers: Dancer[]
  dancerKey: string
  dancer: Dancer
}

const slice = createSlice({
  name: 'root',
  initialState: {
    crews: data.crews,
    crewKey: data.crews[0].name.eng,
    crew: data.crews[0],
    dancers: data.crews[0].dancers,
    dancerKey: data.crews[0].dancers[0].name.eng,
    dancer: data.crews[0].dancers[0]  
  } as IRootState, 
  reducers: {
    selectCrew: (state, action: PayloadAction<string>) => {
      if (state.crewKey === action.payload) {
        return
      }
    
      state.crewKey = action.payload
      state.crew = state.crews.find((crew) => crew.name.eng === action.payload)
      state.dancerKey = state.crew.key
      state.dancer = state.crew.dancers.find((dancer) => state.crew.dancers.name.eng === state.dancerKey)  
    },
    selectDancer: (state, action: PayloadAction<string>) => {
      if (state.dancerKey === action.payload) {
        return
      }
    
      state.dancerKey = state.crew.key
      state.dancer = state.crew.dancers.find((dancer) => state.crew.dancers.name.eng === state.dancerKey)  
    }
  }
})

export const { selectCrew, selectDancer } = slice.actions

export default slice.reducer