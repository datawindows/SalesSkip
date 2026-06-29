import React, { useState } from "react";
import "./App.css";

function RightPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Email: ${email}\nPassword: ${password}`);
  };

  return (
    <div className="right-page">
      <h1 className="title">SaleSkip</h1>
      <p className="welcome-msg">
        Welcome Back! <br />
        Don’t have an account?{" "}
        <a href="#" className="link">
          Create a new account
        </a>{" "}
        now, it’s FREE! Takes less than a minute.
      </p>

      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" className="login-btn">
          Login Now
        </button>

        <button type="button" className="google-btn">
          Login with Google
        </button>

        <a href="#" className="forgot-link">
          Forget password? Click here
        </a>
      </form>
    </div>
  );
}

export default RightPage;
