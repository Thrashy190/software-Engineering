import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { TextField } from "@mui/material";

const CourseList = () => {
  const courseData = {
    courseName: "Curso de React",
    courseCreator: "Juanito Pérez",
    coursePrice: 100,
    courseReviews: 10,
    courseRating: 4,
    courseThumbNail: "miniaturas/f1.jpeg",
  };

  const dummmyData = [
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 6,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 6,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      coursePrice: 100,
      courseReviews: 10,
      courseRating: 4,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
  ];

  return (
    <>
      <CContainer className="pt-10">
        <CRow>
          <CCol className="flex justify-center pb-6">
            <div className="text-6xl font-bold text-[#FAD264]" id="top">
              Cursos
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol className="pb-6" xs={6}>
            <div>
              <TextField
                variant="outlined"
                fullWidth
                label="Buscar Cualquier cosa...."
              />
            </div>
          </CCol>
          <CCol className="pb-6" xs={3}>
            <div>
              <TextField variant="outlined" fullWidth />
            </div>
          </CCol>
          <CCol className="pb-6" xs={3}>
            <div>
              <TextField variant="outlined" fullWidth />
            </div>
          </CCol>
        </CRow>
        <CRow>
          {dummmyData.map((courseData) => (
            <CCol className="pb-6" xs={3}>
              <CourseCard
                courseData={courseData}
                backgroundColor={"#764288"}
                fontColor={"#ffffff"}
              />
            </CCol>
          ))}
        </CRow>
        <CRow>
          <CCol className="flex justify-center items-center flex-col py-6 gap-2">
            <div className="text-lg font-bold text-[#FAD264]">
              No hay mas cursos
            </div>
            <div className="font-bold text-[#FAD264] border-2 border-[#FAD264] rounded-full">
              <a href="#top">
                <ArrowUpwardIcon fontSize="large" />
              </a>
            </div>
            <div className="text-lg font-bold text-[#FAD264]">
              Ir hacia arriba
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default CourseList;
