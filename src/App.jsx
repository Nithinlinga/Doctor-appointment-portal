
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Help from './components/Help'
import DoctorDetails from './components/Doctor/DoctorDetails'
import Layout from './Layout/Layout'
import Chambers from './components/chambers/Chambers'
import ChamberDetails from './components/chambers/ChamberDetails'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route path='' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/help' element={<Help/>}/>
        <Route path='/doctor-details/:id' element={<DoctorDetails/>}/>
        <Route path='/chamber' element={<Chambers/>}/>
        <Route path='/chamber-details/:id' element={<ChamberDetails/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
