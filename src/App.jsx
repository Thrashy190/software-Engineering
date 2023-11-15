import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Course from "./pages/courses/Course";
import CourseList from "./pages/courses/CourseList";
import MyCourses from "./pages/users/MyCourses";
import Landing from "./pages/landing/Landing";

import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="course" element={<Course />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="mycourses" element={<MyCourses />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="home" element={<div>Home</div>} />
          <Route path="users" element={<div>Usuarios</div>} />
          <Route path="payments" element={<div>Pagos</div>} />
          <Route path="courses" element={<div>Courses</div>} />
          <Route path="profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
