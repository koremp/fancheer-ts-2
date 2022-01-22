import { render, fireEvent } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux'
import DancerMenu from './index'

import data from 'datas/crews'

const { crews, key } = data

const crew = crews[0]

describe('Dancer Menu', () => {
  const dispatch = jest.fn()

  const renderDancerMenu = () => {
    return render(<DancerMenu/>)
  }

  beforeEach(() => {
    dispatch.mockClear()
    useDispatch.mockImplementation(() => dispatch)
    useSelector.mockImplementation((selector) => selector({
      crew,
      dancerKey: crew.dancers[0].name.eng,
      dancer: crew.dancers[0],
    }))
  })

  it('renders dancers and checked dancer', () => {
    const { getByText } = renderDancerMenu()

    crew.dancers.map((dancer) => {
      expect(getByText(dancer.name.eng)).not.toBeNull()
    })
  })

  context('when the user clicks on the menu,', () => {
    it('it dispatches chooseDancer action.', () => {
      const { getByText } = renderDancerMenu()

      fireEvent.click(getByText(crew.dancers[0].name.eng))

      expect(dispatch).toBeCalledWith({
        type: 'dancerCrew/chooseDancer',
        payload: crew.dancers[0].name.eng,
      })
    })
  })
})