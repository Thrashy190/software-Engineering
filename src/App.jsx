import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<div>Home</div>} />
        <Route path="home" element={<div>Home</div>} />
        <Route path="login" element={<div>login</div>} />
        <Route path="signup" element={<div>registro</div>} />
      </Routes>
    </>
  );
}

export default App;
