import { Link } from 'react-router-dom'
import Container from './Container'
import GTAI from '../assets/GTAI.png'

const Navbar = ( {current_user} ) => {
  return (
    <nav className='navbar'>
      <Container>
        <Link to='/' className='nav-link'>
          <span className='nav-link-text'>HOME</span>
        </Link>
        {current_user && (
        <Link to='/mycars' className='nav-link'>
          <span className='nav-link-text'>DASHBOARD</span>
        </Link>
        )}
        <Link to='/carindex' className='nav-link'>
          <span className='nav-link-text'>VIEW LISTINGS</span>
        </Link>
        <div className='logo-container'>
          <Link to='/' className='logo-link'>
            <img src={GTAI} alt='Logo' className='logo-icon' />
          </Link>
        </div>
        {!current_user && (
          <>
        <Link to='/login' className='nav-link'>
          <span className='nav-link-text'>LOGIN</span>
        </Link>
        <Link to='/register' className='nav-link'>
          <span className='nav-link-text'>REGISTER</span>
        </Link>
        </>
          )}
      </Container>
      </nav>
  )
}

export default Navbar
