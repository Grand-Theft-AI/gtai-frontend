import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import sell from '../assets/sell.png'
import LabeledInput from '../components/LabeledInput'

const Register = ({ register }) => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    register(email, password)
    navigate('/mycars')
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
          <LabeledInput
            label='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LabeledInput
            label='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
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
