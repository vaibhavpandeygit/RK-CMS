const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');

//DB Connection Import
const {connectDB} = require('./db/ConnectDB.js');
connectDB();


app.use(cors());
app.use(express.json())


//Route
app.use(require('./router/contactRoutes.js'))
app.use(require('./router/authRoutes.js'))





app.get('/',(req,res)=>{
    res.send("Server is running")
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