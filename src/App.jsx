import { Routes, Route } from "react-router-dom";
import "./scss/style.scss";
import ProtectedRoute from "./components/shared/ProtectedRoute";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Review from "./pages/users/Review";
import Course from "./pages/courses/Course";
import CourseList from "./pages/courses/CourseList";
import MyCourses from "./pages/users/MyCourses";
import Landing from "./pages/landing/Landing";
import ProfileUser from "./pages/users/Profile";
import ProfileAdmin from "./pages/admin/Profile";
import RecoverPassword from "./pages/auth/RecoverPassword";
import Lection from "./pages/courses/Lection";

import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";

import UsersList from "./pages/admin/UsersList";
import Home from "./pages/admin/Home";
import Courses from "./pages/admin/Courses";
import CourseCreator from "./pages/admin/CourseCreator";
import PaymentsList from "./pages/admin/Payments";
import CourseEditor from "./pages/admin/CourseEditor.jsx";

function App() {
  return (
    <div className="bg-red-900">
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<Landing />} />
          <Route path="home" element={<Landing />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="recover-password" element={<RecoverPassword />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="courses" element={<CourseList />} />
          <Route element={<ProtectedRoute />}>
            <Route path="review/:id" element={<Review />} />
            <Route
              path="lection/:id/:moduleindex/:lessonindex"
              element={<Lection />}
            />
            <Route path="mycourses" element={<MyCourses />} />
            <Route path="profile" element={<ProfileUser />} />
          </Route>
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route element={<ProtectedRoute />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="users" element={<UsersList />} />
            <Route path="payments" element={<PaymentsList />} />
            <Route path="courses" element={<Courses />} />
            <Route path="create-courses" element={<CourseCreator />} />
            <Route path="editar-courses/:courseId" element={<CourseEditor />} />
            <Route path="profile" element={<ProfileAdmin />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
