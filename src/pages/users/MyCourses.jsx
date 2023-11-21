import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";
import SearchBar from "../../components/shared/SearchBar";
import { TextField, MenuItem } from "@mui/material";

const MyCourses = () => {
  const dummmyData = [
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      courseReviews: 10,
      courseRating: 6,
      courseProgress: 50,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      courseReviews: 10,
      courseRating: 4,
      courseProgress: 50,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
    {
      courseName: "Curso de React",
      courseCreator: "Juanito Pérez",
      courseReviews: 10,
      courseRating: 4,
      courseProgress: 100,
      courseThumbNail: "miniaturas/f1.jpeg",
    },
  ];

  return (
    <>
      <CContainer className="pt-10">
        <CRow>
          <CCol className="flex justify-center pb-6">
            <div className="text-6xl font-bold text-[#FAD264]" id="top">
              Mis Cursos
            </div>
          </CCol>
        </CRow>
        <SearchBar />
        <CRow>
          {dummmyData.map((courseData) => (
            <CCol className="pb-6" xs={3}>
              <CourseCard
                courseData={courseData}
                backgroundColor={
                  courseData.courseProgress !== 100 ? "#764288" : "#FAD264"
                }
                fontColor={
                  courseData.courseProgress !== 100 ? "#ffffff" : "#14181A"
                }
              />
            </CCol>
          ))}
        </CRow>
        {/* <CRow>
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
        </CRow> */}
      </CContainer>
    </>
  );
};

export default MyCourses;
