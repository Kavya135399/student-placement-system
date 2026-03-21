import React from "react";

export default function Interviews() {
  const interviews = [
    { company: "TCS", date: "25 March", time: "10:00 AM" },
  ];

  return (
    <div>
      <h2>Interview Schedule</h2>

      {interviews.map((item, index) => (
        <p key={index}>
          {item.company} - {item.date} - {item.time}
        </p>
      ))}
    </div>
  );
}