import { render } from '@testing-library/react';

import Main from 'pages/index';

describe("Main", () => {
  beforeEach(() => {
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
      }))
    })
  })

  test('Selected Crew changes when header menu key is changed.', () => {
    render(<Main/>)
  })

  test('Selected Dancer changes when sider menu key is changed.', () => {
    render(<Main/>)
  })
})

