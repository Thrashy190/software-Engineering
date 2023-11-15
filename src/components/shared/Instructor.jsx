import { CRow, CCol } from "@coreui/react";
import imagen from "../../assets/jorge.jpeg";

const Instructor = () => {
  return (
    <>
      <CRow className="pt-3 pb-4">
        <CCol className="flex justify-center">
          <div className="text-[#FAD264] text-4xl font-bold">Instructor</div>
        </CCol>
      </CRow>
      <CRow>
        <CCol className="flex justify-end pr-10">
          <img className="h-72" src={imagen} alt="Jorge" />
        </CCol>
        <CCol className="flex flex-col justify-center gap-3">
          <div className="text-[#FAD264] text-2xl">Jorge Ferrétiz González</div>
          <div className="text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default Instructor;
