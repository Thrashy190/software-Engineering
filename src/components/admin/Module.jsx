// Modulo.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Leccion from "./Lection";
import { Button } from "@mui/material";
import { CContainer, CRow, CCol } from "@coreui/react";

const Modulo = ({ index, eliminarModulo }) => {
  const [lecciones, setLecciones] = useState([]);

  const agregarLeccion = (tipo) => {
    // Lógica para agregar lección según el tipo (video o documento)
    setLecciones([...lecciones, { name: tipo }]);
  };

  const eliminarLeccion = (index) => {
    const nuevasLecciones = [...lecciones];
    nuevasLecciones.splice(index, 1);
    setLecciones(nuevasLecciones);
  };

  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  // Otras funciones para manejar la eliminación de lecciones y preguntas

  return (
    <div
      key={index}
      className={`rounded p-4 my-4 cursor-pointer relative  bg-[#FAD264]`}
    >
      <div
        className={`flex items-center justify-between ${
          expandedModule === index ? "pb-3" : ""
        }`}
      >
        <div className={`text-xl font-bold "text-black }`}>
          Modulo {index + 1}
        </div>

        <div className="flex flex-row gap-4">
          <div
            className={`transition-transform transform ${
              expandedModule === index ? "rotate-180" : ""
            }`}
            style={{
              color: "#000000",
            }}
            onClick={() => toggleModule(index)}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </div>
        </div>
      </div>
      {expandedModule === index && (
        <CContainer className="flex flex-col">
          {lecciones.map((leccion, leccionIndex) => (
            <Leccion
              eliminarLeccion={eliminarLeccion}
              key={leccionIndex}
              leccion={leccion}
              index={leccionIndex}
            />
          ))}
          <CRow className="py-4 flex justify-end">
            <CCol>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => eliminarModulo(index)}
              >
                Eliminar Módulo
              </Button>
            </CCol>
            <CCol>
              <Button
                variant="contained"
                color="secondary"
                onClick={() => agregarLeccion("video")}
              >
                Agregar Lección de Video
              </Button>
            </CCol>
            <CCol>
              <Button
                color="secondary"
                variant="contained"
                onClick={() => agregarLeccion("documento")}
              >
                Agregar Lección de Documento
              </Button>
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Modulo;
