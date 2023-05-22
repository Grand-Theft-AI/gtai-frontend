import { NavLink } from 'react-router-dom'
import Container from './Container'

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center font-header fixed bottom-0 right-0 left-0 p-2 text-sm'>
      <Container className='flex items-center justify-center gap-2'>
      <span>
        DISCLAIMER: THIS IS A NOVELTY APPLICATION & IS NOT USED FOR STEALING
        CARS.
      </span>
      <NavLink to={'/aboutus'} className='text-blue-400 hover:text-blue-300'>About Us</NavLink>
      </Container>
    </footer>
  )
}

export default Footer
