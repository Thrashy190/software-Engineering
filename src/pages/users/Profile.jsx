import { Typography, Button } from '@mui/material';
import { CContainer, CRow, CCol } from "@coreui/react";

import UserNav from '../../components/users/UserNav';

const Profile = () => {
  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs={3}>
            <UserNav />
          </CCol>
          <CCol className='flex items-center flex-col gap-3'>
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
