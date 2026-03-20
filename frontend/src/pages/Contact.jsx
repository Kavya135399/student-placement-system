import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
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
          <button className="login-btn">Login</button>
          <button className="register-btn">Register</button>
        </div>
      </nav>

      {/* Contact Content */}
      <div className="page-container">
        <h1 style={{ color: "black" }}>Contact Us</h1>

        <p>Have questions? Reach out to us.</p>

        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2026 Placement Portal. All rights reserved.</p>
      </footer>

    </div>
  );
}