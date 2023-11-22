import { TextField } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";

import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CustomSelect = ({ label, value, name, onChange, children }) => {
  return (
    <>
      <FormControl
        fullWidth
        sx={{
          "& label": {
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
          "& .css-11u53oe-MuiSelect-select-MuiInputBase-input-MuiOutlinedInput-input":
            {
              color: (theme) => theme.palette.primary.main,
            },
          "& .MuiSvgIcon-root": {
            fill: (theme) => theme.palette.primary.main,
          },
        }}
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Age"
          onChange={onChange}
        >
          {children}
        </Select>
      </FormControl>
    </>
  );
};

export default CustomSelect;
