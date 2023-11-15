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

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-4">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Registrate
          </Typography>
        </div>
        <div className="flex flex-row gap-4">
          <TextField
            fullWidth
            color="primary"
            label="Nombres"
            variant="outlined"
          />
          <TextField
            fullWidth
            color="primary"
            label="Apellidos"
            variant="outlined"
          />
        </div>

        <TextField fullWidth color="primary" label="Email" variant="outlined" />

        <TextField color="primary" label="Contraseña" variant="outlined" />
        <TextField color="primary" label="Contraseña" variant="outlined" />
        <div className="flex justify-start">
          <FormGroup>
            <FormControlLabel
              color="primary"
              control={<Checkbox color="primary" />}
              label={
                <Typography color="primary">
                  He leído y acepto la Términos del servicio y Política de
                  Privacidad del Cliente.
                </Typography>
              }
            />
          </FormGroup>
        </div>
        <Button fullWidth variant="contained">
          Crea tu cuenta aqui
        </Button>
        <div className="flex justify-end flex-row gap-2">
          <Typography color="primary">¿Ya tienes una cuenta?</Typography>
          <div onClick={() => navigate("/login")}>
            <Typography
              color="#f5f5f5"
              sx={{ textDecoration: "underline", cursor: "pointer" }}
            >
              Inicia sesión aqui
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
