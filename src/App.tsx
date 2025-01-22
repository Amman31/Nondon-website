import './App.css'
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar'
import AboutUs from './sections/AboutUs'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Location from './sections/Location'
import Menu from './sections/Menu'
import Offers from './sections/Offers'
import Gallery from './sections/Gallery';

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/location' element={<Location />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/offers' element={<Offers />} />
      </Routes>
    </HashRouter>
  )
}

export default App
