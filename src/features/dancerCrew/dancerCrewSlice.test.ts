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
  
  describe('Choose Crew', () => {
    it('should handle changing crew and dancer key', () => {
      expect(reducer(previousState, chooseCrew(crews[1].name.eng))).toEqual({
        ...previousState,
        crewKey: crews[1].name.eng,
        crew: crews[1],
        dancerKey: crews[1].key,
        dancer: crews[1].dancers[0]
      })
    })  
  })

  describe('Choose Dancer', () => {
    it('should handle changing dancer key', () => {
      expect(reducer(previousState, chooseDancer(crews[0].dancers[2].name.eng))).toEqual({
        ...previousState,
        dancerKey: crews[0].dancers[2].name.eng,
        dancer: crews[0].dancers[2],
      })
    })  
  })
})