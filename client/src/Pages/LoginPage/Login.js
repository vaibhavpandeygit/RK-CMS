import React from 'react'
import AdminLogin from './AdminLogin'
import EmployeeLogin from './EmployeeLogin'

import './LoginPageCSS/Login.css'

const Login = () => {
  return (
    <div>
      <div>
        <h1 className='login-heading text-center mb-3 mt-5'>Login Here</h1>
        <div className='adminSide'><AdminLogin/></div>
        <div className='employeeSide'><EmployeeLogin/></div>
        <hr/>
        <div className='m-5'>
        <p className='text-center p-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt optio distinctio iure vitae est nesciunt sunt ea! Asperiores aut aliquid eos voluptatibus quas at, iste dicta fuga porro ut quam nobis laudantium, deserunt sequi molestias voluptate accusamus? Earum iste dicta laborum dignissimos, quas itaque esse consequuntur saepe rerum fugiat debitis!</p>
        </div>
      </div>
    </div>
  )
}

export default Login
