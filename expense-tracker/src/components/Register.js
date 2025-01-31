import React from "react";

function Register() {
  return (
    <div>
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
          <input placeholder="Confirm your Password" required type="password" />
        </div>
        <div>
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Register;
