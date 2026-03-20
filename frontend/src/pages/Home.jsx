import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-gray-50 text-gray-800">

      {/* Navbar */}
    <nav className="navbar">
  <h1 className="logo">Placement Portal</h1>

<div className="nav-links">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact</Link>
</div>

  <div className="nav-buttons">
    <button className="login-btn">Login</button>
    <button className="register-btn">Register</button>
  </div>
</nav>

      {/* Hero Section */}
      <section className="hero">
  <h2>Smart Student Placement System</h2>
  <p>Connecting Students, Companies & Placement Officers in one platform</p>

  <button className="primary-btn">Get Started</button>
  <button className="secondary-btn">Explore Jobs</button>
</section>

      {/* Role Section */}
<section className="roles">
  <h3>Choose Your Role</h3>

  <div className="role-container">
    <div className="card">
         <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="student" className="card-img"/>
      <div>🎓</div>
      <h4>Student</h4>
      <p>Apply for jobs, upload resume, and track placement status.</p>
      <button>Login as Student</button>
    </div>

    <div className="card">
                 <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="student" className="card-img"/>

      <div>🏢</div>
      <h4>Company</h4>
      <p>Post jobs, shortlist candidates and hire top talent.</p>
      <button>Login as Company</button>
    </div>

    <div className="card">
                         <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" alt="student" className="card-img"/>

      <div>🧑‍💼</div>
      <h4>Placement Cell</h4>
      <p>Manage students, companies and placement activities.</p>
      <button>Admin Login</button>
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
      <footer className="bg-gray-800 text-white text-center py-6">
        <p>© 2026 Placement Portal. All rights reserved.</p>
      </footer>

    </div>
  );
}