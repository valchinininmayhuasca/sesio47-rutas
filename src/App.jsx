import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Inicio } from './paginas/Inicio'
import { Nosotros } from './paginas/Nosotros'
import { Productos } from './paginas/Productos'
import { Detalle } from './paginas/Detalle'
import { FormContacto } from './paginas/Contacto' 
import {Navbar} from './componentes/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/nosotros' element={<Nosotros/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/productos/:id' element={<Detalle/>}></Route>
        <Route path='/contacto' element={<FormContacto/>}></Route>
      </Routes>
      
    </>
  )
}

export default App
