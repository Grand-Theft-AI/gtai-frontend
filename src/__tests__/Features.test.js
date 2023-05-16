import { render, screen } from '@testing-library/react'
import Features from '../components/Features'

describe('<Features />', () => {
  it('renders without crashing', () => {
    render(<Features />)

    const features = [
      /effortlessly list your car/i,
      /showcase your car with a photo/i,
      /safe and convenient communication/i,
    ]

    features.forEach((feature) => {
      const heading = screen.getByRole('heading', {
        name: feature,
      })

      expect(heading).toBeInTheDocument()
    })
  })
})
