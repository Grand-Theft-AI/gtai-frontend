import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarNew from './pages/CarNew'
import CarShow from './pages/CarShow'
import Dashboard from './pages/Dashboard'
import MyCars from './pages/MyCars'
import NotFound from './pages/NotFound'
import AboutUs from './pages/AboutUs'
import CarIndex from './pages/CarIndex'
import Login from './pages/Login'
import Register from './pages/Register'
import './App.css'
import mockCars from './mockCars'

const App = () => {

  const [currentUser, setCurrentUser] = useState(null)

  const [cars, setCars] = useState(mockCars)

  const addCar = (car) => {
    console.log(car)
  }

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/carnew' element={<CarNew addCar={addCar} />} />
          <Route path='/carshow/:id' element={<CarShow cars={cars} current_user={currentUser}/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/mycars' element={<MyCars />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/carindex' element={<CarIndex />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
