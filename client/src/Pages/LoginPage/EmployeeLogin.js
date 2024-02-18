import React from 'react'
import Layout from '../../components/Layout';
import { Link } from 'react-router-dom';


const EmployeeLogin = () => {
  return (
    <Layout>
      <div className='form-container'>
      <form>
          <h4 className='title'>Employee Login</h4>
          
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              placeholder='Employee ID'
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

          <p>For employee login click <Link to={'/adminlogin'} className='text-muted'>Admin Login</Link></p>
        </form>
      </div>
    </Layout>
  );
}

export default EmployeeLogin
