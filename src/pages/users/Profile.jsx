import { useState } from 'react';

import { Typography, TextField, Button } from '@mui/material';
import { CContainer, CRow, CCol } from "@coreui/react";

import UserNav from '../../components/users/UserNav';
import { useEffect } from 'react';

import { useAuth } from '../../context/AuthContext';

import { getDocument } from '../../firebase/firestore';

const Profile = () => {

  const { currentUser } = useAuth();

  const [ user, setUser] = useState({});

  useEffect(() => {

    const getUser = async () => {
      const myUser = await getDocument('users', currentUser.uid);
      setUser(myUser);
    }

    getUser();
  }, [])

  return (
    <>
      <CContainer>
        <CRow>
          <CCol xs={3}>
            <UserNav />
          </CCol>
          <CCol className='flex items-center flex-col gap-3'>
            <Typography color="primary" variant="h4">
              Perfil de { user.name }
            </Typography>

            <TextField
              color="primary"
              id="outlined-basic"
              label="Nombre"
              variant="outlined"
              fullWidth
            />

            <TextField
              color="primary"
              id="outlined-basic"
              label="Apellido"
              variant="outlined"
              fullWidth
            />

            <TextField
              color="primary"
              id="outlined-basic"
              label="Correo"
              variant="outlined"
              fullWidth
            />

            <TextField
              color="primary"
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              fullWidth
            />

            <TextField
              color="primary"
              id="outlined-basic"
              label="Confirmar contraseña"
              variant="outlined"
              fullWidth
            />

            <Button
              variant="contained"
              // Align the button to the right
              style={{ marginLeft: 'auto' }}
            >
              Guardar
            </Button>
          </CCol>
        </CRow>
      </CContainer>
    </>
  );
};

export default Profile;
