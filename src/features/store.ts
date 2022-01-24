import { configureStore } from '@reduxjs/toolkit'
import reducer from 'features/dancerCrew/dancerCrewSlice'

const store = configureStore({ reducer })

export default store