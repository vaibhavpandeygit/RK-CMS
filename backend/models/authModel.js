const mongoose = require('mongoose')

// details of authority - admin and employee

const authSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }


},{timestamps:true})

auth = mongoose.model('auth',authSchema)

module.exports = auth