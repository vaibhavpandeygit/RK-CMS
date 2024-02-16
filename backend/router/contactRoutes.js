const express = require('express');
const contactUser = require('../models/ContactModel');

const router = express.Router();

router.post('/contact', async (req,res)=>{
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

module.exports = router