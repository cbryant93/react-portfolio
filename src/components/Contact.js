import React, { useState, useRef } from "react";
import "./styles/Contact.scss";

function Contact() {
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const projectsRef = useRef(null); 

  const toggleSection = () => {
    setIsOpen(!isOpen);

    if (!isOpen) { // If the section was closed
      setTimeout(() => { // Wait for the transition to complete
        projectsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly into view
      }, 100); // 300ms is the duration of your transition
    }
  };

  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    const form = event.target;
    const formData = new FormData(form); // Get form data

    // Send form data to server using AJAX
    fetch('http://localhost/api/contact/index.php', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          setMessageSent(true); // Display success message to user
          setErrorMessage(""); // Clear any error message
          form.reset(); // Clear form fields
        } else {
          setErrorMessage("An error occurred. Please try again."); // Display error message to user
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage("An error occurred. Please try again."); // Display error message to user
      });
  }

  return (
      <div ref={projectsRef} className={`contact ${isOpen ? '' : 'collapsed'}`} id="Contact">
        <h1 onClick={toggleSection}>CONTACT ME</h1>
      <div className="inputs">
        
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

          {errorMessage && (
            <p className="error">{errorMessage}</p>
          )}

          {messageSent && (
            <p className="success">Email sent! Thank you for contacting me.</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Contact;
