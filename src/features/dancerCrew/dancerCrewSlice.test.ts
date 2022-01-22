import reducer, { chooseCrew, chooseDancer, initialState, DancerCrewState } from './dancerCrewSlice'

import data from 'datas/crews'

const { crews } = data

describe('Dancer Crew Slice', () => {
  it('returns initialState', () => {
    const state = reducer(undefined, { type: 'action' });

    expect(state).toEqual(initialState);
  })

  describe('Choose Crew', () => {
    it('should handle changing crew and dancer key', () => {
      const state = reducer({...initialState}, chooseCrew(crews[1].name.eng))

      expect(state).toEqual({
        ...initialState,
        crewKey: crews[1].name.eng,
        crew: crews[1],
        dancerKey: crews[1].dancers[0].name.eng,
        dancer: crews[1].dancers[0]
      })
    })  
  })

  describe('Choose Dancer', () => {
    it('should handle changing dancer key', () => {
      const state = reducer({...initialState}, chooseDancer(crews[0].dancers[3].name.eng))

      expect(state).toEqual({
        ...initialState,
        dancerKey: crews[0].dancers[3].name.eng,
        dancer: crews[0].dancers[3],
      })
    })  
  })
})