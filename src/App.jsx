import { Routes, Route } from "react-router-dom";
function App() {

  return (
    <>
      <Routes>
        <Route index element={<div>Home</div >} />
        <Route path="home" element={<div>Home</div >} />
        <Route path="login" element={<div>login</div >} />
        <Route path="registro" element={<div>registro</div >} />
        {/* <Route element={<ProtectedRoute />}>
          <Route path="dashboard" element={<DashboardLayout />}>
            <Route path="cadets" element={<Cadets />} />
            <Route path="cadets/:id" element={<Cadet />} />
            <Route path="processData" element={<GenerateData />} />
            <Route path="addCadet" element={<AddCadet />} />
            <Route path="manageUsers" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
        </Route> */}
      </Routes>
    </>
  )
}

export default App
