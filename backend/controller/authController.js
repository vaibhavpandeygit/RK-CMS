// steps: 
// 1. Check existing User
// 2. Hash Password
// 3. Create employee
// 4. Token generate
const dotenv = require('dotenv').config()
const auth = require('../models/authModel')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const employeeSignUp = async (req,res)=>{
    try {
        const { name, email, role, password } = req.body;

        const employeeExist = await auth.findOne({ email: email });
        if (employeeExist) {
          return res.status(400).json({ message: "Employee allready exists" });
        }
        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await auth.create({
          name: name,
          email: email,
          role: role,
          password: hashedPassword,
        });

    const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET_KEY)
    res.status(201).json({user: result,token: token})

    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Something Went Wrong"})
    }
}



const employeeSignIn= async (req,res)=>{
    try {
        const { email, password } = req.body;

        const employeeExist = await auth.findOne({ email: email });
        if (!employeeExist) {
          return res.status(404).json({ message: "Employee does not exist" });
        }

        const matchedPassword = await bcrypt.compare(password,employeeExist.password);
        if(!matchedPassword){
            return res.status(400).json({message:"Invalid Credential"})
        }

        const token = jwt.sign({email:employeeExist.email,id:employeeExist._id}, process.env.SECRET_KEY);
        res.status(201).json({employee: employeeExist,token:token})
    
    } catch (error) {
        console.log(error)
        res.status(500).json("something went wrong")
    }
}

module.exports = {employeeSignUp,employeeSignIn}