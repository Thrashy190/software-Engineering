import React from "react";
import { Button } from "@mui/material";
import { useLocation, redirect } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const NavBar = () => {
  let location = useLocation();
  const [isLogged, setIsLogged] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  if (isLogged)
    return (
      <div className="top-0 left-0 right-0 flex justify-between">
        <div
          className="text-6xl font-turret text-[#FAD264] "
          onClick={() => redirect("")}
        >
          Loading
        </div>
        <div className="flex f-row gap-4">
          <div>
            <Button variant="text">Cursos</Button>
          </div>
          <div>
            <Button variant="text">Cursos</Button>
          </div>
          <div>
            <Button
              variant="contained"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              Diego Antonio Lopez Martinez
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Perfil</MenuItem>
              <MenuItem onClick={handleClose}>Cerrar Sesion</MenuItem>
            </Menu>
          </div>
        </div>
      </div>
    );

  if (location.pathname === "/login" || location.pathname === "/register") {
    return (
      <div className="top-0 left-0 right-0 flex justify-between">
        <div
          className="text-6xl font-turret text-[#FAD264] "
          onClick={() => redirect("")}
        >
          Loading
        </div>
      </div>
    );
  }

  return (
    <div className="top-0 left-0 right-0 flex justify-between">
      <div
        className="text-6xl font-turret text-[#FAD264] "
        onClick={() => redirect("")}
      >
        Loading
      </div>
      <div className="flex f-row gap-4">
        <div>
          <Button variant="text">Cursos</Button>
        </div>
        <div>
          <Button variant="outlined" onClick={() => redirect("login")}>
            Iniciar sesión
          </Button>
        </div>
        <div>
          <Button variant="contained" onClick={() => redirect("register")}>
            Crea tu cuenta aqui
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
