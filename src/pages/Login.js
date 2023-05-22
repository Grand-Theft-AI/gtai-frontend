import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import sketchy from '../assets/sketchy.png'
import LabeledInput from '../components/LabeledInput'
import Button from '../components/Button'

const Login = ({ login }) => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')

  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
    navigate('/mycars')
  }

  return (
    <div className='grid lg:grid-cols-2 min-h-screen'>
      <div className='bg-black hidden lg:block shadow-xl shadow-black'>
        <img src={sketchy} alt='Sketchy' className='w-full h-auto' />
      </div>

      <div className='flex flex-col items-center justify-center p-2 gap-2'>
        <h2 className='font-header font-bold text-3xl text-center'>Login</h2>

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
          <Button type='submit'>Login</Button>
        </form>
        <span>
          Don't have an account?{' '}
          <NavLink to='/register' className='text-blue-400'>
            Register
          </NavLink>
        </span>
      </div>
    </div>
  )
}

export default Login
