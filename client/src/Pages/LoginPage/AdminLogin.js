import React, { useState } from 'react'
import './login.css'
import { Link } from 'react-router-dom'
import Layout from '../../components/componentCSS/Layout'

const AdminLogin = () => {

  return (
    <Layout>
      <div className='form-container'>
      <form>
          <h4 className='title'>Admin Login</h4>
          
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder='Email'
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder='Password'
              required
            />
          </div>
          <div className='buttondiv'>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          </div>

          <p>For employee login click<Link to={'/employeelogin'} className='text-muted'>Employee Login</Link></p>
        </form>
      </div>
    </Layout>
  )
}

export default AdminLogin