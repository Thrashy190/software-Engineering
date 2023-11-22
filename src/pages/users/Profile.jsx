import { useState } from 'react';

import { Typography, TextField, Button } from '@mui/material';
import { CContainer, CRow, CCol } from "@coreui/react";

import UserNav from '../../components/users/UserNav';
import CustomTextField from '../../components/custom/CustomTextField';

import { useEffect } from 'react';

import { useAuth } from '../../context/AuthContext';

import { getDocument } from '../../firebase/firestore';

const Profile = () => {

  const { currentUser } = useAuth();

  const [user, setUser] = useState({});

  useEffect(() => {

    const getUser = async () => {
      const myUser = await getDocument('users', currentUser.uid);
      setUser(myUser);
    }

    getUser();
  }, []);

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

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

            <CustomTextField
              label={user.name ? '' : 'Nombre'}
              value={user.name}
              name="name"
              onChange={handleInputs}
            />

            <CustomTextField
              label={user.lastname ? '' : 'Apellido'}
              value={user.lastname}
              name="lastname"
              onChange={handleInputs}
            />

            <CustomTextField
              label={user.email ? '' : 'Correo'}
              value={user.email}
              name="email"
              onChange={handleInputs}
            />

            <Button
              variant="contained"
              style={{ marginLeft: 'auto' }}
              onClick={() => { }}
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
