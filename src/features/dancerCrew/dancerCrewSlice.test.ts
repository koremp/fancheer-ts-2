import reducer, { chooseCrew, chooseDancer, DancerCrewState } from './dancerCrewSlice'

import data from 'datas/crews'

const { crews } = data

describe('Dancer Crew Slice', () => {
  const previousState: DancerCrewState = {
    crews,
    crewKey: crews[0].name.eng,
    crew: crews[0],
    dancerKey: crews[0].dancers[0].name.eng,
    dancer: crews[0].dancers[0]
  }

  it('returns initialState', () => {
    const state = reducer(undefined, { type: 'action' });

    expect(state).toEqual(previousState);
  })

  describe('Choose Crew', () => {
    it('should handle changing crew and dancer key', () => {
      const state = reducer({...previousState}, chooseCrew(crews[1].name.eng))

      expect(state).toEqual({
        ...previousState,
        crewKey: crews[1].name.eng,
        crew: crews[1],
        dancerKey: crews[1].key,
        dancer: crews[1].dancers.find((dancer) => dancer.name.eng === crews[1].key)
      })
    })  
  })

  describe('Choose Dancer', () => {
    it('should handle changing dancer key', () => {
      const state = reducer({...previousState}, chooseDancer(crews[0].dancers[3].name.eng))

      expect(state).toEqual({
        ...previousState,
        dancerKey: crews[0].dancers[3].name.eng,
        dancer: crews[0].dancers[3],
      })
    })  
  })
})