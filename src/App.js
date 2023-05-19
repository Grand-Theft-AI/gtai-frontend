import { Routes, Route } from 'react-router-dom'
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

const BASE_URL = 'http://localhost:3000'

const App = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const [cars, setCars] = useState(mockCars)

  const createCar = (car) => {
    console.log(car)
  }

  const readCars = () => {
    fetch(`${BASE_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((error) => console.error('Car read error: ', error))
  }

  const updateCar = (newCar, id) => {
    fetch(`${BASE_URL}/cars/${id}`, {
      body: JSON.stringify(newCar),
      headers: {
        "Conent-Type": "application/json"
      },
      method: "PATCH"
    })
    .then(response => response.json())
    .then(() => readCars())
    .catch(error => console.log("Updated car errors: ", error))
  }

  const deleteCar = (id) => {
    console.log('Delete car', id)
  }

  const register = (email, passowrd) => {
    console.log('register', email, passowrd)
  }

  const login = (email, password) => {
    console.log('login', email, password)
  }

  useEffect(() => {
    readCars()
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carnew' element={<CarNew createCar={createCar} />} />
          <Route
            path='/carshow/:id'
            element={<CarShow cars={cars} current_user={currentUser} />}
          />
          <Route
            path='/caredit/:id'
            element={<CarEdit cars={cars} updateCar={updateCar} deleteCar={deleteCar} current_user={currentUser} />}
          />
          <Route path='/mycars' element={<MyCars cars={cars} current_user={currentUser} />} />
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
