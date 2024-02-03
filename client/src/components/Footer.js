import React from 'react'
import './componentCSS/Footer.css'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="footer text-center text-lg-start">

        
        {/* <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase footer-brand">Footer Content</h5>

              <p className='footer-content'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
                atque ea quis molestias. Fugiat pariatur maxime quis culpa
                corporis vitae repudiandae aliquam voluptatem veniam, est atque
                cumque eum delectus sint!
              </p>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="footer-brand text-uppercase mb-1">Pages</h5>

              <ul className="list-unstyled">
                <li>
                  <Link to={'/'} className="foot-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={'/contact'} className="foot-link">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to={'/terms-conditions'} className="foot-link">
                    Terms & Condition
                  </Link>
                </li>
                <li>
                  <Link to={'/login'} className="foot-link">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="text-white copyRightFoot text-center p-3">
          © 2024 Copyright | RK Associates
        </div>
      </footer>
    </div>
  );
}

export default Footer
