import { render, screen } from '@testing-library/react'
import Login from '../pages/Login'
import { BrowserRouter } from 'react-router-dom'

describe('<Login />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    )

    const labels = [/email/i, /password/i]

    labels.forEach((label) => {
      const input = screen.getByLabelText(label)

      expect(input).toBeInTheDocument()
    })
  })
})
