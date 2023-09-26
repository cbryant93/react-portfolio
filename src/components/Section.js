import React, { useRef, useEffect } from "react";
import './styles/Section.scss';
import chris from './assets/chris2.jpeg';

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
            I have six years of experience as a QA Engineer in the industry.
            I bring a unique blend of skills to the table, thanks to my creative approach to technology and proficiency in various computing tools.
            Throughout my career, I've worked in diverse roles and systems, which has given me a wide range of abilities.
            In these roles, I've realized the significance of effective communication and the importance of establishing strong and valuable relationships with colleagues, managers, and clients. I've demonstrated this by leveraging my confident personality in presentations and interactions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Section;
