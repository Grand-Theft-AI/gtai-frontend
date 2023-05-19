import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import sell from '../assets/sell.png'

const Register = ({ register }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    register(email, password)
  }

  return (
    <div className='grid lg:grid-cols-2 min-h-screen'>
      <div className='bg-black hidden lg:block shadow-xl shadow-black'>
        <img src={sell} alt='Sell' className='w-full h-auto' />
      </div>

      <div className='flex flex-col items-center justify-center p-2 gap-2'>
        <h2 className='font-heading font-bold text-2xl text-center'>
          Register
        </h2>

        <form
          onSubmit={handleSubmit}
          className='max-w-xs w-full flex flex-col gap-2'
        >
          <div className='flex flex-col'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              id='email'
              className='py-2 px-4 w-full flex-1 block border border-white bg-transparent'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              className='py-2 px-4 w-full flex-1 block border border-black border-white bg-transparent'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type='submit' className='bg-red-900 py-2 px-4 text-white'>
            Register
          </button>
        </form>
        <span>
          Already have an account?{' '}
          <NavLink to='/login' className='text-blue-400'>
            Login
          </NavLink>
        </span>
      </div>
    </div>
  )
}

export default Register
