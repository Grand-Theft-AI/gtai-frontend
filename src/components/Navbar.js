import { Link } from 'react-router-dom'
import Container from './Container'
import GTAI from '../assets/GTAI.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Container>
        <Link to='/' className='nav-link'>
          <span className='nav-link-text'>HOME</span>
        </Link>
        <Link to='/mycars' className='nav-link'>
          <span className='nav-link-text'>DASHBOARD</span>
        </Link>
        <Link to='/carindex' className='nav-link'>
          <span className='nav-link-text'>VIEW LISTINGS</span>
        </Link>
        <div className='logo-container'>
          <Link to='/' className='logo-link'>
            <img src={GTAI} alt='Logo' className='logo-icon' />
          </Link>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
