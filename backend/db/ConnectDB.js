const mongoose = require('mongoose')
require('dotenv').config()

const connectDB=async () =>{
    try {
        await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("Database Connected")
        })
        
    } catch (error) {
        console.log(error)
    }
}

module.exports = {connectDB}