const express = require('express');
const app = express();
require('dotenv').config();
//DB Connection Import
const {connectDB} = require('./db/ConnectDB.js');
//Models Import
const contactUser = require('./models/ContactModel.js');
const cors = require('cors');


//middlewares
app.use(cors());
app.use(express.json())

//DB connection
connectDB();

app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.post('/contact', async (req,res)=>{
    const {name, email, phone, message} = req.body
    
    try {
        const addedContact = await contactUser.create({
            name: name,
            email: email,
            phone: phone,
            message: message
        })

        res.status(201).send({
            success: true,
            data: addedContact
        })
    } catch (error) {
        console.log(error.message)
        res.status(500).send({
            success: false,
            err: error.message
        })
    }
})

app.get('/contact', async (req,res)=>{
    try {
        const allContact = await contactUser.find();
        res.send(allContact);
    } catch (error) {
        console.log(error)
    }
})

app.listen(process.env.PORT);