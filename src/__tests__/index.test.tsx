
import { useDispatch, useSelector } from 'react-redux'
import { render } from '@testing-library/react'

import Main from 'pages/index'

import { initialState } from 'features/dancerCrew/dancerCrewSlice'

jest.mock('react-redux')



describe('Main', () => {
  const dispatch = jest.fn()

  beforeEach(() => {
    dispatch.mockClear()

    useDispatch.mockImplementation(() => dispatch)

    useSelector.mockImplementation((selector) => selector(
      initialState
    ))
  })

  it('renders Main', () => {
    render(<Main/>)
  })
})
