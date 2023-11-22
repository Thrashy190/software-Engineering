import Sidebar from "../components/admin/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { CContainer } from "@coreui/react";

const AdminLayout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Sidebar />
      <div className="wrapper  d-flex flex-column min-vh-100 bg-light">
        <div className="body flex-grow-1 px-3">
          <CContainer lg>
            <Outlet />
          </CContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
