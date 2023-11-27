// import React, { useState } from "react";
// import { CCol, CContainer, CRow } from "@coreui/react";
// import {
//   Button,
//   TextField,
//   Slider,
//   OutlinedInput,
//   InputAdornment,
// } from "@mui/material";
// import { addDocument } from "../../firebase/firestore";
// import { uploadFiles } from "../../firebase/storage";
// import Modulo from "../../components/admin/Module";
// import Examen from "../../components/admin/Exam";
// import Notification from "../../components/shared/Notifications";
// import { useNavigate } from "react-router-dom";

// const marks = [
//   {
//     value: 1,
//     label: "Principiante",
//   },
//   {
//     value: 2,
//     label: "Intermedio",
//   },
//   {
//     value: 3,
//     label: "Avanzado",
//   },
// ];

// const CourseCreator = () => {
//   const navigate = useNavigate();

//   const [notify, setNotify] = useState({
//     isOpen: false,
//     message: "",
//     type: "",
//   });

//   const [data, setData] = React.useState({
//     title: "",
//     summary: "",
//     level: 1,
//     price: null,
//     description: "",
//     target: "",
//   });
//   const [modulos, setModulos] = useState([]);
//   const [examen, setExamen] = useState({ preguntas: [] });
//   const [file, setFile] = useState(null);

//   const agregarModulo = () => {
//     setModulos([...modulos, {}]); // Puedes inicializar el módulo con la información predeterminada aquí
//   };

//   const eliminarModulo = (index) => {
//     const nuevosModulos = [...modulos];
//     nuevosModulos.splice(index, 1);
//     setModulos(nuevosModulos);
//   };

//   const agregarPregunta = () => {
//     setExamen({ preguntas: [...examen.preguntas, { respuestas: [] }] });
//   };

//   const handleChange = (e) => {
//     setData({ ...data, [e.target.name]: e.target.value });
//   };

//   const handleSave = async () => {
//     await uploadFiles(file, "miniaturas").then(async (response) => {
//       const { title, summary, level, price, description, target } = data;
//       const course = {
//         title,
//         summary,
//         level,
//         price,
//         description,
//         target,
//         status: "draft",
//         createdAt: new Date(),
//         reviews: [],
//         thumbnail: response.fullPath,
//       };
//       await addDocument("courses", course).then((response) => {
//         setNotify({
//           isOpen: true,
//           message: "Curso guardado con exito",
//           type: "success",
//         });
//         navigate("/admin/courses");
//       });
//     });
//   };

//   const addImage = (e) => {
//     e.preventDefault();
//     setFile(e.target.files[0]);
//   };

//   const handlePublish = () => {
//     const { title, summary, level, price, description, target } = data;
//     const course = {
//       title,
//       summary,
//       level,
//       price,
//       description,
//       target,
//       status: "published",
//       createdAt: new Date(),
//     };
//     addDocument("courses", course);
//   };

//   return (
//     <>
//       <CContainer className="min-h-screen pt-10">
//         <CRow className="pb-10">
//           <CCol>
//             <div className="text-4xl font-bold text-[#67237E]">
//               Crear nuevo curso
//             </div>
//           </CCol>
//           <CCol className="flex justify-end">
//             <div className="flex gap-4">
//               <Button variant="contained" onClick={handlePublish}>
//                 Crear curso
//               </Button>
//               <Button variant="contained" onClick={handleSave}>
//                 Guardar curso
//               </Button>
//             </div>
//           </CCol>
//         </CRow>
//         <CRow>
//           <CCol className="flex gap-4 flex-col">
//             <CRow>
//               <CCol>
//                 <TextField
//                   onChange={handleChange}
//                   name="title"
//                   value={data.title}
//                   fullWidth
//                   placeholder="Titulo"
//                 />
//               </CCol>
//             </CRow>
//             <CRow className="pb-5">
//               <CCol>
//                 <TextField
//                   onChange={handleChange}
//                   fullWidth
//                   name="summary"
//                   value={data.summary}
//                   multiline
//                   rows={10}
//                   placeholder="Resumen del curso"
//                 />
//               </CCol>
//             </CRow>
//           </CCol>
//           <CCol>
//             <input
//               onChange={addImage}
//               accept="image/*"
//               id="raised-button-file"
//               type="file"
//             />
//             <Button onClick={uploadFiles}>press</Button>
//             <CRow className="py-10">
//               <CCol>
//                 <OutlinedInput
//                   onChange={handleChange}
//                   placeholder="Precio"
//                   fullWidth
//                   name="price"
//                   value={data.price}
//                   type="number"
//                   id="outlined-adornment-amount"
//                   startAdornment={
//                     <InputAdornment position="start">$</InputAdornment>
//                   }
//                   label="Amount"
//                 />
//               </CCol>
//             </CRow>
//             <CRow className="pb-5">
//               <CCol className="mx-5">
//                 <Slider
//                   onChange={handleChange}
//                   name="level"
//                   value={data.level}
//                   aria-label="Nivel"
//                   defaultValue={1}
//                   valueLabelDisplay="auto"
//                   step={1}
//                   marks={marks}
//                   min={1}
//                   max={3}
//                 />
//               </CCol>
//             </CRow>
//           </CCol>
//         </CRow>
//         <CRow className="pb-10">
//           <CCol>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               name="description"
//               value={data.description}
//               multiline
//               rows={10}
//               placeholder="Que vas a aprender en este curso?"
//             />
//           </CCol>
//         </CRow>
//         <CRow>
//           <CCol>
//             <TextField
//               onChange={handleChange}
//               fullWidth
//               name="target"
//               value={data.target}
//               multiline
//               rows={10}
//               placeholder="Para quien va dirigido este curso?"
//             />
//           </CCol>
//         </CRow>
//         <CRow className="pt-10">
//           <CCol>
//             <div className="text-2xl font-bold text-[#67237E]">
//               Modulos / Lecciones / Examenes
//             </div>
//           </CCol>
//         </CRow>
//         <div className="py-4">
//           {modulos.map((modulo, index) => (
//             <Modulo key={index} index={index} eliminarModulo={eliminarModulo} />
//           ))}
//           <Button variant="contained" className="mt-4" onClick={agregarModulo}>
//             Agregar Módulo
//           </Button>
//         </div>
//         <Examen examen={examen} agregarPregunta={agregarPregunta} />

//         <CRow className="py-10">
//           <CCol className="flex justify-end">
//             <div className="flex gap-4">
//               <Button variant="contained" onClick={handlePublish}>
//                 Crear curso
//               </Button>
//               <Button variant="contained" onClick={handleSave}>
//                 Guardar curso
//               </Button>
//             </div>
//           </CCol>
//         </CRow>
//       </CContainer>
//       <Notification notify={notify} setNotify={setNotify} position={"top"} />
//     </>
//   );
// };

// export default CourseCreator;
import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const CrearCurso = () => {
  const [curso, setCurso] = useState({
    nombre: "",
    title: "",
    summary: "",
    level: "",
    price: "",
    description: "",
    target: "",
    status: "draft",
    createdAt: new Date(),
    reviews: [],
    thumbnail: "",
    modulos: [],
  });

  const [nuevoModuloNombre, setNuevoModuloNombre] = useState("");
  const [nuevaLeccionNombre, setNuevaLeccionNombre] = useState("");
  const [nuevaLeccionInfo, setNuevaLeccionInfo] = useState("");
  const [nuevaLeccionTipo, setNuevaLeccionTipo] = useState("archivo");
  const [nuevaLeccionVideo, setNuevaLeccionVideo] = useState(null);
  const [nuevaLeccionAdjunto, setNuevaLeccionAdjunto] = useState(null);
  const [tipoLeccionSeleccionado, setTipoLeccionSeleccionado] =
    useState("archivo");

  const seleccionarTipoLeccion = (tipo) => {
    setTipoLeccionSeleccionado(tipo);
  };

  const agregarModulo = () => {
    const nuevoModulo = {
      nombre: `Modulo #${curso.modulos.length + 1}`,
      lecciones: [],
    };
    setCurso({ ...curso, modulos: [...curso.modulos, nuevoModulo] });
    setNuevoModuloNombre("");
  };

  const agregarLeccion = async (indiceModulo) => {
    // Lógica para subir archivos adjuntos y videos a Firebase Storage
    // ...

    // Crear objeto de lección
    const nuevaLeccion = {
      nombre: nuevaLeccionNombre,
      info: nuevaLeccionInfo,
      tipo: nuevaLeccionTipo,
      video: nuevaLeccionVideo, // URL del video subido a Firebase Storage
      adjunto: nuevaLeccionAdjunto, // URL del archivo adjunto subido a Firebase Storage
    };

    // Actualizar estado del curso con la nueva lección
    const nuevosModulos = [...curso.modulos];
    nuevosModulos[indiceModulo].lecciones.push(nuevaLeccion);

    setCurso({ ...curso, modulos: nuevosModulos });

    // Limpiar campos de lección
    setNuevaLeccionNombre("");
    setNuevaLeccionInfo("");
    setNuevaLeccionTipo("archivo");
    setNuevaLeccionVideo(null);
    setNuevaLeccionAdjunto(null);
  };

  const eliminarModulo = (indiceModulo) => {
    const nuevosModulos = [...curso.modulos];
    nuevosModulos.splice(indiceModulo, 1);
    setCurso({ ...curso, modulos: nuevosModulos });
  };

  const eliminarLeccion = (indiceModulo, indiceLeccion) => {
    const nuevosModulos = [...curso.modulos];
    nuevosModulos[indiceModulo].lecciones.splice(indiceLeccion, 1);
    setCurso({ ...curso, modulos: nuevosModulos });
  };

  const guardarCurso = async (status) => {
    // Lógica para subir la imagen de portada del curso a Firebase Storage
    // ...

    // Crear objeto de curso
    const cursoGuardado = {
      ...curso,
      status: status,
      thumbnail: curso.thumbnail || "", // Asegurarse de manejar la imagen de la portada
    };

    // Lógica para guardar el curso en la base de datos (Firebase Firestore u otro)
    // ...

    console.log(cursoGuardado);
  };

  return (
    <div>
      <h1>Crear Curso</h1>
      <TextField
        label="Nombre del Curso"
        variant="outlined"
        value={curso.nombre}
        onChange={(e) => setCurso({ ...curso, nombre: e.target.value })}
      />

      {/* Otros campos para la información del curso */}
      <TextField
        label="Titulo"
        variant="outlined"
        value={curso.title}
        onChange={(e) => setCurso({ ...curso, title: e.target.value })}
      />

      <TextField
        label="Resumen"
        variant="outlined"
        value={curso.summary}
        onChange={(e) => setCurso({ ...curso, summary: e.target.value })}
      />

      <TextField
        label="Nivel"
        variant="outlined"
        value={curso.level}
        onChange={(e) => setCurso({ ...curso, level: e.target.value })}
      />

      <TextField
        label="Precio"
        variant="outlined"
        value={curso.price}
        onChange={(e) => setCurso({ ...curso, price: e.target.value })}
      />

      <TextField
        label="Descripción"
        variant="outlined"
        multiline
        rows={4}
        value={curso.description}
        onChange={(e) => setCurso({ ...curso, description: e.target.value })}
      />

      <TextField
        label="Objetivo del Curso"
        variant="outlined"
        multiline
        rows={4}
        value={curso.target}
        onChange={(e) => setCurso({ ...curso, target: e.target.value })}
      />

      <Button variant="contained" onClick={agregarModulo}>
        Agregar Módulo
      </Button>

      {curso.modulos.map((modulo, indiceModulo) => (
        <div key={indiceModulo}>
          <h2>{modulo.nombre}</h2>

          <Button onClick={() => eliminarModulo(indiceModulo)}>
            Eliminar Módulo
          </Button>

          <div>
            <TextField
              label="Nuevo Módulo"
              variant="outlined"
              value={nuevoModuloNombre}
              onChange={(e) => setNuevoModuloNombre(e.target.value)}
            />
            <Button onClick={() => agregarLeccion(indiceModulo)}>
              Agregar Lección
            </Button>

            <div>
              <Button
                variant="contained"
                onClick={() => seleccionarTipoLeccion("video")}
              >
                Crear Lección de Video
              </Button>
              <Button
                variant="contained"
                onClick={() => seleccionarTipoLeccion("documento")}
              >
                Crear Lección de Documento
              </Button>
            </div>

            {modulo.lecciones.map((leccion, indiceLeccion) => (
              <div key={indiceLeccion}>
                <TextField
                  label="Título de la Lección"
                  variant="outlined"
                  value={leccion.nombre}
                  onChange={(e) => {
                    const nuevosModulos = [...curso.modulos];
                    nuevosModulos[indiceModulo].lecciones[
                      indiceLeccion
                    ].nombre = e.target.value;
                    setCurso({ ...curso, modulos: nuevosModulos });
                  }}
                />

                <TextField
                  label="Descripción de la Lección"
                  variant="outlined"
                  multiline
                  rows={4}
                  value={leccion.info}
                  onChange={(e) => {
                    const nuevosModulos = [...curso.modulos];
                    nuevosModulos[indiceModulo].lecciones[indiceLeccion].info =
                      e.target.value;
                    setCurso({ ...curso, modulos: nuevosModulos });
                  }}
                />

                {tipoLeccionSeleccionado === "video" && (
                  <>
                    <TextField
                      label="Archivo de Video"
                      variant="outlined"
                      type="file"
                      onChange={(e) => setNuevaLeccionVideo(e.target.files[0])}
                    />
                    {/* Otros campos específicos para lecciones de video */}
                    {/* ... (otros campos de TextField para lecciones de video) */}
                  </>
                )}

                {tipoLeccionSeleccionado === "documento" && (
                  <>
                    <TextField
                      label="Archivo Adjunto"
                      variant="outlined"
                      type="file"
                      onChange={(e) =>
                        setNuevaLeccionAdjunto(e.target.files[0])
                      }
                    />
                    {/* Otros campos específicos para lecciones de documento */}
                    {/* ... (otros campos de TextField para lecciones de documento) */}
                  </>
                )}

                <Button
                  onClick={() => eliminarLeccion(indiceModulo, indiceLeccion)}
                >
                  Eliminar Lección
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}

      <Button variant="contained" onClick={() => guardarCurso("draft")}>
        Guardar como Borrador
      </Button>
      <Button variant="contained" onClick={() => guardarCurso("live")}>
        Publicar Curso
      </Button>
    </div>
  );
};

export default CrearCurso;
