import { TextField } from "@mui/material";

const CustomTextField = ({ label, value, name, onChange, disable }) => {
  return (
    <>
      <TextField
        disabled={disable ? true : false}
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
            //Disabled textfield
            "&.Mui-disabled fieldset": {
              borderColor: (theme) => theme.palette.primary.main,
            },
            // input text color to primary
            "& .Mui-disabled": {
              color: (theme) => theme.palette.primary.main,
              fill: (theme) => theme.palette.primary.main,
            },
          },
        }}
      />
    </>
  );
};

export default CustomTextField;
