import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const Login = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-14">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Inicia sesion
          </Typography>
        </div>
        <TextField
          color="primary"
          id="outlined-basic"
          label="E-mail"
          variant="outlined"
        />
        <TextField
          color="primary"
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
        />
        <div className="flex justify-start">
          <Typography
            color="#f5f5f5"
            variant="text"
            sx={{ textDecoration: "underline" }}
            display="inline"
          >
            He olvidado mi contraseña
          </Typography>
        </div>
        <Button fullWidth variant="contained">
          Crea tu cuenta aqui
        </Button>
        <div className="flex justify-end flex-row gap-2">
          <Typography color="primary">¿No tienes una cuenta?</Typography>
          <Typography
            color="#f5f5f5"
            sx={{ textDecoration: "underline" }}
            display="inline"
          >
            Crea tu historia aqui
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Login;
