import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="nav-title">
        <h2>Dashboard</h2>
      </div>

      <div className="nav-search">
        <input type="text" placeholder="Search expenses..." />
      </div>

      <div className="nav-actions">
        <span>🔔</span>
        <span>🌙</span>
        <span>👤 Nikhil</span>
      </div>
    </div>
  );
}
