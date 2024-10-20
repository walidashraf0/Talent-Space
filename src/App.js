import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/AuthOperations/Login/Login";
import Register from "./Pages/Auth/AuthOperations/Register/Register";
import HomePage from "./Pages/Website/HomePage/HomePage";
import ResetPassword from "./Pages/Auth/AuthOperations/RestPassword/RestPassword";
import NewPassword from "./Pages/Auth/AuthOperations/ForgetPassword/NewPassword";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* AuthOperations */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="resetPassword" element={<ResetPassword />} />
        <Route path="newPassword" element={<NewPassword />} />
      </Routes>
    </div>
  );
}

export default App;
