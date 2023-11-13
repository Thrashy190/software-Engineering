import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";

const Course = () => {
  const dummyData = {
    courseName: "Curso de React",
    courseCreator: "Juanito Pérez",
    coursePrice: 100,
    courseReviews: 10,
    courseRating: 4,
  };

  return (
    <>
      <CourseCard courseData={dummyData} />
      <CContainer>
        <CRow>
          <CCol>
            <div></div>
          </CCol>
          <CCol></CCol>
        </CRow>
        <CRow>
          <CCol></CCol>
        </CRow>
        <CRow>
          <CCol></CCol>
        </CRow>
        <CRow>
          <CCol></CCol>
        </CRow>
        <CRow>
          <CCol></CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Course;
