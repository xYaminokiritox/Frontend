import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import Register from "./components/Register.js";
import "./Asset/css/App.css";
import Dashboard from "./components/Dashboard.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
