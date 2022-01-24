import reducer, { chooseCrew, chooseDancer, initialState, DancerCrewState } from './dancerCrew/dancerCrewSlice'

import data from 'datas/crews'

const { crews } = data

describe('reducer', () => {
  context('when previous state is undefined', () => {
    it('returns initialState', () => {
      const state = reducer(undefined, { type: 'action' });

      expect(state).toEqual(initialState);
    })
  })
})