// Modulo.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ArticleIcon from "@mui/icons-material/Article";
import QuizIcon from "@mui/icons-material/Quiz";
import Leccion from "./Lection";
import Examen from "./Exam";

const Modulo = ({ index, eliminarModulo }) => {
  const [lecciones, setLecciones] = useState([]);
  const [examen, setExamen] = useState({ preguntas: [] });

  const agregarLeccion = (tipo) => {
    // Lógica para agregar lección según el tipo (video o documento)
    setLecciones([...lecciones, { tipo }]);
  };

  const agregarPregunta = () => {
    // Lógica para agregar pregunta al examen
    setExamen({ preguntas: [...examen.preguntas, { respuestas: [] }] });
  };

  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  // Otras funciones para manejar la eliminación de lecciones y preguntas

  return (
    <div
      key={index}
      className={` rounded p-4 my-4 cursor-pointer relative ${
        expandedModule === index
          ? "bg-transparent border-[#FAD264] border-2"
          : "bg-[#FAD264]"
      }`}
    >
      <div
        className={`flex items-center justify-between ${
          expandedModule === index ? "pb-3" : ""
        }`}
      >
        <div
          className={`text-xl font-bold ${
            expandedModule === index ? "text-[#FAD264] " : "text-black "
          }`}
        >
          titulo
        </div>
        <div className="flex flex-row gap-4">
          <div
            className={`pt-1 text-xl font-bold ${
              expandedModule === index ? "text-[#FAD264] " : "text-black "
            }`}
          >
            duracion
          </div>
          <div
            className={`transition-transform transform ${
              expandedModule === index ? "rotate-180" : ""
            }`}
            style={{
              color: expandedModule === index ? "#FAD264" : "#000000",
            }}
            onClick={() => toggleModule(index)}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </div>
        </div>
      </div>
      {expandedModule === index && (
        <div className="flex flex-col">
          <button onClick={() => eliminarModulo(index)}>Eliminar Módulo</button>
          <button onClick={() => agregarLeccion("video")}>
            Agregar Lección de Video
          </button>
          <button onClick={() => agregarLeccion("documento")}>
            Agregar Lección de Documento
          </button>

          {lecciones.map((leccion, leccionIndex) => (
            <Leccion key={leccionIndex} leccion={leccion} />
          ))}

          <Examen examen={examen} agregarPregunta={agregarPregunta} />
        </div>
      )}
    </div>
  );
};

export default Modulo;
