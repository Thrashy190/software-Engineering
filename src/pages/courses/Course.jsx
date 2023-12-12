import React, { useEffect, useState } from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import { Button } from "@mui/material";
import RatingStars from "../../components/shared/RatingStarts";
import Instructor from "../../components/shared/Instructor";
import { downloadImage } from "../../firebase/storage";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Rating from "@mui/material/Rating";
import DifficultyIcon from "../../components/shared/DifficultyIcon";
import { formatCurrencyToMXN } from "../../utils/formatter";
import ModuleList from "../../components/course/ModuleList";
import CircularProgress from "@mui/material/CircularProgress";
import { checkout } from "../../stripe/stripe";
import { useParams, useNavigate } from "react-router-dom";
import {
  getSingleCourseWithSubcollections,
  getDocumentsByUids,
} from "../../firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Course = () => {
  const { currentUser } = useAuth();
  const [imageUrl, setImageUrl] = useState(null);
  const [courseData, setCourseData] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  const [hasCourse, setHasCourse] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const course = await getSingleCourseWithSubcollections("courses", id);
        setCourseData(course);
        const url = await downloadImage(course.thumbnail);
        setImageUrl(url);
      } catch (error) {
        console.error("Error al obtener la imagen:", error);
      }
    };

    fetchData();

    const userHasCourse = async () => {
      const userDocRef = doc(db, "users", currentUser.uid);
      const userDocSnapshot = await getDoc(userDocRef);
      const coursesBought = userDocSnapshot.data()["coursesBought"];

      if (coursesBought.includes(id)) {
        setHasCourse(true);
      }
    };

    userHasCourse();
  }, []);

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
              position: "relative",
              zIndex: 1,
            }}
          >
            <CRow className="pb-10">
              <CCol className="flex flex-col justify-center gap-3">
                <div>
                  <RatingStars
                    rating={courseData.reviews}
                    totalReviews={courseData.reviews.length}
                    fontColor={"#FAD264"}
                  />
                </div>
                <div className="text-white text-2xl font-bold">
                  {courseData.title}
                </div>
                <div className="text-[#FAD264] font-light">
                  By Jorge Ferrétiz González
                </div>
                <div className="text-white ">{courseData.description}</div>
                <div className="flex flex-row items-center gap-3">
                  <div>
                    <DifficultyIcon level={courseData.level} />
                  </div>
                  <div className="text-[#FAD264] font-bold text-lg">
                    Nivel:
                    {courseData.level === 1
                      ? "Básico"
                      : courseData.level === 2
                      ? "Intermedio"
                      : "Avanzado"}
                  </div>
                </div>

                <div className="flex flex-row items-center gap-3">
                  <div style={{ color: "#FAD264" }}>
                    <AttachMoneyIcon fontSize="large" />
                  </div>
                  <div className="text-[#FAD264] font-bold text-lg">
                    {formatCurrencyToMXN(courseData.price)} MXN
                  </div>
                </div>
              </CCol>
              <CCol className=" flex items-center flex-col gap-3">
                <div>
                  <img src={imageUrl} alt="Curso" className="h-72" />
                </div>
                <div className="flex flex-col gap-3">
                  <Button
                    variant="contained"
                    onClick={() => {
                      checkout(courseData.priceId, id, currentUser.email);
                    }}
                    disabled={hasCourse}
                  >
                    {hasCourse ? "Comprado" : "Comprar curso"}
                  </Button>
                  <Button
                    variant="outlined"
                    onClick={() => navigate(`/review/${id}`)}
                  >
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
              <div className="text-white">{courseData.summary}</div>
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
              <div className="text-white">{courseData.target}</div>
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
              {hasCourse ? (
                <ModuleList modules={courseData.modules} id={id}></ModuleList>
              ) : (
                <div className="text-white text-2xl">
                  Para ver el contenido del curso debes comprarlo
                </div>
              )}
            </CCol>
          </CRow>
          <CRow className="pb-6">
            <CCol className="flex justify-center">
              <div className="text-[#FAD264] text-4xl font-bold">Examen</div>
            </CCol>
          </CRow>
          <CRow className="pb-6">
            <CCol className="flex justify-center">
              <Button
                size="large"
                className="my-2"
                variant="contained"
                onClick={() => navigate(`/examen/${id}`)}
              >
                Tomar examen
              </Button>
            </CCol>
          </CRow>
          <Instructor />
          <CRow className="py-6">
            <CCol className="flex justify-center">
              <div className="text-[#FAD264] text-4xl font-bold">Reseñas</div>
            </CCol>
          </CRow>
          <CRow className="pt-4">
            <CCol className="flex justify-center">
              <div>
                {courseData.reviews &&
                  courseData.reviews.map((review) => {
                    return (
                      <div className="flex flex-col gap-3 py-4">
                        <div className="text-[#FAD264] text-3xl">
                          {review.userName}
                        </div>
                        <div className="text-white text-2xl">
                          <Rating
                            sx={{
                              "& .css-dqr9h-MuiRating-label": {
                                color: (theme) => theme.palette.primary.main,
                              },
                              ".MuiRating-iconEmpty": {
                                color: (theme) => theme.palette.primary.main,
                              },
                            }}
                            value={review.rate}
                            readOnly
                          />
                        </div>
                        <div className="text-white text-2xl">
                          {review.comment}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </CCol>
          </CRow>
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
