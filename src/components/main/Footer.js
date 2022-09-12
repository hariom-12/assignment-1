import React from 'react'

export default function Footer() {
  return (
    <React.Fragment>
        <footer className="pt-5 d-flex justify-content-between">
          <span>Copyright © 2022-2023 <a href="/">Suncor</a></span>
          <ul className="nav m-0">
            <li className="nav-item">
              <a className="nav-link text-secondary" aria-current="page" href="/">Privacy Policy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">Terms and conditions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-secondary" href="/">Contact</a>
            </li>
          </ul>
        </footer>
    </React.Fragment>
  )
}
