import React from "react";

export default function Home() {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="/">Home</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Home Page
          </li>
        </ol>
      </nav>
      <h1 className="h2">Home Page</h1>
      <p>
        This is the Home Page.
      </p>
    </>
  );
}
