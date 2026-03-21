import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">

      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">Placement Portal</h1>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="nav-buttons">
          <button className="login-btn" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="register-btn" onClick={() => navigate("/register")}>
            Register
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
  <div className="hero-overlay">
    <h2>Smart Student Placement System</h2>
    <p>
      Connecting Students, Companies & Placement Officers in one platform
    </p>

    <div className="hero-buttons">
      <button onClick={() => navigate("/register")}>Get Started</button>
      <button className="secondary">Explore Jobs</button>
    </div>
  </div>
</section>
      {/* Roles Section */}
      <section className="roles">
        <h3>Choose Your Role</h3>

        <div className="role-container">

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png"
              alt="student"
            />
            <h4>Student</h4>
            <p>Apply for jobs, upload resume, and track placement status.</p>
            <button onClick={() => navigate("/login")}>
              Login as Student
            </button>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
              alt="company"
            />
            <h4>Company</h4>
            <p>Post jobs, shortlist candidates and hire top talent.</p>
            <button onClick={() => navigate("/login")}>
              Login as Company
            </button>
          </div>

          <div className="card">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135768.png"
              alt="admin"
            />
            <h4>Placement Cell</h4>
            <p>Manage students, companies and placement activities.</p>
            <button onClick={() => navigate("/login")}>
              Admin Login
            </button>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="features">
        <h3>Key Features</h3>

        <div className="feature-grid">
          <div className="feature-item">📄 Resume Upload</div>
          <div className="feature-item">📊 Dashboard Tracking</div>
          <div className="feature-item">🔔 Notifications</div>
          <div className="feature-item">📈 Placement Analytics</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Placement Portal. All rights reserved.</p>
      </footer>

    </div>
  );
}