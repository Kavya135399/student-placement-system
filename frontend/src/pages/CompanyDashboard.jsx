// CompanyDashboard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function CompanyDashboard() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };
  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h1>Welcome Company!</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}