import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../index.css";

export default function StudentDashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token || role !== "student") {
      navigate("/login");
    }
  }, [navigate]);

  const name = localStorage.getItem("name");

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="layout">

      {/* SIDEBAR */}
      <aside className="sidebar">
  <h2 className="logo">🎓 PMS</h2>

  <nav className="navMenu">
    <div onClick={() => navigate("/student-dashboard")} className="menu active">
      <span>🏠</span> Dashboard
    </div>

    <div onClick={() => navigate("/profile")} className="menu">
      <span>👤</span> Profile
    </div>

    <div onClick={() => navigate("/jobs")} className="menu">
      <span>💼</span> Jobs
    </div>

    <div onClick={() => navigate("/applications")} className="menu">
      <span>📊</span> Applications
    </div>

    <div onClick={() => navigate("/interviews")} className="menu">
      <span>📅</span> Interviews
    </div>
  </nav>

  <button className="logoutBtn" onClick={handleLogout}>
    🚪 Logout
  </button>
</aside>

      {/* MAIN */}
      <main className="mainContent">

        {/* TOPBAR */}
        <div className="topbar">
          <h3>Welcome back, {name} 👋</h3>
        </div>

        {/* DASHBOARD CARDS */}
        <div className="cardGrid">

          <div className="dashCard" onClick={() => navigate("/jobs")}>
            <h3>💼 Jobs</h3>
            <p>Explore available jobs</p>
          </div>

          <div className="dashCard" onClick={() => navigate("/applications")}>
            <h3>📊 Applications</h3>
            <p>Track your status</p>
          </div>

          <div className="dashCard" onClick={() => navigate("/interviews")}>
            <h3>📅 Interviews</h3>
            <p>Upcoming schedules</p>
          </div>

          <div className="dashCard" onClick={() => navigate("/profile")}>
            <h3>👤 Profile</h3>
            <p>Update your details</p>
          </div>

        </div>

      </main>
    </div>
  );
}