import React from "react";
import { Typography, TextField, Button } from "@mui/material";
import CustomTextField from "../../components/custom/CustomTextField";
import CustomPasswordTextField from "../../components/custom/CustomPasswordTextField";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-14">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Inicia sesion
          </Typography>
        </div>
        <CustomTextField
          label="Correo"
          value={user.email}
          name="email"
          onChange={handleInputs}
        />
        <CustomPasswordTextField
          label="Contraseña"
          value={user.password}
          name="password"
          onChange={handleInputs}
        />
        <div className="flex justify-start">
          <Typography
            color="#f5f5f5"
            variant="text"
            sx={{
              cursor: "pointer",
              textDecoration: "underline",
              ":hover": { color: (theme) => theme.palette.primary.main },
            }}
            display="inline"
            onClick={() => navigate("/recover-password")}
          >
            He olvidado mi contraseña
          </Typography>
        </div>
        <Button fullWidth variant="contained" onClick={() => login(user)}>
          Inicia sesion aqui
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

export default Login;
