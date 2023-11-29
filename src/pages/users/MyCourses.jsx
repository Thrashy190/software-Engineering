import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";
import { CircularProgress } from "@mui/material";
import SearchBar from "../../components/shared/SearchBar";
import { getDocument, getDocumentsByUids } from "../../firebase/firestore";
import { useAuth } from "../../context/AuthContext";
const MyCourses = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = React.useState([]);
  const [courses, setCourses] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocument("users", currentUser.uid);
        setUser(data);

        const coursesdata = await getDocumentsByUids(
          "courses",
          data.coursesBought
        );
        setCourses(coursesdata);
        setIsLoading(false);
        // console.log(data);
      } catch (error) {
        console.error("Error al traer la info", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center">
          <CircularProgress />
        </div>
      ) : (
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
            {user.coursesBought &&
              courses.map((courseData) => (
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
            {!user.coursesBought && (
              <CCol className="flex justify-center items-center flex-col py-6 gap-2">
                <div className="text-lg font-bold text-[#FAD264]">
                  No hay cursos
                </div>
              </CCol>
            )}
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
      )}
    </>
  );
};

export default MyCourses;
