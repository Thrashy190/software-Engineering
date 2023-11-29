import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import lndimg from "../../assets/lndimg.jpg";
import instructor from "../../assets/instructor.png";
import meta from "../../assets/meta.png";
import CourseCard from "../../components/course/CourseCard";
import { getCollection } from "../../firebase/firestore";

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Landing = () => {
  const [courses, setcourses] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCollection("courses");
        console.log(data);
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
    <CContainer
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#FAD264",
      }}
    >
      <CRow>
        <CCol xs={8}>
          <img
            src={lndimg}
            alt="lndimg"
            style={{
              maxWidth: "110%",
              marginBottom: "10px",
              clipPath: "polygon(0 0, 69% 0, 100% 100%, 0% 100%)",
            }}
          />
        </CCol>
        <CCol>
          <div
            className="italic..."
            style={{
              fontFamily: "Turret Road",
              fontSize: "4.5rem",
              textAlign: "right",
            }}
          >
            Desarrolla
            <br />
            Aprende
            <br />
            Juega
            <br />
            Crea
          </div>
        </CCol>

        {/* <div
          style={{
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
            overflow: "hidden",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            border: "2px solid #FAD264",
            marginTop: "35px",
            marginBottom: "50px",
          }}
        >
          <input
            type="text"
            placeholder="Encuentra el curso que te mereces "
            style={{
              flex: "3",
              padding: "8px",
              border: "none",
              backgroundColor: "transparent",
              color: "#FAD264",
            }}
          />
          <button
            style={{
              padding: "8px 10px",
              border: "none",
              backgroundColor: "transparent",
              color: "#FAD264",
              cursor: "pointer",
            }}
          >
            Buscar...
          </button>
        </div> */}

        <div style={{ textAlign: "center" }}>
          <p
            className="italic... text-6xl"
            style={{ fontFamily: "Turret Road", marginBottom: "20px" }}
          >
            Lo que somos
          </p>
          <p
            className="italic..."
            style={{
              fontFamily: "Turret Road",
              fontSize: "2rem",
              marginBottom: "50px",
            }}
          >
            Buscamos que nuestros clientes desarrollen sus habilidades
            <br />
            técnicas para el desarrollode videojuegos
            <br />
            en Unity y consigan un lugar en la industria de desarrollo.
          </p>
        </div>
        <CContainer>
          <CRow className="flex justify-center">
            {/* <CCol className="pb-6" xs={3}>
              <CourseCard
                courseData={courses[0]}
                backgroundColor={"#764288"}
                fontColor={"#ffffff"}
              />
            </CCol>
            <CCol className="pb-6" xs={3}>
              <CourseCard
                courseData={courses[1]}
                backgroundColor={"#764288"}
                fontColor={"#ffffff"}
              />
            </CCol>
            <CCol className="pb-6" xs={3}>
              <CourseCard
                courseData={courses[2]}
                backgroundColor={"#764288"}
                fontColor={"#ffffff"}
              />
            </CCol> */}
          </CRow>
        </CContainer>

        <div style={{ textAlign: "center" }}>
          <p
            className="italic... text-5xl"
            style={{
              fontFamily: "Turret Road",
              marginTop: "35px",
              marginBottom: "20px",
            }}
          >
            Nuestro Instructor
          </p>
          <CRow>
            <CCol xs={12} md={6} className="text-md-end">
              <img
                src={instructor}
                alt="instructor"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              />
            </CCol>
            <CCol xs={12} md={6} className="text-md-start">
              <p
                className="italic... text-4xl"
                style={{
                  textAlign: "center",
                  fontFamily: "Turret Road",
                  marginBottom: "10px",
                }}
              >
                Jorge Ferrétiz González
              </p>
              <p
                className="italic... text-3xl"
                style={{
                  textAlign: "right",
                  fontFamily: "Turret Road",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
              >
                Ilustrador y desarrollador de
                <br />
                videojuegos profesional. Experto en <br />
                Unity y C#. Desarrollador de Eagle <br />
                Knigth Paradox.
              </p>
            </CCol>
          </CRow>
        </div>

        <div style={{ textAlign: "center" }}>
          <p
            className="italic... text-5xl"
            style={{
              fontFamily: "Turret Road",
              marginTop: "35px",
              marginBottom: "20px",
            }}
          >
            Nuestra meta
          </p>
          <CRow>
            <CCol xs={12} md={6} className="text-md-end order-md-last">
              <img
                src={meta}
                alt="meta"
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                }}
              />
            </CCol>
            <CCol xs={12} md={6} className="text-md-start order-md-first">
              <p
                className="italic... text-3xl"
                style={{
                  textAlign: "left",
                  fontFamily: "Turret Road",
                  marginTop: "50px",
                  marginBottom: "20px",
                }}
              >
                Buscamos que nuestros clientes
                <br />
                desarrollen sus habilidades técnicas para el desarrollo de{" "}
                <br />
                videojuegos en Unity y consigan un lugar en la industria de
                desarrollo.
                <br />
              </p>
            </CCol>
          </CRow>
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={scrollToTop}
            style={{
              borderRadius: "50%",
              backgroundColor: "transparent",
              border: "8px solid #FAD264",
              width: "100px",
              height: "100px",
              fontSize: "0",
              cursor: "pointer",
              marginTop: "65px",
            }}
          >
            <span
              role="img"
              aria-label="Ir hacia arriba"
              style={{ fontSize: "44px", color: "#FAD264" }}
            >
              ↑
            </span>
            <br />
          </button>
          <p
            style={{
              fontFamily: "Turret Road",
              color: "#FAD264",
              marginTop: "10px",
            }}
          >
            Ir hacia arriba
          </p>
        </div>
      </CRow>
    </CContainer>
  );
};
export default Landing;

//falta el pie
