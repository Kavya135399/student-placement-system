import React, { useState } from "react";
import "../index.css";

export default function Jobs() {
  const [search, setSearch] = useState("");

  const jobs = [
  { id: 1, title: "Frontend Developer", company: "TCS", location: "Ahmedabad" },
  { id: 2, title: "Backend Developer", company: "Infosys", location: "Pune" },
  { id: 3, title: "Full Stack Developer", company: "Wipro", location: "Bangalore" },
  { id: 4, title: "Software Engineer", company: "Accenture", location: "Hyderabad" },
  { id: 5, title: "Java Developer", company: "Capgemini", location: "Mumbai" },
  { id: 6, title: "React Developer", company: "HCL", location: "Chennai" },
  { id: 7, title: "Node.js Developer", company: "Tech Mahindra", location: "Noida" },
  { id: 8, title: "Data Analyst", company: "Deloitte", location: "Gurgaon" },
  { id: 9, title: "UI/UX Designer", company: "Zensar", location: "Pune" },
  { id: 10, title: "Python Developer", company: "Cognizant", location: "Kolkata" },
];

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="jobsPage">

      {/* Header */}
      <div className="jobsHeader">
        <h2>💼 Find Your Dream Job</h2>
        <input
          type="text"
          placeholder="Search jobs..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="searchInput"
        />
      </div>

      {/* Job List */}
      <div className="jobList">
        {filteredJobs.map((job) => (
          <div className="jobCard" key={job.id}>
            
            <div className="jobTop">
              <h3>{job.title}</h3>
              <span className="badge">New</span>
            </div>

            <p className="company">{job.company}</p>
            <p className="location">📍 {job.location}</p>

            <div className="jobActions">
              <button className="applyBtn">Apply Now</button>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}