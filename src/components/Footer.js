import { NavLink } from 'react-router-dom'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='bg-black backdrop-blur bg-opacity-75 text-white text-center p-2 text-sm fixed bottom-0 left-0 right-0'>
      <Container className='flex items-center justify-center gap-2 flex-col sm:flex-row'>
        <span>
          DISCLAIMER: THIS IS A NOVELTY APPLICATION & IS NOT USED FOR STEALING CARS.
        </span>
        <NavLink to={'/aboutus'} className='text-blue-400 hover:text-blue-300'>
          About Us
        </NavLink>
      </Container>
    </footer>
  )
}

export default Footer

