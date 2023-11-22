import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import CustomTextField from "../../components/custom/CustomTextField";
import { useLocation, useNavigate } from "react-router-dom";

const RecoverPassword = () => {
  const navigate = useNavigate();
  const [login, setLogin] = React.useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-14">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Recuperar contraseña
          </Typography>
        </div>
        <CustomTextField
          label="Correo"
          value={login.email}
          name="email"
          onChange={handleInputs}
        />
        <Button fullWidth variant="contained">
          Enviar correo
        </Button>
        <div className="flex justify-end flex-row gap-2">
          <Typography color="primary">¿No tienes una cuenta?</Typography>
          <Typography
            sx={{
              textDecoration: "underline",
              cursor: "pointer",
              color: "white",
              ":hover": { color: (theme) => theme.palette.primary.main },
            }}
            display="inline"
            onClick={() => navigate("/register")}
          >
            Crea tu historia aqui
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default RecoverPassword;
