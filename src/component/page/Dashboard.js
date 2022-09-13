import React from "react";

export default function Dashboard() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
          Dashboard
          </li>
        </ol>
      </nav>
      <h1 className="h2">Dashboard</h1>
      <p>
        This is the Dashboard.
      </p>
    </>
  );
}
