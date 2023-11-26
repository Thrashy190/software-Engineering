import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const CustomPasswordTextField = ({ value, label, name, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className="flex flex-row gap-2">
      <TextField
        type={showPassword ? "text" : "password"}
        fullWidth
        label={label}
        value={value}
        name={name}
        variant="outlined"
        onChange={onChange}
        sx={{
          "& label": {
            color: (theme) => theme.palette.primary.main,
          },
          input: {
            color: (theme) => theme.palette.primary.main,
          },
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: (theme) => theme.palette.primary.main,
            },
            "&:hover fieldset": {
              borderColor: "white",
            },
          },
        }}
      />
      <Button variant="contained" onClick={handleClickShowPassword}>
        {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
      </Button>
    </div>
  );
};

export default CustomPasswordTextField;
