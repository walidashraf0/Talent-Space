import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Auth/AuthOperations/Login/Login";
import Register from "./Pages/Auth/AuthOperations/Register/Register";
import HomePage from "./Pages/Website/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* AuthOperations */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
