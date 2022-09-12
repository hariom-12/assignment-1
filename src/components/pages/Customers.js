import React from 'react'

export default function Customers() {
  return (
    <React.Fragment>
                <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Customers</li>
          </ol>
        </nav>
        <h1 className="h2">Customers</h1>
        <p>This is the Customers of a simple admin interface which is part of a tutorial written on Themesberg</p>
    </React.Fragment>
  )
}
