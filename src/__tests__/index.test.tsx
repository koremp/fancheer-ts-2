
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

    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  })

  it('renders Main', () => {
    render(<Main />)
  })
})
