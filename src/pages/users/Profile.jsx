import { Typography, Button } from '@mui/material';
import { CContainer, CRow, CCol } from "@coreui/react";

const Profile = () => {
  return (
    <>
      <CContainer>
        <CRow>
          <CCol
            className="flex items-center flex-col gap-3"
            xs={3}
          >
            <img
              src="https://avatars.githubusercontent.com/u/69998059?v=4https://avatars.githubusercontent.com/u/69998059?v=4"
              alt=""
              srcset=""
              className="rounded-full w-40 h-40"
            />
            <Typography color="primary" variant="h4">
              César Zárate
            </Typography>
            <Button fullWidth variant="contained">
              Perfil
            </Button>
            
          </CCol>
          <CCol>
            <Typography color="primary" variant="h4">
              Perfil
            </Typography>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Profile;
