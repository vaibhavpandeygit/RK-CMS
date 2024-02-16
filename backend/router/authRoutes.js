const express = require('express');
const { employeeSignUp , employeeSignIn } = require('../controller/authController');

const router = express.Router();

router.post('/employeesignup',employeeSignUp)

router.post('/employeeSignIn',employeeSignIn)


module.exports = router