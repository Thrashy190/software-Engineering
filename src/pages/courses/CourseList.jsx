import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import SearchBar from "../../components/shared/SearchBar";
import { getCollection } from "../../firebase/firestore";

const CourseList = () => {
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

  const [courses, setcourses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollection("courses");
        setcourses(data);
        setIsLoading(false);
        console.log(data);
      } catch (error) {
        console.error("Error al traer la info", error);
      }
    };

    fetchData();
  }, []);

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
        <SearchBar />
        <CRow>
          {courses.map((courseData) => (
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
                <ArrowUpwardIcon fontSize="large" color="FAD264" />
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
