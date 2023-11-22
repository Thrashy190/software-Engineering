// Examen.js
import React from "react";

const Examen = ({ examen, agregarPregunta }) => {
  // Lógica para renderizar preguntas y respuestas
  return (
    <div>
      <button onClick={agregarPregunta}>Agregar Pregunta</button>
      {/* Renderizar preguntas y respuestas */}
    </div>
  );
};

export default Examen;
