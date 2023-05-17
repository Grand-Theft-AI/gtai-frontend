import { render, screen } from '@testing-library/react'
import { Navbar } from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const brand = screen.getByText(/Global Technology Asset Investment/i)
    expect(brand).toBeInTheDocument()
  })
})
