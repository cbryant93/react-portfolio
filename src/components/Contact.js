import React from "react";
import "./styles/Contact.scss";

function Contact() {
  return (
    <div class="contact" id="Contact">
      <div className="inputs">
      <h1>CONTACT ME</h1>
        <form action="http://localhost/api/contact/index.php" method="POST" class="form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name..."
            tabindex="1"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@123.com"
            tabindex="2"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Hello There!"
            tabindex="3"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            cols="50"
            id="message"
            className="message"
            name="message"
            placeholder="Enter Message..."
            tabindex="4"
          ></textarea>

          <button type="submit" className="btn">
            Send Message!
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
