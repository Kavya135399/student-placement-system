      import React from "react";
      import { Link } from "react-router-dom";

      export default function About() {
        return (
          <div>

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

            {/* About Content */}
            <div className="page-container">
              <h1 style={{ color: "black" }}>About Placement Portal</h1>

              <p>
                The Student Placement System is designed to connect students,
                companies, and placement officers in a single platform.
              </p>

              <div className="about-grid">
                <div className="about-card">
                  <h3>🎓 For Students</h3>
                  <p>Apply for jobs, upload resumes, and track your progress.</p>
                </div>

                <div className="about-card">
                  <h3>🏢 For Companies</h3>
                  <p>Post jobs and hire talented students easily.</p>
                </div>

                <div className="about-card">
                  <h3>🧑‍💼 For Placement Cell</h3>
                  <p>Manage students, companies, and placement activities.</p>
                </div>
              </div>
            </div>

            {/* Footer */}
            <footer className="footer">
              <p>© 2026 Placement Portal. All rights reserved.</p>
            </footer>

          </div>
        );
      }