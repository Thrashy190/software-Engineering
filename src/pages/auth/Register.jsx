import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTextField from "../../components/custom/CustomTextField";
import CustomPasswordTextField from "../../components/custom/CustomPasswordTextField";
import { useAuth } from "../../context/AuthContext";
import { EMAIL_REGEX } from "../../utils/regex";
import Notification from "../../components/shared/Notifications";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [check, setCheck] = React.useState(false);
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [user, setUser] = React.useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [notify, setNotify] = React.useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const handleInputs = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setCheck(e.target.checked);
  };

  const handleCreateUser = async () => {
    // if (!check) {
    //   setNotify({
    //     isOpen: true,
    //     message: "Debes aceptar los terminos y condiciones",
    //     type: "error",
    //   });
    //   return;
    // }

    if (user.password !== user.confirmPassword) {
      setNotify({
        isOpen: true,
        message: "Las contraseñas no coinciden",
        type: "error",
      });
      return;
    }

    if (user.password.length < 6) {
      setNotify({
        isOpen: true,
        message: "La contraseña debe tener al menos 6 caracteres",
        type: "error",
      });
      return;
    }

    if (user.name === "" || user.lastname === "") {
      setNotify({
        isOpen: true,
        message: "Debes ingresar tu nombre y apellido",
        type: "error",
      });
      return;
    } else if (user.email === "") {
      setNotify({
        isOpen: true,
        message: "Debes ingresar tu correo electronico",
        type: "error",
      });
      return;
    }

    if (user.confirmPassword === "") {
      setNotify({
        isOpen: true,
        message: "Debes confirmar tu contraseña",
        type: "error",
      });
      return;
    }

    if (!EMAIL_REGEX.test(user.email)) {
      setNotify({
        isOpen: true,
        message: "Debes ingresar un correo electronico valido",
        type: "error",
      });
      return;
    }

    await signUp(user);
  };

  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-4">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Registrate
          </Typography>
        </div>
        <div className="flex flex-row gap-4">
          <CustomTextField
            label="Nombres"
            value={user.name}
            name="name"
            onChange={handleInputs}
          />
          <CustomTextField
            label="Apellidos"
            value={user.lastname}
            name="lastname"
            onChange={handleInputs}
          />
        </div>
        <CustomTextField
          label="Correo electronico"
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
        <CustomPasswordTextField
          label="Confirmar contraseña"
          value={user.confirmPassword}
          name="confirmPassword"
          onChange={handleInputs}
        />
        {/* <div className="flex justify-start">
          <FormGroup>
            <FormControlLabel
              onChange={handleCheck}
              control={
                <Checkbox
                  color="primary"
                  sx={{
                    color: (theme) => theme.palette.primary.main,
                    "&.Mui-checked": {
                      color: (theme) => theme.palette.primary.main,
                    },
                  }}
                />
              }
              label={
                <Typography color="primary">
                  He leído y acepto la Términos del servicio y Política de
                  Privacidad del Cliente.
                </Typography>
              }
            />
          </FormGroup>
        </div> */}
        <Button
          fullWidth
          variant="contained"
          onClick={() => handleCreateUser()}
        >
          Crea tu cuenta aqui
        </Button>
        <div className="flex justify-end flex-row gap-2">
          <Typography color="primary">¿Ya tienes una cuenta?</Typography>
          <div onClick={() => navigate("/login")}>
            <Typography
              sx={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "white",
                ":hover": { color: (theme) => theme.palette.primary.main },
              }}
            >
              Inicia sesión aqui
            </Typography>
          </div>
        </div>
      </div>
      <Notification notify={notify} setNotify={setNotify} position={"top"} />
    </div>
  );
};

export default Register;
