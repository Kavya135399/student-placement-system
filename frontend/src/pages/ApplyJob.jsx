import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ApplyJob() {
  const location = useLocation();
  const navigate = useNavigate();

  const job = location.state;

  // 🚨 FIX: prevent crash
  if (!job) {
    return (
      <div style={{ padding: "20px" }}>
        <h2>No Job Data Found ❌</h2>
        <button onClick={() => navigate("/jobs")}>
          Go Back to Jobs
        </button>
      </div>
    );
  }

  const [form, setForm] = useState({
    name: localStorage.getItem("name") || "",
    email: "",
    resume: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const applications =
      JSON.parse(localStorage.getItem("applications")) || [];

    applications.push({
      ...form,
      job: job.title,
      company: job.company,
      status: "Applied",
    });

    localStorage.setItem("applications", JSON.stringify(applications));

    alert("Applied Successfully");
    navigate("/applications");
  };

  return (
    <div>
      <h2>Apply for {job.title}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="email"
          placeholder="Email"
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Resume Link"
          onChange={(e) =>
            setForm({ ...form, resume: e.target.value })
          }
        />

        <button type="submit">Apply</button>
      </form>
    </div>
  );
}