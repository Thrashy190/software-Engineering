import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilHome,
  cilFolderOpen,
  cilPeople,
  cilSettings,
  cilPlus,
  cilClipboard,
  cilAccountLogout,
  cilUser,
  cilUserPlus,
  cilCreditCard,
} from "@coreui/icons";
import { CNavItem, CNavTitle } from "@coreui/react";

const _adminNav = [
  {
    component: CNavTitle,
    name: "General",
  },
  {
    component: CNavItem,
    name: "Home",
    to: "/admin/home",
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Cursos",
    to: "/admin/courses",
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Usuarios",
    to: "/admin/users",
    icon: <CIcon icon={cilUserPlus} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Pagos",
    to: "/admin/payments",
    icon: <CIcon icon={cilCreditCard} customClassName="nav-icon" />,
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

export default _adminNav;
