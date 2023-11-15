import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";

const Course = () => {
  const courseData = {
    courseName: "Curso de React",
    courseCreator: "Juanito Pérez",
    coursePrice: 100,
    courseReviews: 10,
    courseRating: 4,
    courseThumbNail: "miniaturas/f1.jpeg",
  };

  return (
    <>
      <CContainer>
        <CRow>
          <CCol>
            <CourseCard
              courseData={courseData}
              backgroundColor={"#764288"}
              fontColor={"#ffffff"}
            />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Course;
