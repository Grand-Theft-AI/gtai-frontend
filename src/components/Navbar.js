import { NavLink } from 'react-router-dom'
import Container from './Container'

export const Navbar = () => {
  return (
    <nav className='border-b border-stone-300 py-2'>
      <Container className='flex items-center justify-between'>
        <NavLink to='/' className='font-bold'>
          <span className='hidden sm:block'>Global Technology Asset Investment</span>
          <span className='sm:hidden'>GTAI</span>
        </NavLink>

        <div className='flex gap-4'>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/register'>Register</NavLink>
          <NavLink to='/carindex'>View Listings</NavLink>
        </div>
      </Container>
    </nav>
  )
}
