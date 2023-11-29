import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import CourseCard from "../../components/course/CourseCard";
import SearchBar from "../../components/shared/SearchBar";
import { getDocument } from "../../firebase/firestore";
import { useAuth } from "../../context/AuthContext";
const MyCourses = () => {
  const { currentUser } = useAuth();
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getDocument("users", currentUser.uid);
        setUser(data);
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
              Mis Cursos
            </div>
          </CCol>
        </CRow>
        <SearchBar />
        <CRow>
          {user.courses &&
            user.courses.map((courseData) => (
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
          {!user.courses && (
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
    </>
  );
};

export default MyCourses;
