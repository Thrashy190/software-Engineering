import { useState } from 'react';
import { useEffect } from 'react';

import { Typography, TextField, Button } from '@mui/material';
import { CContainer, CRow, CCol } from "@coreui/react";

import UserNav from '../../components/users/UserNav';
import CustomTextField from '../../components/custom/CustomTextField';
import Notification from '../../components/shared/Notifications';

import { useAuth } from '../../context/AuthContext';

import { getDocument, updateDocument } from '../../firebase/firestore';

const Profile = () => {
  const { currentUser } = useAuth();

  const [user, setUser] = useState({});

  const [notify, setNotify] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const onSave = async (user) => {
    console.log(user);
    await updateDocument('users', currentUser.uid, user)
      .then(() => {
        setNotify({
          isOpen: true,
          message: 'Datos actualizados',
          type: 'success',
        });
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: error.message,
          type: 'error',
        });
      });
  }

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
      <CContainer className='pt-5'>
        <CRow>
          {/* <CCol xs={3}>
            <UserNav userName={`${user.name} ${user.lastname}`} />
          </CCol> */}
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
              onClick={() => onSave(user)}
            >
              Guardar
            </Button>
          </CCol>
        </CRow>
      </CContainer>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </>
  );
};

export default Profile;
