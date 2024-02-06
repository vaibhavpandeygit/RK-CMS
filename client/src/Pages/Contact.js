
import React from 'react'
import './CSSPage/contact.css'

const Contact = () => {
  return (
    <div className='box'>
      <br></br>
      <div className="contact-us-container">
      <h1>Contact Us</h1>
      <form>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>
        
         <button type="submit">Submit</button>
       
      </form>
    </div>


    </div>
  )
}

export default Contact
