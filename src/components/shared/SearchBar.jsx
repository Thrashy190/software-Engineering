import { CCol, CRow } from "@coreui/react";
import { MenuItem } from "@mui/material";
import CustomSelect from "../custom/CustomSelect";
import CustomTextField from "../custom/CustomTextField";

const SearchBar = () => {
  return (
    <>
      <CRow>
        <CCol className="pb-6" xs={6}>
          <div>
            <CustomTextField label="Buscar Cualquier cosa...." />
          </div>
        </CCol>
        <CCol className="pb-6" xs={3}>
          <div>
            <CustomSelect label="Categorias">
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </CustomSelect>
          </div>
        </CCol>
        <CCol className="pb-6" xs={3}>
          <div>
            <CustomSelect label="Orden">
              <MenuItem value={"up"}>Acedente</MenuItem>
              <MenuItem value={"down"}>Decendente</MenuItem>
            </CustomSelect>
          </div>
        </CCol>
      </CRow>
    </>
  );
};

export default SearchBar;
