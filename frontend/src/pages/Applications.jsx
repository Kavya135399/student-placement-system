import React from "react";

export default function Applications() {
  const data = [
    { job: "Frontend Developer", status: "Pending" },
    { job: "Backend Developer", status: "Selected" },
  ];

  return (
    <div>
      <h2>Application Status</h2>

      {data.map((item, index) => (
        <p key={index}>
          {item.job} - {item.status}
        </p>
      ))}
    </div>
  );
}