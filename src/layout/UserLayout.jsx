import NavBar from "../components/shared/NavBar.jsx";
import Footer from "../components/shared/Footer.jsx";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

const UserLayout = () => {
  const location = useLocation();

  if (
    location.pathname === "/login" ||
    location.pathname === "/register" ||
    location.pathname === "/recover-password"
  ) {
    return (
      <div>
        <div className="min-h-screen bg-light bg-gradient-to-b from-[#14181A] to-[#67237E]  pt-5 px-10">
          <NavBar />
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="min-h-screen  bg-light bg-gradient-to-b from-[#14181A] to-[#67237E]  pt-5 px-10">
        <NavBar />
        <div className="min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default UserLayout;
