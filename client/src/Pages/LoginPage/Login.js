import React from 'react'
import AdminLogin from './AdminLogin'
import EmployeeLogin from './EmployeeLogin'

import './LoginPageCSS/Login.css'

const Login = () => {
  return (
    <div>
      <div className='adminSide'><AdminLogin/></div>
      <div className='employeeSide'><EmployeeLogin/></div>
    </div>
  )
}

export default Login
