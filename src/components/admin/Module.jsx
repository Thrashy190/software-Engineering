// Modulo.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonModalDelete from "../course/ButtonModalDelete";
import TextField from "@mui/material/TextField";
import Leccion from "./Lection";
import { Button } from "@mui/material";
import { CContainer, CRow, CCol } from "@coreui/react";

const Modulo = ({ index, eliminarModulo, modulos, setModulos }) => {
  const [lecciones, setLecciones] = useState([]);
  const [expandedModule, setExpandedModule] = useState(null);
  const [name, setName] = useState("");

  const agregarLeccion = (tipo) => {
    setLecciones([...lecciones, { name: tipo }]);
  };

  const eliminarLeccion = (index) => {
    const nuevasLecciones = [...lecciones];
    nuevasLecciones.splice(index, 1);
    setLecciones(nuevasLecciones);
  };

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  const updateModuleNameInArray = (e, index) => {
    setName(e.target.value);
    const newModules = [...modulos];
    newModules[index].name = e.target.value;
    setModulos(newModules);
  };

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
          <CRow>
            <CCol>
              <TextField
                onChange={(e) => updateModuleNameInArray(e, index)}
                value={name}
                name="name-module"
                color="secondary"
                placeholder="Nombre Modulo"
              ></TextField>
            </CCol>
          </CRow>
          {lecciones.map((leccion, leccionIndex) => (
            <Leccion
              setLecciones={setLecciones}
              lecciones={lecciones}
              eliminarLeccion={eliminarLeccion}
              key={leccionIndex}
              leccion={leccion}
              index={leccionIndex}
            />
          ))}
          <CRow className="py-4 flex justify-end">
            <CCol>
              <ButtonModalDelete eliminarModulo={eliminarModulo} name={name} />
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
