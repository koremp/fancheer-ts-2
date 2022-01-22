import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux'
import CrewMenu from './index'

import data from 'datas/crews'

const { crews, key } = data

describe('Crew Menu', () => {
  const dispatch = jest.fn()

  const renderCrewMenu = () => {
    return render(<CrewMenu/>)
  }

  beforeEach(() => {
    dispatch.mockClear()
    useDispatch.mockImplementation(() => dispatch)
    useSelector.mockImplementation((selector) => selector({
      crews,
      crewKey: crews[0].name.eng,
      crew: crews[0],
    }))
  })

  it('renders crews and checked crew', () => {
    const { getByText } = renderCrewMenu()

    crews.map((crew) => {
      expect(getByText(crew.name.eng)).not.toBeNull()
    })
  })

  context('when the user clicks on the menu,', () => {
    it('it dispatches chooseCrew action.', () => {
      const { getByText } = renderCrewMenu()

      fireEvent.click(getByText(crews[1].name.eng))

      expect(dispatch).toBeCalledWith({
        type: 'dancerCrew/chooseCrew',
        payload: crews[1].name.eng,
      })
    })
  })
})