import React from 'react'
import {Link} from "react-router-dom"

export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-primary"  data-bs-theme="dark">
  <div className="container">
    <Link className="navbar-brand" to="/">EMS</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" to="/addEmployee">Add Employee</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">View Employee</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}
