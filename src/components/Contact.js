import React, { useState } from "react";
import {ArrowBack } from '@material-ui/icons'
import {A} from 'hookrouter'; 
import './styles/Contact.scss'


function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);
    // You can replace the console.log statements with your desired action, such as sending an email or making an API call.
  };

  return (
    <div className="contact">
        <A href ='/ ' >
            <ArrowBack className ='arrow'/>
        </A>
        
    <form className="inputs" onSubmit={handleSubmit}>
      <div>
        <h1 htmlFor="name">Name:</h1>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <h1 htmlFor="email">Email:</h1>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <h1 htmlFor="message">Message:</h1>
        <textarea
          className="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
      </div>
      <button type="submit">Submit</button>
    </form>
    </div>
  );
}

export default Contact;
