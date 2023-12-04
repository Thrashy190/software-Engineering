import { useState } from "react";
import { useEffect } from "react";

import { Typography, TextField, Button } from "@mui/material";
import { CContainer, CRow, CCol } from "@coreui/react";

import Notification from "../../components/shared/Notifications";

import { useAuth } from "../../context/AuthContext";

import { getDocument, updateDocument } from "../../firebase/firestore";

const Profile = () => {
  const { currentUser } = useAuth();

  const [user, setUser] = useState({});

  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const onSave = async (user) => {
    console.log(user);
    await updateDocument("users", currentUser.uid, user)
      .then(() => {
        setNotify({
          isOpen: true,
          message: "Datos actualizados",
          type: "success",
        });
      })
      .catch((error) => {
        setNotify({
          isOpen: true,
          message: error.message,
          type: "error",
        });
      });
  };

  useEffect(() => {
    const getUser = async () => {
      const myUser = await getDocument("users", currentUser.uid);
      setUser(myUser);
    };

    getUser();
  }, []);

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <>
      <CContainer className="pt-5">
        <CRow>
          <CCol className="flex items-center flex-col gap-3">
            <Typography color="secondary" variant="h4">
              Perfil
            </Typography>

            <TextField
              label={user.name ? "" : "Nombre"}
              variant="outlined"
              color="secondary"
              onChange={(e) => handleInputs(e)}
              value={user.name}
              name="name"
              fullWidth
            />

            <TextField
              label={user.lastname ? "" : "Apellido"}
              variant="outlined"
              color="secondary"
              onChange={(e) => handleInputs(e)}
              value={user.lastname}
              name="lastname"
              fullWidth
            />

            <TextField
              disabled
              label={user.email ? "" : "Correo"}
              variant="outlined"
              color="secondary"
              onChange={(e) => handleInputs(e)}
              value={user.email}
              name="email"
              fullWidth
            />

            <Button
              variant="contained"
              style={{ marginLeft: "auto" }}
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
