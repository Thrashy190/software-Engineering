import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Review from "./pages/users/Review";
import Course from "./pages/courses/Course";
import CourseList from "./pages/courses/CourseList";
import MyCourses from "./pages/users/MyCourses";
import Landing from "./pages/landing/Landing";
import Profile from "./pages/users/Profile";
import RecoverPassword from "./pages/auth/RecoverPassword";

import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

import UsersList from "./pages/admin/UsersList";
import Home from "./pages/admin/Home";
import Courses from "./pages/admin/Courses";
import CourseCreator from "./pages/admin/CourseCreator";
import PaymentsList from "./pages/admin/Payments";

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="ph-review" element={<Review>Reseña</Review>} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="course" element={<Course />} />
          <Route path="courses" element={<CourseList />} />
          <Route path="mycourses" element={<MyCourses />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="users" element={<UsersList />} />
          <Route path="payments" element={<PaymentsList />} />
          <Route path="courses" element={<Courses />} />
          <Route path="create-courses" element={<CourseCreator />} />
          <Route path="editar-courses" element={<div>Editar Courses</div>} />
          <Route path="profile" element={<div>Profile</div>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
