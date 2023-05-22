import { NavLink } from 'react-router-dom';
import Container from './Container';

const Footer = () => {
  return (
    <footer className='bg-black text-white text-center font-sans fixed bottom-0 right-0 left-0 p-2 text-sm' style={{ height: '47px' }}>
      <Container className='flex flex-col items-center justify-center'>
        <span>
          DISCLAIMER: THIS IS A NOVELTY APPLICATION & IS NOT USED FOR STEALING CARS.
        </span>
        <div>
          <NavLink to='/aboutus' className='text-purple-400 hover:text-blue-300'>About Us</NavLink>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
