import React, { useRef, useEffect } from "react";
import './styles/Skills.scss';

const Skills = ({ isOpen, onToggle }) => {
  const skillsRef = useRef(null);

  const handleToggle = () => {
    onToggle(); // Call the function passed from App to handle state change

    if (!isOpen) { // If the section was closed
      setTimeout(() => { // Wait for the transition to complete
        skillsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly into view
      }, 300); // 300ms is the duration of your transition
    }
  };

  useEffect(() => {
    if (isOpen) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div ref={skillsRef} className={`skills ${isOpen ? '' : 'collapsed'}`} id="Skills">
      <div className="skill__container">
        <div className="skill__content">
          <h1 onClick={handleToggle}>Skills</h1>
                <p>Experience in frontend and backend development</p>
                <p>Web Development</p>
                <p>Java </p>
                <p>SQL</p>
                <p>Selenium + Cucumber</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
