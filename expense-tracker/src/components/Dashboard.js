import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const doLogout = () => {
    navigate("/");
  };
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={doLogout}>Logout</button>
    </div>
  );
}

export default Dashboard;
