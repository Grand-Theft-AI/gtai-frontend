import { useState } from 'react'
import { Link } from 'react-router-dom'
import GTAI from '../assets/GTAI.png'
import Container from './Container'
import { Menu, Close } from './icons'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Navbar = ({ current_user, logout }) => {
  const [menuButton] = useAutoAnimate()

  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    setShowNav((prev) => !prev)
  }

  return (
    <nav className='bg-black/50 backdrop-blur'>
      <Container className='flex md:flex-row flex-col md:items-center justify-between'>
        <div className='flex items-center justify-between flex-1'>
        <Link to='/' className='logo-link'>
          <img src={GTAI} alt='Logo' className='w-20 h-20 object-contain' />
        </Link>

        <button
          onClick={toggleNav}
          className='bg-white/5 hover:bg-white/20 focus:bg-white/20 outline-none rounded-md h-[36px] w-[36px] flex items-center justify-center md:hidden'
          ref={menuButton}
        >
          {showNav ? <Close /> : <Menu />}
        </button>
        </div>

        <div className={`items-center md:flex ${showNav ? '' : 'hidden'}`}>
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
              <Link to='/' className='nav-link'>
                <span className='nav-link-text' onClick={logout}>
                  LOG OUT
                </span>
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
        </div>
      </Container>
    </nav>
  )
}

export default Navbar
