import { render, screen } from '@testing-library/react'
import Register from '../pages/Register'
import { BrowserRouter } from 'react-router-dom'

describe('<Register />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    )

    const labels = [/email/i, /password/i]

    labels.forEach((label) => {
      const input = screen.getByLabelText(label)

      expect(input).toBeInTheDocument()
    })
  })
})
