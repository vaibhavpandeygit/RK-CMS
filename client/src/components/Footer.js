import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footerposition'>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
        <p className="p-1 col-md-4 mb-0 text-secondary">© {new Date().getFullYear()} RK Associates | All Rights Registered</p>

        <ul className="nav p-1 col-md-4 justify-content-end">
          <li className="nav-item"><Link to={'/privacy-policy'} className="footer-link px-2 text-secondary">Privacy Policy</Link></li>
          <li className="nav-item"><Link to={'/aboutus'} className="footer-link px-2 text-secondary">About Us</Link></li>
          <li className="nav-item"><Link to={'/contact'} className="footer-link px-2 text-secondary">Contact Us</Link></li>
        </ul>
      </footer>
    </div>
  )
}

export default Footer