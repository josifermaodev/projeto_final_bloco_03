import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './pages/home/Home'
import FormCategoria from './components/categorias/formcategoria/FormCategoria'
import ListaCategorias from './components/categorias/listacategorias/ListaCategorias'
import DeletarCategoria from './components/categorias/deletarcategoria/DeletarCategoria'

function App() {
  

  return (
    <>
      <BrowserRouter>
          <Navbar />
          <div className="min-h-[80vh] font-display">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/categorias" element={<ListaCategorias />} />
                  <Route path="/cadastrarcategoria" element={<FormCategoria />} />
                  <Route path="/editarcategoria/:id" element={<FormCategoria />} />
                  <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
              </Routes>
          </div>
          <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
