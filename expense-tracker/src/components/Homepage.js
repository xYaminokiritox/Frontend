import React from "react";
import myImage from "../Asset/img/img1.jpeg";
import { Link, useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  const doLogin = () => {
    console.log("Clicked");
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <div className="leftcontainer">
        <p> Welcome to Expense Tracker</p>
        <p> Manage your expenses here</p>
        <img src={myImage} alt="My Example" />
      </div>
      <div className="rightcontainer">
        <div className="formcard">
          <div>
            <h2 style={{ alignSelf: "center" }}>Login</h2>
          </div>
          <div>
            <label>E-mail</label>
            <input placeholder="Enter your E-mail" required type="email" />
          </div>
          <div>
            <label>Password</label>
            <input placeholder="Enter your Password" required type="password" />
          </div>
          <div>
            <button onClick={doLogin}>Login</button>
          </div>
          <div>
            <span style={{ alignSelf: "center" }}>
              Not a user? <Link to="/register">Register</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
