import React from "react";
import "./Contact.css";
import contactImg from "./image/contact.jpg";
import emailjs from 'emailjs-com';


function Contact() {

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_w70mb8o','template_iefcelp',e.target,'user_JiqjTZ226lKPmPC0vilrR')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }
    
  return (
    <div
      className="background-img"
      style={{ backgroundImage: `url(${contactImg})` }}
    >
      <div className="contact-details">
        <div className="left-content">
          <h3>DON'T BE SHY !</h3>
          <p>
            Feel free to get in touch with me.
            <br /> I am always open to discussing new projects,
            <br /> creative ideas or opportunities to be part of your visions.
          </p>
        </div>
        <div className="right-content">
          <form onSubmit={sendEmail}>
            <label>Name: </label>
            <br />
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" your name" 
              required           
            />
            <br />
            <label>Email: </label>
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder=" your email"
              required
            ></input>
            <br />
            <label>Subject: </label>
            <br />
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder=" your Subject"
          
            ></input>
            <br />
            <label>Message: </label>
            <br />
            <input
              type="text"
              id="message"
              name="message"
              placeholder=" your Message"
              required
          
            ></input>
           
            <br />
            <input type="submit" value="send"></input>

          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;


