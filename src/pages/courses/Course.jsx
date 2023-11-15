import React from "react";
import { CContainer, CRow, CCol } from "@coreui/react";
import { Button } from "@mui/material";
import RatingStars from "../../components/shared/RatingStarts";

const Course = () => {
  return (
    <>
      <CContainer>
        <CRow>
          <CCol>
            <div>
              <RatingStars rating={4} totalReviews={10} />
            </div>
            <div>Pro Game Development</div>
            <div>By Jorge Ferrétiz González</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
            <div>
              <div></div>
              <div></div>
            </div>
          </CCol>
          <CCol>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <Button variant="outlined" onClick={() => navigate("login")}>
                Comprar curso o iniciar sesion
              </Button>
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <div>¿Qué vas a aprender en este curso?</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <div>Para quien va dirigido</div>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </CCol>
        </CRow>
        <CRow>
          <CCol>
            <div>Resumen del curso</div>
            <div></div>
          </CCol>
        </CRow>
        <CRow>
          <CCol></CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Course;
