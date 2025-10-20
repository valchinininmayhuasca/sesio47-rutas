import "./App.css";

import { Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "./paginas/Inicio";
import { Nosotros } from "./paginas/Nosotros";
import { Productos } from "./paginas/Productos";
import { Detalle } from "./paginas/Detalle";
import { FormContacto } from "./paginas/Contacto";
import Especial from "./paginas/Especial";
import LayoutPrincipal from "./layouts/LayoutPrincipal";
import LayoutVacio from "./layouts/layoutvacio";

function App() {
  return (
    <>
      <Routes>

        <Route element={<LayoutPrincipal />} >
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/nosotros' element={<Nosotros />}></Route>
          <Route path='/productos' element={<Productos />}></Route>
          <Route path='/productos/:id' element={<Detalle />}></Route>
          <Route path='/contacto' element={<FormContacto />}></Route>
        </Route>

        <Route element={<LayoutVacio />}>
          <Route path="/especial" element={<Especial />} />
        </Route>

        {/* fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
 
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Inicio } from "./pagina/Inicio";
import { Nosotros } from "./pagina/Nosotros";
import { Productos } from "./pagina/Productos";
import { Navbar }from "./componentes/navbar";

function App() {
  return (
  <>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Inicio/>}></Route>
    <Route path="/nosotros" element={<Nosotros/>}></Route>
    <Route path="/productos" element={<Productos/>}></Route>
  </Routes>
  </>
  )
}

export default App;
