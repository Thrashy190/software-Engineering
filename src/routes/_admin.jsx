import React from "react";
import CIcon from "@coreui/icons-react";
import { CNavGroup } from "@coreui/react";
import {
  cilHome,
  cilClipboard,
  cilAccountLogout,
  cilUser,
  cilUserPlus,
  cilCreditCard,
} from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _admin = [
  {
    component: CNavTitle,
    name: "General",
  },
  {
    component: CNavItem,
    name: "Home",
    to: "/admin/home",
    icon: <CIcon icon={cilHome} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: "Cursos",
    to: "/admin/courses",
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "Cursos",
        to: "/admin/courses",
      },
      {
        component: CNavItem,
        name: "Crear curso",
        to: "/admin/create-courses",
      },
    ],
  },
  {
    component: CNavItem,
    name: "Usuarios",
    to: "/admin/users",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Perfil",
    to: "/admin/profile",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: "Sesión",
  },
  {
    component: CNavItem,
    name: "Cerrar sesión",
    to: "/home",
    icon: <CIcon icon={cilAccountLogout} customClassName="nav-icon" />,
  },
];

export default _admin;
