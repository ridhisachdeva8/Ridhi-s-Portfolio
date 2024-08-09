import React from 'react'

export default function Contact() {
  return (
    <>
     <div className="contact-container">
     <h1 style={{ fontWeight: "600" ,fontFamily:"TimesNewRoman" }}>Contact Us</h1>
    
     <div className="contact-box">
   
     <form>
            <div className="form-group flex">
                <div className="form-group"  style={{marginRight: "10px"}}>
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required/>
                </div>
                <div className="form-group " style={{marginLeft: "10px"}}>
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" required/>
                </div>
            </div>
            <div className="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div className="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" name="subject" required/>
            </div>
            <div className="form-group">
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <div className="form-group">
                <button type="submit">Send Message</button>
            </div>
        </form>
    </div>
</div>
    </>
   
  )
}
