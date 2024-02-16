import React from 'react'
import './componentCSS/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            RK Associates
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link active" aria-current="page" href="#">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/services'} className="nav-link" href="#">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/adminlogin'} className="nav-link" href="#">
                  Admin
                </Link>
              </li>
              <li className="nav-item">
                <Link to={'/employeelogin'} className="nav-link" href="#">
                  Employee
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header
