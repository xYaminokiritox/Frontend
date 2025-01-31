import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage.js";
import Header from "./components/Header.js";
import Register from "./components/Register.js";
import "./Asset/css/App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
