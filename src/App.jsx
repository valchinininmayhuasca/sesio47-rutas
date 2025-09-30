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
