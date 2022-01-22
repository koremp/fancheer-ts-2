import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'

import DancerContent from './index'

import data from 'datas/crews'

const { crews } = data

const { dancers }= crews[0]
const dancer = dancers[0]

describe('Dancer Content', () => {
  const dispatch = jest.fn()

  const renderDancerContent = () => {
    return render(<DancerContent/>)
  }

  beforeEach(() => {
    dispatch.mockClear()
    useDispatch.mockImplementation(() => dispatch)
    useSelector.mockImplementation((selector) => selector({
      dancerKey: dancer.name.eng,
      dancer: dancer,
    }))
  })

  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
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
    });
  });

  it('renders image alt text', () => {
    const { getByText } = renderDancerContent()

    expect(getByText('Next image stub'))
  })

  it('renders descriptions,', () => {
    const { getByText } = renderDancerContent()

    expect(getByText('Dancer Info'))
    
    expect(getByText('Dancer Name (kor/eng)'))
    expect(getByText(`${dancer.name.kor} / ${dancer.name.eng}`))
    
    expect(getByText('Age'))
    expect(getByText(`${moment(dancer.birth).format('YYYY-MM-DD')} / ${moment().diff(dancer.birth.toString(), 'years')}`))
    
    expect(getByText('Descriptions'))
    expect(getByText(`${dancer.description}`))

  })

  context('when dancer is leader', () => {
    it('renders leader descriptions item', () => {
      const { getByText } = renderDancerContent()
      
      expect(getByText('Leader')).not.toBeNull()
      expect(getByText('리더')).not.toBeNull()
    })
  })

  context('when dancer is not leader', () => {
    it(`doesn't render leader descriptions item`, () => {
      useSelector.mockImplementation((selector) => selector({
        dancerKey: dancer.name.eng,
        dancer: {
          ...dancer,
          isLeader: false
        },
      }))

      const { queryAllByText } = renderDancerContent()
      
      expect(queryAllByText('리더')).toEqual([])
    })
  })
})