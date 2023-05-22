import { Link } from 'react-router-dom'
import Container from './Container'
import GTAI from '../assets/GTAI.png'

const Navbar = ({ current_user }) => {
  return (
    <nav className='bg-gradient-to-b from-black to-transparent'>
      <Container className='flex items-center'>
        <Link to='/' className='nav-link'>
          <span className='nav-link-text'>Home</span>
        </Link>
        <Link to='/carnew' className='nav-link'>
          <span className='nav-link-text'>Create</span>
        </Link>
        {current_user && (
          <Link to='/mycars' className='nav-link'>
            <span className='nav-link-text'>Dashboard</span>
          </Link>
        )}
        <Link to='/carindex' className='nav-link'>
          <span className='nav-link-text'>View Listings</span>
        </Link>
        <Link to='/' className='flex-1 flex items-center justify-center'>
          <img src={GTAI} alt='Logo' className='w-20 h-20 object-contain' />
        </Link>
        {!current_user && (
          <>
            <Link to='/login' className='nav-link'>
              <span className='nav-link-text'>Login</span>
            </Link>
            <Link to='/register' className='nav-link'>
              <span className='nav-link-text'>Register</span>
            </Link>
          </>
        )}
      </Container>
    </nav>
  )
}

export default Navbar
