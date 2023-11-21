import React from "react";
import {
  CCloseButton,
  CSidebar,
  CSidebarBrand,
  CSidebarFooter,
  CSidebarHeader,
  CSidebarNav,
  CSidebarToggler,
} from "@coreui/react";
import { useSelector, useDispatch } from "react-redux";
import { AppSidebarNav } from "./SidebarOption.jsx";

import navigation from "../../routes/_admin.jsx";

import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

const SideBar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector((state) => state.sidebarUnfoldable);
  const sidebarShow = useSelector((state) => state.sidebarShow);

  const vars = {
    "--cui-sidebar-bg": "rgb(103,35,112)",
    "--cui-border-style": "none",
  };

  return (
    <CSidebar
      style={vars}
      className="border-end"
      colorScheme="dark"
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={(visible) => {
        dispatch({ type: "set", sidebarShow: visible });
      }}
    >
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarFooter>
        <CSidebarToggler
          onClick={() =>
            dispatch({ type: "set", sidebarUnfoldable: !unfoldable })
          }
        />
      </CSidebarFooter>
    </CSidebar>
  );
};

export default React.memo(SideBar);
