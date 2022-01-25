import { configureStore } from '@reduxjs/toolkit'

import reducer from 'features/dancerCrew/dancerCrewSlice'

import store from './store'

test('store', () => {
  const newStore = configureStore({ reducer })

  expect(newStore).toStrictEqual(store)
})