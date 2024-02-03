import React from 'react'
import './LoginPageCSS/Login.css'
import { Link } from 'react-router-dom'

const AdminLogin = () => {
  return (
    <div>
      <div className="form-container m-4">
        <h1 style={{fontFamily:'georgia'}} className="text-center">Admin Login</h1>
          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Admin Email"
                required
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                required
              />
            </div>
            <h6>
              <Link >Forget Password</Link>
            </h6>

            <button type="submit" className="btn btn-success">
              Login
            </button>
          </form>
        </div>
    </div>
  )
}

export default AdminLogin
