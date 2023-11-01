import React from "react";
import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CImage,
  CSidebarToggler,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";

import { AppSidebarNav } from "./SidebarOption.jsx";

import navigation from "../../routes/Router.jsx";

const SideBar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarNav>
        <AppSidebarNav items={navigation} />
      </CSidebarNav>
    </CSidebar>
  );
};

export default React.memo(SideBar);
