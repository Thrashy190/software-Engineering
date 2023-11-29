import React from "react";
import { CCol, CRow } from "@coreui/react";
import { Button, MenuItem } from "@mui/material";
import CustomSelect from "../custom/CustomSelect";
import CustomTextField from "../custom/CustomTextField";

const SearchBar = ({ search }) => {
  const [searchValue, setSearchValue] = React.useState('');
  const [orderBy, setOrderBy] = React.useState('desc');

  function doSearch() {
    search(searchValue, orderBy);
  }

  return (
    <>
      <CRow>
        <CCol className="pb-6" xs={6}>
          <div>
            <CustomTextField value={searchValue} 
              onChange={(e) => setSearchValue(e.target.value)}
              label="Buscar Cualquier cosa...."
            />
          </div>
        </CCol>
        <CCol className="pb-6" xs={3}>
          <div>
            <CustomSelect
              value={orderBy}  
              onChange={(e) => setOrderBy(e.target.value)}
              label="Orden"
            >
              <MenuItem value="asc">Ascedente</MenuItem>
              <MenuItem value="desc">Decendente</MenuItem>
            </CustomSelect>
          </div>
        </CCol>
        <CCol className="pb-6" xs={3}>
          <Button onClick={() => doSearch()} variant="contained">
            Buscar
          </Button>
        </CCol>
      </CRow>
    </>
  );
};

export default SearchBar;
