// src/componentes/Comentarios.jsx
import React, { useState } from "react";
import { comentariosProducto } from "../assets/comentarios"; // ❌ sin .jsx

export function Comentarios() {
  const [comentarios] = useState(comentariosProducto.comentarios);

  return (
    <div>
      <h2>Comentarios sobre: {comentariosProducto.nombreDelProducto}</h2>
      <p>Total de opiniones: {comentariosProducto.totalComentarios}</p>

      {comentarios.map((comentario) => (
        <div
          key={comentario.id}
          style={{
            border: "1px solid #ccc",
            margin: "10px 0",
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "#f9f9f9"
          }}
        >
          <strong>{comentario.usuario}</strong>
          <p>{comentario.mensaje}</p>
        </div>
      ))}
    </div>
  );
}

