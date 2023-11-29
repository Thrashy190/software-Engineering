import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();
  const items = JSON.parse(localStorage.getItem("user"));
  return items ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
