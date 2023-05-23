import { Link } from 'react-router-dom'
import Container from './Container'
import GTAI from '../assets/GTAI.png'

const Navbar = ( {current_user, logout} ) => {
  return (
    <nav className='bg-black/50 backdrop-blur'>
      <Container className='flex flex-col md:flex-row md:items-center'>
        <Link to='/' className='flex-1 logo-link'>
          <img src={GTAI} alt='Logo' className='w-20 h-20 object-contain' />
        </Link>
        <Link to='/' className='nav-link'>
          <span className='nav-link-text'>Home</span>
        </Link>
        <Link to='/carnew' className='nav-link'>
          <span className='nav-link-text'>Create</span>
        </Link>
        {current_user && (
          <>
          <Link to='/mycars' className='nav-link'>
            <span className='nav-link-text'>Dashboard</span>
          </Link>
          <Link to= '/' className='nav-link'>
             <span className= 'nav-link-text' onClick={logout}>LOG OUT</span>
          </Link>
          </>
        )}
        <Link to='/carindex' className='nav-link'>
          <span className='nav-link-text'>Listings</span>
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
