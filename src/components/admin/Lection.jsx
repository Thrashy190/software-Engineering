// Leccion.js
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { CContainer, CRow, CCol } from "@coreui/react";
import { TextField, Button } from "@mui/material";
import { uploadFiles } from "../../firebase/storage";
import { async } from "@firebase/util";

const Leccion = ({
  leccion,
  index,
  indexModule,
  eliminarLeccion,
  modulos,
  setModulos,
  lecciones,
  setLecciones,
}) => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [data, setData] = useState(
    leccion ?? {
      tipo: leccion.name,
      summary: "",
      title: "",
      video: "",
    }
  );

  const updateLeccionInputsValues = async (e) => {
    const newLecciones = [...lecciones];

    if (e.target.name === "video") {
      await uploadFiles(e.target.files[0], "video").then((url) => {
        console.log(url);
        newLecciones[index].video = url.fullPath;
      });
    }

    if (e.target.name === "extra") {
      await uploadFiles(e.target.files[0], "extra").then((url) => {
        console.log(url);
        newLecciones[index].extra = url.fullPath;
      });
    }

    if (e.target.name === "title") {
      newLecciones[index].title = e.target.value;
      setData({ ...data, title: e.target.value });
    }
    if (e.target.name === "summary") {
      newLecciones[index].summary = e.target.value;
      setData({ ...data, summary: e.target.value });
    }
    console.log("despues");
    setLecciones(newLecciones);
    updateModuleLeccion();
  };

  const updateModuleLeccion = () => {
    const newModules = [...modulos];
    newModules[indexModule].leccion = lecciones;
    setModulos(newModules);
  };

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
                <input
                  type="file"
                  accept="video/*"
                  onChange={updateLeccionInputsValues}
                  name="video"
                />
              </CCol>
            </CRow>
          )}
          <CRow className="pt-4">
            <CCol>
              <TextField
                onChange={updateLeccionInputsValues}
                value={data.title}
                fullWidth
                name="title"
                placeholder="Titulo"
              />
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol>
              <TextField
                onChange={updateLeccionInputsValues}
                value={data.summary}
                fullWidth
                name="summary"
                multiline
                rows={10}
                placeholder="Resumen del curso"
              />
            </CCol>
          </CRow>
        </CContainer>
      )}
    </div>
  );
};

export default Leccion;
