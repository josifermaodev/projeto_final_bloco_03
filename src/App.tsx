import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] font-display">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
              </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
