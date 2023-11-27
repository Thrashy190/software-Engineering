import React, { useEffect } from "react";
import { CCol, CContainer, CRow, CWidgetStatsF, CLink } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilArrowRight, cilChartPie } from "@coreui/icons";
import { db } from "../../firebase/firebase";
import {
  collection,
  getCountFromServer,
  query,
  where,
} from "firebase/firestore";

const Home = () => {
  const [usersCount, setUsersCount] = React.useState(0);
  const [coursesCount, setCoursesCount] = React.useState(0);

  useEffect(() => {
    let start = new Date();
    let end = new Date();
    end.setDate(end.getDate() - 7);

    const fetchCount = async () => {
      const collUsers = collection(db, "users");
      const qUsers = query(
        collUsers,
        where("createdAt", "<", start),
        where("createdAt", ">", end)
      );
      const snapshotUsers = await getCountFromServer(qUsers);
      setUsersCount(snapshotUsers.data().count);

      const collCourses = collection(db, "courses");
      const qCourses = query(
        collCourses,
        where("createdAt", "<", start),
        where("createdAt", ">", end)
      );
      const snapshotCourses = await getCountFromServer(qCourses);
      setCoursesCount(snapshotCourses.data().count);
    };

    fetchCount();
  }, []);

  return (
    <>
      <CContainer className="min-h-screen pt-10">
        <CRow>
          <CCol className="flex pb-10">
            <div className="text-4xl font-bold text-[#67237E]">Inicio</div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <CWidgetStatsF
              className="mb-3"
              color="primary"
              footer={
                <CLink
                  className="font-weight-bold font-xs text-medium-emphasis"
                  href="/admin/users"
                  rel="noopener norefferer"
                >
                  Ver mas sobre usuarios aqui
                  <CIcon
                    icon={cilArrowRight}
                    className="float-end"
                    width={16}
                  />
                </CLink>
              }
              icon={<CIcon icon={cilChartPie} height={24} />}
              title="Usuarios nuevos en los ultimos 7 dias"
              value={usersCount}
            />
          </CCol>
          <CCol>
            <CWidgetStatsF
              className="mb-3"
              color="secondary"
              footer={
                <CLink
                  className="font-weight-bold font-xs text-medium-emphasis"
                  href="/admin/courses"
                  rel="noopener norefferer"
                >
                  Ver mas sobre Cursos aqui
                  <CIcon
                    icon={cilArrowRight}
                    className="float-end"
                    width={16}
                  />
                </CLink>
              }
              icon={<CIcon icon={cilChartPie} height={24} />}
              title="Cursos nuevos en los ultimos 7 dias"
              value={coursesCount}
            />
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Home;
