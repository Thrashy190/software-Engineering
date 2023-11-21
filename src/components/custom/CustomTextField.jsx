import { TextField } from "@mui/material";

const CustomTextField = ({ label, value, name, onChange }) => {
  return (
    <>
      <TextField
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
    </>
  );
};

export default CustomTextField;
