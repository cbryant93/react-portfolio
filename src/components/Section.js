import React, { useRef, useEffect } from "react";
import './styles/Section.scss';
import chris from './assets/me2.JPG';

const Section = ({ isOpen, onToggle }) => {
  const sectionRef = useRef(null);

  const handleToggle = () => {
    // Check if the window width is more than 1280px (desktop mode)
    if (window.innerWidth > 1024) {
      return; // Early return, no further code will be executed.
    }

    onToggle(); // Call the function passed from App to handle state change

    if (!isOpen) { // If the section was closed
      setTimeout(() => { // Wait for the transition to complete
        sectionRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly into view
      }, 300); // 300ms is the duration of your transition
    }
};


  useEffect(() => {
    if (isOpen) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div ref={sectionRef} className={`sections ${isOpen ? '' : 'collapsed'}`} id="About">
      <div className="section__container">
        <div className="section__img">
          <img src={chris} alt="" />
        </div>
        <div className="section__content">
          <h1 onClick={handleToggle}>About Me</h1>
          <p>
                I am a QA Engineer with 5 years experience in the industry. With a creative insight into technology, along with the ability to use a broad selection of computing skills,
                I can bring an eclectic mix of attributes to the table due to working in a variety of roles and systems.
                Within these roles, I have learned the importance of good communication skills and the need to build and maintain successful and meaningful relationships with co-workers, managers, and clients.
                I have also proven this by utilizing my confident personality in my presentational skills.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
