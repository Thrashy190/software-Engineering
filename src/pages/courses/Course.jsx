import React, { useEffect, useState } from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import { Button } from "@mui/material";
import RatingStars from "../../components/shared/RatingStarts";
import Instructor from "../../components/shared/Instructor";
import { downloadImage } from "../../firebase/storage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DifficultyIcon from "../../components/shared/DifficultyIcon";
import { formatCurrencyToMXN } from "../../utils/formatter";
import ModuleList from "../../components/course/ModuleList";
import CircularProgress from "@mui/material/CircularProgress";
import { checkout, createProduct } from "../../stripe/stripe";

const Course = () => {
  const [imageUrl, setImageUrl] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = await downloadImage("miniaturas/f1.jpeg");
        setImageUrl(url);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    };

    fetchData();
  }, []);

  const modules = [
    {
      title: "Módulo 1",
      duration: "2h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "30m" },
        { type: "Texto", title: "Lección 2" },
      ],
    },
    {
      title: "Módulo 2",
      duration: "1.5h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "45m" },
        { type: "Texto", title: "Lección 2" },
        { type: "Video", title: "Lección 3", duration: "15m" },
      ],
    },
    {
      title: "Módulo 3",
      duration: "1.5h",
      lessons: [
        { type: "Video", title: "Lección 1", duration: "45m" },
        { type: "Texto", title: "Lección 2" },
        { type: "Examen", title: "Lección 3", duration: "15m" },
      ],
    },
  ];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
      }}
    >
      {imageUrl ? (
        <CContainer className="pt-10">
          <div
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "400px",
              backgroundImage: `url(${imageUrl})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(10px)", // Ajusta el valor de desenfoque según tus preferencias
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 1,
            }}
          >
            <CRow className="pb-10">
              <CCol className="flex flex-col justify-center gap-3">
                <div>
                  <RatingStars
                    rating={4}
                    totalReviews={10}
                    fontColor={"#FAD264"}
                  />
                </div>
                <div className="text-white text-2xl font-bold">
                  Pro Game Development
                </div>
                <div className="text-[#FAD264] font-light">
                  By Jorge Ferrétiz González
                </div>
                <div className="text-white ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div>
                    <DifficultyIcon level={3} />
                  </div>
                  <div className="text-[#FAD264] font-bold text-lg">
                    Nivel: Avanzado
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div style={{ color: "#FAD264" }}>
                    <AccessTimeIcon fontSize="large" />
                  </div>
                  <div className="text-[#FAD264] font-bold text-lg">
                    3 Horas de contenido
                  </div>
                </div>
                <div className="flex flex-row items-center gap-3">
                  <div style={{ color: "#FAD264" }}>
                    <AttachMoneyIcon fontSize="large" />
                  </div>
                  <div className="text-[#FAD264] font-bold text-lg">
                    {formatCurrencyToMXN(1000)} MXN
                  </div>
                </div>
              </CCol>
              <CCol className=" flex items-center flex-col gap-3">
                <div>
                  <img src={imageUrl} alt="Curso" className="h-72" />
                </div>
                <div className="flex flex-col gap-3">
                  <Button variant="contained"
                    onClick={() => { }}
                  >
                    Comprar curso o iniciar sesion
                  </Button>
                  <Button variant="outlined">
                    Reseñar curso
                  </Button>
                </div>
              </CCol>
            </CRow>
          </div>

          <CRow className="pt-10 pb-3">
            <CCol className="flex justify-center">
              <div className="text-[#FAD264] text-4xl font-bold">
                ¿Qué vas a aprender en este curso?
              </div>
            </CCol>
          </CRow>
          <CRow className="pb-3">
            <CCol className="flex justify-center">
              <div className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CCol>
          </CRow>
          <CRow className="pt-3 pb-3">
            <CCol className="flex justify-center">
              <div className="text-[#FAD264] text-4xl font-bold">
                Para quien va dirigido
              </div>
            </CCol>
          </CRow>
          <CRow className="pb-10">
            <CCol className="flex justify-center">
              <div className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
            </CCol>
          </CRow>
          <CRow className="pb-6">
            <CCol className="flex justify-center">
              <div className="text-[#FAD264] text-4xl font-bold">
                Resumen del curso
              </div>
            </CCol>
          </CRow>
          <CRow className="pb-6">
            <CCol className="flex justify-center">
              <ModuleList modules={modules}></ModuleList>
            </CCol>
          </CRow>
          <Instructor />
        </CContainer>
      ) : (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      )}
    </div>
  );
};

export default Course;
