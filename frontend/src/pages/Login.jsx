import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "../Auth.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // ✅ NEW

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password }
      );

      // ✅ store data
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);
      localStorage.setItem("name", res.data.name);

      // ✅ show success message
      setSuccess("Login successful ✅");

      // ⏳ redirect after 1.5 sec
      setTimeout(() => {
        if (res.data.role === "student") navigate("/student-dashboard");
        else if (res.data.role === "company") navigate("/company-dashboard");
        else if (res.data.role === "admin") navigate("/admin-dashboard");
      }, 1500);

    } catch (err) {
      setError(err.response?.data?.message || "Login failed ❌");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-container">
        <h2>Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
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

          <button type="submit">Log In</button>
        </form>

        {/* ✅ ERROR */}
        {error && <p style={{ color: "red" }}>{error}</p>}

        {/* ✅ SUCCESS */}
        {success && <p style={{ color: "green" }}>{success}</p>}

        <div className="auth-footer">
          Don't have an account? <Link to="/register">Sign up</Link>
        </div>
      </div>
    </div>
  );
}