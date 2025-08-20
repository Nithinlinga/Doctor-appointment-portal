
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import ContactUs from './components/ContactUs'
import Help from './components/Help'

function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact-us' element={<ContactUs/>}/>
        <Route path='/help' element={<Help/>}/>
      </Routes>
    </>
  )
}

export default App
