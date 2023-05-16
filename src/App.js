import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import CarNew from './pages/CarNew'
import CarShow from './pages/CarShow'
import Dashboard from './pages/Dashboard'
import MyCars from './pages/MyCars'
import NotFound from './pages/NotFound'
import ProtectedCarIndex from './pages/ProtectedCarIndex'
import AboutUs from './pages/AboutUs'
import CarIndex from './pages/CarIndex'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/carnew' element={<CarNew />} />
        <Route path='/carshow' element={<CarShow />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/mycars' element={<MyCars />} />
        <Route path='/protectedcarindex' element={<ProtectedCarIndex />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/carindex' element={<CarIndex />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
