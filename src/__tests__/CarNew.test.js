import { render, screen } from '@testing-library/react'
import CarNew from '../pages/CarNew'

describe('<CarNew />', () => {
  it('renders without crashing', () => {
    render(<CarNew />)

    screen.logTestingPlaygroundURL()

    const inputs = [
      {
        type: 'textbox',
        names: [
          /make/i,
          /model/i,
          /image/i,
          /description/i,
          /street/i,
          /city/i,
          /zip/i,
        ],
      },
      {
        type: 'spinbutton',
        names: [/year/i, /mileage/i, /price/i],
      },
      {
        type: 'combobox',
        names: [/state/i],
      },
    ]

    inputs.forEach(({ type, names }) => {
      names.forEach((name) => {
        const input = screen.getByRole(type, {
          name,
        })
        expect(input).toBeInTheDocument()
      })
    })
  })
})
