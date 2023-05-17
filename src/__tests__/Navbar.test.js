import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'
import { BrowserRouter } from 'react-router-dom'

describe('<Navbar />', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )

    const homeLink = screen.getByText(/Home/i)
    expect(homeLink).toBeInTheDocument()

    const listingLink = screen.getByText(/View Listings/i)
    expect(listingLink).toBeInTheDocument()
  })
})
