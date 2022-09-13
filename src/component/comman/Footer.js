import React from "react";

export default function Footer() {
  return (
    <>
      <footer className="pt-5 d-flex justify-content-between">
        <span>
          Copyright © 2022-2023&nbsp;
          <a href="/">Suncor</a>
        </span>
        <ul className="nav m-0">
          <li className="nav-item">
            <a className="nav-link text-secondary" href="/">
              Privacy Policy
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="/">
              Terms and conditions
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-secondary" href="/">
              Contact
            </a>
          </li>
        </ul>
      </footer>
    </>
  );
}
