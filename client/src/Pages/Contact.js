import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './CSSPage/contact.css'

const Contact = () => {

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");
    const [message,setMessage] = useState("");

    const postData =async ()=>{
            try {
            const {data} = await axios.post('http://localhost:7000/contact',{
                    name: name,
                    email: email,
                    phone: phone,
                    message: message
                })

            } catch (error) {
                console.log(error)
            }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        postData();
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
    }

  return (
    <div className='box'>
      <br></br>
      <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name="name" required />

        <label>Email:</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" name="email" required />

        <label>Phone:</label>
        <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="tel" name="email"/>

        <label>Message:</label>
        <textarea value={message} onChange={(e)=>setMessage(e.target.value)} name="message" rows="4" required></textarea>
        
         <button type="submit">Submit</button>
       
         <h3 style={{"fontFamily": "poppins"}} className='text-center mt-1'>Get in touch with us to explore our best services.</h3>
      </form>
    </div>
    
    <br/>
    </div>
  )
}

export default Contact