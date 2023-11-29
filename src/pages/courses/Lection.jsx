import { useEffect, useState } from "react";
import { CContainer, CCol, CRow } from "@coreui/react";
import { downloadImage } from "../../firebase/storage";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import FastForwardIcon from "@mui/icons-material/FastForward";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import ModuleProgressList from "../../components/course/ModuleProgressList";
import { useParams } from "react-router-dom";
import { getSingleCourseWithSubcollections } from "../../firebase/firestore";
import { CircularProgress } from "@mui/material";

const Lection = () => {
  const [courseData, setCourseData] = useState(null);
  const [videoUrl, setVideoUrl] = useState(null);
  const [leccion, setLeccion] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id, moduleindex, lessonindex } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      console.log(id);
      console.log(moduleindex);
      console.log(lessonindex);
      try {
        const course = await getSingleCourseWithSubcollections("courses", id);
        setLeccion(course.modules[moduleindex].lessons[lessonindex]);
        setCourseData(course);
        setIsLoading(false);
        const video = await downloadImage(
          course.modules[moduleindex].lessons[lessonindex].video
        );
        setVideoUrl(video);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
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
            <CCol xs={9}>
              <video src={videoUrl} className="w-full" controls />
              <div className="flex justify-end gap-3 pt-2">
                <div className="border-solid border-2 border-[#FAD264] rounded-lg">
                  <FastRewindIcon color="primary" fontSize="large" />
                </div>
                <div className="border-solid border-2 border-[#FAD264] rounded-lg">
                  <FastForwardIcon color="primary" fontSize="large" />
                </div>
              </div>
            </CCol>
            <CCol xs={3}>
              <ModuleProgressList modules={courseData.modules} id={id} />
            </CCol>
          </CRow>
          <div className="flex flex-col gap-4">
            <div className="text-white font-medium text-2xl">
              Leccion: {leccion.title}
            </div>
            <div className="text-white font-medium text-2xl">
              Resumen de la Lección:
            </div>
            <div className="text-white font-medium text-xl">
              {leccion.summary}
            </div>
            <div className="text-white font-medium text-2xl">
              Archivos adjuntos
            </div>
          </div>
        </CContainer>
      )}
    </>
  );
};

export default Lection;
