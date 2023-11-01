import React from "react";
import {
  Typography,
  TextField,
  Button,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";

const Register = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-2/3 flex  flex-col gap-14">
        <div className="flex justify-center">
          <Typography color="primary" variant="h4">
            Inicia sesion
          </Typography>
        </div>
        <div className="flex flex-row gap-4">
          <TextField
            sx={{ input: { color: "#FAD264" } }}
            focused
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Nombres"
            variant="outlined"
          />
          <TextField
            sx={{ input: { color: "#FAD264" } }}
            focused
            fullWidth
            color="primary"
            id="outlined-basic"
            label="Apellidos"
            variant="outlined"
          />
        </div>

        <TextField
          sx={{ input: { color: "#FAD264" } }}
          focused
          fullWidth
          color="primary"
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
        />
        <TextField
          sx={{ input: { color: "#FAD264" } }}
          focused
          fullWidth
          color="primary"
          id="outlined-basic"
          label="Contraseña"
          variant="outlined"
        />
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
          <Typography color="#f5f5f5" display="inline">
            Inicia sesión aqui
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Register;
