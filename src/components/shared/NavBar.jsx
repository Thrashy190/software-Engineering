import React from "react";
import { Button } from "@mui/material";
import { useLocation, redirect } from "react-router-dom";

const NavBar = () => {
  let location = useLocation();

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
