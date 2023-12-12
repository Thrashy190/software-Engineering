import React, { useState } from "react";
import { CCol, CContainer, CRow } from "@coreui/react";
import QuestionsManager from "../../components/admin/Exam";
import {
  Button,
  TextField,
  Slider,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import {
  addDocument,
  createCourse,
  updateDocument,
} from "../../firebase/firestore";
import { uploadFiles } from "../../firebase/storage";
import Modulo from "../../components/admin/Module";
import DataTable from "../../components/admin/DataTable";
import Notification from "../../components/shared/Notifications";
import { useNavigate } from "react-router-dom";
import { createProduct } from "../../stripe/stripe";

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  {
    field: "createdAt",
    headerName: "Fecha de creacion",
    width: 160,
    valueGetter: (params) =>
      `${
        params.row.createdAt &&
        params.row.createdAt.toDate().toLocaleDateString("es-MX")
      }`,
  },
  { field: "name", headerName: "Nombre(s)", width: 130 },
  { field: "lastname", headerName: "Apellidos", width: 130 },
  {
    field: "fullName",
    headerName: "Nombre completo",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.name || ""} ${params.row.lastname || ""}`,
  },
  {
    field: "email",
    headerName: "Correo electrónico",
    width: 160,
  },

  {
    field: "role",
    headerName: "Rol",
    width: 160,
  },
];

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

const SaveCourse = (props) => {
  const { courseParams, existingModules, courseId } = props;
  const isNew = !courseParams;
  const navigate = useNavigate();

  const [modulos, setModulos] = useState(existingModules ?? []);
  const [file, setFile] = useState(null);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const initialData = {
    title: "",
    summary: "",
    level: 1,
    price: null,
    description: "",
    target: "",
  };
  const [data, setData] = React.useState(courseParams ?? initialData);
  const agregarModulo = () => {
    setModulos([...modulos, { id: new Date().getTime() }]);
  };

  const eliminarModulo = (index) => {
    const nuevosModulos = [...modulos];
    nuevosModulos.splice(index, 1);
    setModulos(nuevosModulos);
  };

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // const agregarPregunta = () => {
  //   setExamen({ preguntas: [...examen.preguntas, { respuestas: [] }] });
  // };

  const handleSave = async () => {
    console.log("modulos", modulos);

    if (!isNew) {
      const { title, summary, level, price, description, target, thumbnail } =
        data;
      const course = {
        title,
        summary,
        level,
        price,
        description,
        target,
        status: "draft",
        createdAt: new Date(),
        reviews: [],
        thumbnail,
      };
      await updateDocument(
        "courses",
        courseId,
        course,
        modulos,
        lecciones
      ).then((response) => {
        console.log(response);
        setNotify({
          isOpen: true,
          message: "Curso actualizado con exito",
          type: "success",
        });
        navigate("/admin/courses");
      });
    }

    if (!file) {
    } else {
      await uploadFiles(file, "miniaturas").then(async (response) => {
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
          reviews: [],
          thumbnail: response.fullPath,
        };
        await createCourse("courses", course, modulos).then((response) => {
          console.log(response);
          setNotify({
            isOpen: true,
            message: "Curso guardado con exito",
            type: "success",
          });
          navigate("/admin/courses");
        });
      });
    }
  };

  const addImage = (e) => {
    e.preventDefault();
    setFile(e.target.files[0]);
  };

  const handlePublish = async () => {
    !isNew ? await updateAndPublish() : await saveAndPublish();
  };

  const saveAndPublish = async () => {
    await uploadFiles(file, "miniaturas").then(async (response) => {
      const { title, summary, level, price, description, target } = data;
      const stripeId = await createProduct(title, description, price);
      const course = {
        title,
        summary,
        level,
        price,
        priceId: stripeId,
        description,
        target,
        status: "published",
        createdAt: new Date(),
        reviews: [],
        thumbnail: response.fullPath,
      };
      await createCourse("courses", course, modulos)
        .then((response) => {
          console.log(response);
          setNotify({
            isOpen: true,
            message: "Curso guardado con exito",
            type: "success",
          });
        })
        .then(() => {
          navigate("/admin/courses");
        });
    });
  };

  const updateAndPublish = async () => {
    const { title, summary, level, price, description, target, priceId } = data;

    let course = {
      title,
      summary,
      level,
      price,
      description,
      target,
      status: "published",
      updatedAt: new Date(),
    };

    if (!priceId) {
      const stripeId = await createProduct(title, description, price);
      course = {
        title,
        summary,
        priceId: stripeId,
        level,
        price,
        description,
        target,
        status: "published",
        updatedAt: new Date(),
      };
    }

    await updateDocument("courses", courseId, course, modulos)
      .then((response) => {
        console.log(response);
        setNotify({
          isOpen: true,
          message: "Curso actualizado con exito",
          type: "success",
        });
      })
      .then(() => {
        navigate("/admin/courses");
      });
  };

  return (
    <>
      <CContainer className="min-h-screen pt-10">
        <CRow className="pb-10">
          <CCol>
            <div className="text-4xl font-bold text-[#67237E]">
              {isNew ? "Crear nuevo curso" : "Editar curso"}
            </div>
          </CCol>
          <CCol className="flex justify-end">
            <div className="flex gap-4">
              <Button variant="contained" onClick={handlePublish}>
                {isNew ? "Publicar" : "Editar y publicar"}
              </Button>
              <Button variant="contained" onClick={handleSave}>
                Guardar curso
              </Button>
            </div>
          </CCol>
        </CRow>
        <CRow>
          {isNew ? null : (
            <CCol className="flex pb-6">
              <DataTable
                columns={columns}
                collection={"usersfilter"}
                courseId={courseId}
              />
            </CCol>
          )}
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
            <CRow className="pb-5">
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
          </CCol>
          <CCol>
            <input
              onChange={addImage}
              accept="image/*"
              id="raised-button-file"
              type="file"
            />
            <CRow className="py-10">
              <CCol>
                <OutlinedInput
                  onChange={handleChange}
                  placeholder="Precio"
                  disabled={!isNew}
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
            {!isNew && (
              <CRow className="py-10">
                <CCol>
                  <OutlinedInput
                    onChange={handleChange}
                    placeholder="priceId"
                    disabled={true}
                    fullWidth
                    value={data.priceId}
                    id="outlined-adornment-amount"
                  />
                </CCol>
              </CRow>
            )}
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
              Modulos / Lecciones
            </div>
          </CCol>
        </CRow>
        <div className="py-4">
          {modulos.map((modulo, index) => (
            <Modulo
              key={modulo.id}
              index={index}
              modulo={modulo}
              eliminarModulo={() => eliminarModulo(index)}
              modulos={modulos}
              setModulos={setModulos}
              courseId={courseId}
            />
          ))}
          <Button variant="contained" className="mt-4" onClick={agregarModulo}>
            Agregar Módulo
          </Button>
        </div>
        {isNew ? null : (
          <QuestionsManager
            courseId={courseId}
            isNew={isNew}
          ></QuestionsManager>
        )}
      </CContainer>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </>
  );
};

export default SaveCourse;
