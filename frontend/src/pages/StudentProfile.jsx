import React, { useState } from "react";

export default function StudentProfile() {
  const [profile, setProfile] = useState({
    name: "",
    phone: "",
    skills: "",
  });

  const [resume, setResume] = useState(null);

  const handleSave = () => {
    console.log(profile);
    alert("Profile Saved");
  };

  const handleUpload = () => {
    if (!resume) return alert("Select file first");
    alert("Resume Uploaded");
  };

  return (
    <div>
      <h2>Student Profile</h2>

      <input placeholder="Name" onChange={(e) => setProfile({ ...profile, name: e.target.value })} />
      <input placeholder="Phone" onChange={(e) => setProfile({ ...profile, phone: e.target.value })} />
      <input placeholder="Skills" onChange={(e) => setProfile({ ...profile, skills: e.target.value })} />

      <button onClick={handleSave}>Save Profile</button>

      <hr />

      <input type="file" onChange={(e) => setResume(e.target.files[0])} />
      <button onClick={handleUpload}>Upload Resume</button>
    </div>
  );
}