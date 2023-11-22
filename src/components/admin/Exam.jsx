// Examen.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CContainer, CRow, CCol } from "@coreui/react";
import { TextField, Button } from "@mui/material";

const Examen = ({ examen, agregarPregunta }) => {
  const [expandedModule, setExpandedModule] = useState(false);

  const toggleModule = () => {
    setExpandedModule((prev) => !prev);
  };
  return (
    <div className={`rounded p-4 my-2 cursor-pointer relative  bg-white`}>
      <div className={`flex items-center justify-between`}>
        <div className="flex flex-row gap-4">
          <div className={`text-lg font-bold text-black`}>Examen</div>
          {expandedModule ? (
            <Button variant="contained" onClick={agregarPregunta}>
              Agregar pregunta
            </Button>
          ) : null}
        </div>
        <div className="flex flex-row gap-4">
          <div
            className={`transition-transform transform ${
              expandedModule ? "rotate-180" : ""
            }`}
            style={{
              color: "#000000",
            }}
            onClick={() => toggleModule()}
          >
            <KeyboardArrowDownIcon fontSize="large" />
          </div>
        </div>
      </div>
      {expandedModule && (
        <CContainer className="flex flex-col">
          <CRow className="pt-4">
            <CCol>
              <TextField fullWidth name="summary" placeholder="Pregunta" />
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol>
              <TextField fullWidth name="summary" placeholder="Respuesta 1" />
            </CCol>
            <CCol>
              <TextField fullWidth name="summary" placeholder="Respuesta 2" />
            </CCol>
            <CCol>
              <TextField fullWidth name="summary" placeholder="Respuesta 3" />
            </CCol>
            <CCol>
              <TextField fullWidth name="summary" placeholder="Respuesta 4" />
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Examen;
