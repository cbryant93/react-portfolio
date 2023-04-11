import React, { useState } from "react";
import "./styles/Contact.scss";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form); // Get form data

    // Send form data to server using AJAX
    fetch('http://localhost/api/contact/index.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Display success message to user
        setMessageSent(true);

        // Clear form fields
        form.reset();
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="contact" id="Contact">
      <div className="inputs">
        <h1>CONTACT ME</h1>
        <form onSubmit={handleSubmit} className="form">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter Name..."
            tabIndex="1"
            required
          />

          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@123.com"
            tabIndex="2"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Hello There!"
            tabIndex="3"
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
            tabIndex="4"
          ></textarea>

          <button type="submit" className="btn">
            Send Message!
          </button>
          {messageSent && (
            <p className="success">Your message has been sent!</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
