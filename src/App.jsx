import './App.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import Team from './pages/Team'
import Footer from './pages/Footer'
import { Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
