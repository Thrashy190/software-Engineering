// Modulo.js
import React, { useEffect, useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ButtonModalDelete from "../course/ButtonModalDelete";
import TextField from "@mui/material/TextField";
import Leccion from "./Lection";
import { Button } from "@mui/material";
import { CContainer, CRow, CCol } from "@coreui/react";
import { getCollection, getDocument } from "../../firebase/firestore.js";

const Modulo = ({
  index,
  modulo,
  eliminarModulo,
  modulos,
  setModulos,
  courseId,
  lecciones,
  setLecciones,
}) => {
  const [expandedModule, setExpandedModule] = useState(null);
  const [name, setName] = useState(modulo.name ?? "");
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLecciones(
        await getCollection(`courses/${courseId}/modules/${modulo.id}/lessons`)
      );
      setIsLoading(false);
    } catch (error) {
      console.error("Error al obtener la imagen:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const agregarLeccion = (tipo) => {
    setLecciones([...lecciones, { name: tipo, id: new Date().getTime() }]);
  };

  const eliminarLeccion = (index) => {
    const nuevasLecciones = [...lecciones];
    nuevasLecciones.splice(index, 1);
    setLecciones(nuevasLecciones);
  };

  const toggleModule = (index) => {
    setExpandedModule((prev) => (prev === index ? null : index));
  };

  const updateModuleNameInArray = (e) => {
    setName(e.target.value);
    const newModules = [...modulos];
    newModules[index].name = e.target.value;
    setModulos(newModules);
  };

  return (
    <>
      {isLoading ? (
        <div>loading</div>
      ) : (
        <div
          key={modulo.id}
          className={`rounded p-4 my-4 cursor-pointer relative  bg-[#FAD264]`}
        >
          <div
            className={`flex items-center justify-between ${
              expandedModule === modulo.id ? "pb-3" : ""
            }`}
          >
            <div className={`text-xl font-bold "text-black }`}>
              Modulo {index + 1}
            </div>

            <div className="flex flex-row gap-4">
              <div
                className={`transition-transform transform ${
                  expandedModule === modulo.id ? "rotate-180" : ""
                }`}
                style={{
                  color: "#000000",
                }}
                onClick={() => toggleModule(modulo.id)}
              >
                <KeyboardArrowDownIcon fontSize="large" />
              </div>
            </div>
          </div>
          {expandedModule === modulo.id && (
            <CContainer className="flex flex-col">
              <CRow>
                <CCol>
                  <TextField
                    onChange={(e) => updateModuleNameInArray(e)}
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
                  key={leccion.id}
                  indexModule={index}
                  leccion={leccion}
                  index={leccionIndex}
                  setModulos={setModulos}
                  modulos={modulos}
                />
              ))}
              <CRow className="py-4 flex justify-end">
                <CCol>
                  <ButtonModalDelete
                    eliminarModulo={eliminarModulo}
                    name={name}
                  />
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
      )}
    </>
  );
};

export default Modulo;
