import { Routes, Route } from "react-router-dom";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import UserLayout from "./layout/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<UserLayout />}>
          <Route index element={<div>Home</div>} />
          <Route path="home" element={<div>Home</div>} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
