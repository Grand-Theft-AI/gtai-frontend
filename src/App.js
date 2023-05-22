import { Routes, Route, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarNew from './pages/CarNew'
import CarShow from './pages/CarShow'
import CarEdit from './pages/CarEdit'
import MyCars from './pages/MyCars'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import CarIndex from './pages/CarIndex'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import mockCars from './mockCars'

const BASE_URL = 'https://gtai-backend.onrender.com'

const App = () => {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(null)

  const [cars, setCars] = useState(mockCars)

  const createCar = (newCar) => {
    fetch(`${BASE_URL}/cars`, {
      body: JSON.stringify(newCar),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then(() => readCars())
      .catch((error) => console.error('Car create error: ', error))
  }

  const readCars = () => {
    fetch(`${BASE_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Car read error: ', error))
  }

  const updateCar = (newCar) => {
    fetch(`${BASE_URL}/cars/${newCar.id}`, {
      body: JSON.stringify(newCar),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PATCH',
    })
      .then((response) => response.json())
      .then(() => readCars())
      .catch((error) => console.log('Updated car errors: ', error))
  }

  const deleteCar = (id) => {
    fetch(`${BASE_URL}/cars/${id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => readCars())
      .catch((error) => console.log('Car delete error', error, id))
  }

  const register = (email, password) => {
    const userInfo = {
      user: { email, password },
    }

    fetch(`${BASE_URL}/register`, {
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((res) => {
        localStorage.setItem('token', res.headers.get('Authorization'))
        return res.json()
      })
      .then((data) => {
        if (data?.error) {
          console.error(data.error)
        } else {
          setCurrentUser(data)
        }
      })
  }

  const login = (email, password) => {
    const userInfo = {
      user: { email, password },
    }

    fetch(`${BASE_URL}/login`, {
      body: JSON.stringify(userInfo),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      method: 'POST',
    })
      .then((res) => {
        localStorage.setItem('token', res.headers.get('Authorization'))
        return res.json()
      })
      .then((data) => {
        console.log(data)
        if (data?.error) {
          console.error(data.error)
        } else {
          setCurrentUser(data)
        }
      })
  }

  const logout = () => {
    fetch('BASE_URL', {
      headers: {
        "Content-Type": 'application/json',
        "Authorization": localStorage.getItem("token") //retrieve the token 
      },
      method: 'DELETE'
    })
    .then(payload => {
    localStorage.removeItem("token")  // remove the token
    navigate('/')
    setCurrentUser(payload)
  })
  .catch(error => console.log("log out errors: ", error))
  }

  useEffect(() => {
    readCars()
  }, [])

  return (
    <>
      <Navbar current_user={currentUser} logout={logout}/>
      <main className='flex-1'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carnew' element={<CarNew createCar={createCar} />} />
          <Route
            path='/carshow/:id'
            element={<CarShow cars={cars} current_user={currentUser} />}
          />
          <Route
            path='/caredit/:id'
            element={
              <CarEdit
                cars={cars}
                updateCar={updateCar}
                deleteCar={deleteCar}
                current_user={currentUser}
              />
            }
          />
          <Route
            path='/mycars'
            element={<MyCars cars={cars} current_user={currentUser} />}
          />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/carindex' element={<CarIndex cars={cars} />} />
          <Route path='/login' element={<Login login={login} />} />
          <Route path='/register' element={<Register register={register} />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
