import React, { useState } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import {
  Button,
  TextField,
  Slider,
  OutlinedInput,
  InputAdornment,
  Hidden,
} from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { addDocument } from "../../firebase/firestore";
import { uploadFile } from "../../firebase/storage";
import Modulo from "../../components/admin/Module";

const marks = [
  {
    value: 1,
    label: "Principiante",
  },
  {
    value: 2,
    label: "Intermedio",
  },
  {
    value: 3,
    label: "Avanzado",
  },
];

const CourseCreator = () => {
  const [data, setData] = React.useState({
    title: "",
    summary: "",
    level: 1,
    price: 0,
    description: "",
    target: "",
  });
  const [modulos, setModulos] = useState([]);

  const agregarModulo = () => {
    setModulos([...modulos, {}]); // Puedes inicializar el módulo con la información predeterminada aquí
  };

  const eliminarModulo = (index) => {
    const nuevosModulos = [...modulos];
    nuevosModulos.splice(index, 1);
    setModulos(nuevosModulos);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const { title, summary, level, price, description, target } = data;
    const course = {
      title,
      summary,
      level,
      price,
      description,
      target,
      status: "draft",
      createdAt: new Date(),
    };
    addDocument("courses", course);
  };

  const handleCreate = () => {
    const { title, summary, level, price, description, target } = data;
    const course = {
      title,
      summary,
      level,
      price,
      description,
      target,
      status: "published",
      createdAt: new Date(),
    };
    addDocument("courses", course);
  };

  return (
    <>
      <CContainer className="min-h-screen pt-10">
        <CRow className="pb-10">
          <CCol>
            <div className="text-4xl font-bold text-[#67237E]">
              Crear nuevo curso
            </div>
          </CCol>
          <CCol className="flex justify-end">
            <div className="flex gap-4">
              <Button variant="contained" onClick={handleCreate}>
                Crear curso
              </Button>
              <Button variant="contained" onClick={handleSave}>
                Guardar curso
              </Button>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="flex gap-4 flex-col">
            <CRow>
              <CCol>
                <TextField
                  onChange={handleChange}
                  name="title"
                  value={data.title}
                  fullWidth
                  placeholder="Titulo"
                />
              </CCol>
            </CRow>
            <CRow>
              <CCol>
                <TextField
                  onChange={handleChange}
                  fullWidth
                  name="summary"
                  value={data.summary}
                  multiline
                  rows={10}
                  placeholder="Resumen del curso"
                />
              </CCol>
            </CRow>
            <CRow className="pb-5">
              <CCol className="mx-5">
                <Slider
                  onChange={handleChange}
                  name="level"
                  value={data.level}
                  aria-label="Nivel"
                  defaultValue={1}
                  valueLabelDisplay="auto"
                  step={1}
                  marks={marks}
                  min={1}
                  max={3}
                />
              </CCol>
            </CRow>
          </CCol>
          <CCol>
            <label
              htmlFor="raised-button-file"
              className="h-3/4 w-full pb-10 border-dashed border-5 rounded-lg border-[#67237E]"
            >
              <div
                className="h-full w-full flex justify-center items-center flex-col"
                component="span"
              >
                <FileUploadIcon sx={{ fontSize: 150 }} color="secondary" />
                <div className="text-3xl">Subir miniatura</div>
              </div>
              <input
                accept="image/*"
                id="raised-button-file"
                type="file"
                style={{ display: "none" }}
              />
            </label>
            <CRow className="py-10">
              <CCol>
                <OutlinedInput
                  onChange={handleChange}
                  placeholder="Precio"
                  fullWidth
                  name="price"
                  value={data.price}
                  type="number"
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                />
              </CCol>
            </CRow>
          </CCol>
        </CRow>
        <CRow className="pb-10">
          <CCol>
            <TextField
              onChange={handleChange}
              fullWidth
              name="description"
              value={data.description}
              multiline
              rows={10}
              placeholder="Que vas a aprender en este curso?"
            />
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <TextField
              onChange={handleChange}
              fullWidth
              name="target"
              value={data.target}
              multiline
              rows={10}
              placeholder="Para quien va dirigido este curso?"
            />
          </CCol>
        </CRow>
        <CRow className="pt-10">
          <CCol>
            <div className="text-2xl font-bold text-[#67237E]">
              Modulos / Lecciones / Examenes
            </div>
          </CCol>
        </CRow>
        <div>
          {modulos.map((modulo, index) => (
            <Modulo key={index} index={index} eliminarModulo={eliminarModulo} />
          ))}
          <Button variant="contained" onClick={agregarModulo}>
            Agregar Módulo
          </Button>
        </div>
        <CRow className="py-10">
          <CCol className="flex justify-end">
            <div className="flex gap-4">
              <Button variant="contained">Crear curso</Button>
              <Button variant="contained">Guardar curso</Button>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default CourseCreator;
