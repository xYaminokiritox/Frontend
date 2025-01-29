import React from "react";
import myImage from "../Asset/img/img1.jpeg";

function Homepage() {
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
            <h2 style={{ alignSelf: "center" }}>Register</h2>
          </div>
          <div>
            <label>Name</label>
            <input placeholder="Enter your Name" required type="text" />
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
            <label>Confirm Password</label>
            <input
              placeholder="Confirm your Password"
              required
              type="password"
            />
          </div>
          <div>
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
