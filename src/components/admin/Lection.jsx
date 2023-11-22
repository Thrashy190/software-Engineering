// Leccion.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CContainer, CRow, CCol } from "@coreui/react";
import { TextField, Button } from "@mui/material";

const Leccion = ({ leccion, index, eliminarLeccion }) => {
  const [expandedModule, setExpandedModule] = useState(null);

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  return (
    <div className={`rounded p-4 my-2 cursor-pointer relative  bg-white`}>
      <div className={`flex items-center justify-between`}>
        <div className="flex flex-row gap-4">
          <div className={`text-lg font-bold text-black }`}>
            Leccion {index + 1} {leccion.name}
          </div>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => eliminarLeccion(index)}
          >
            Eliminar Leccion
          </Button>
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
          {leccion.name === "documento" ? null : (
            <CRow className="pt-4">
              <CCol>
                <input type="file" />
              </CCol>
            </CRow>
          )}
          <CRow className="pt-4">
            <CCol>
              <TextField
                fullWidth
                name="summary"
                placeholder="Resumen del curso"
              />
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol>
              <TextField
                fullWidth
                name="summary"
                multiline
                rows={10}
                placeholder="Resumen del curso"
              />
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol>
              <input type="file" />
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Leccion;
