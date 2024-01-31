import React, { useRef, useEffect, useState } from "react";
import './styles/Skills.scss';

const Skills = ({ isOpen, onToggle }) => {
  const skillsRef = useRef(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => {
    if (windowWidth > 1024) {
      return;
    }

    onToggle();

    if (!isOpen) {
      setTimeout(() => {
        skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isOpen) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  return (
    <div ref={skillsRef} className={`skills ${isOpen || windowWidth > 1024 ? '' : 'collapsed'}`} id="Skills">
      <div className="skill__container">
        <h1 onClick={handleToggle}>Skills</h1>
        <div className="skill__content">
          <p>Experience in frontend and backend development</p>
          <p>Web Development</p>
          <p>Java</p>
          <p>SQL</p>
          <p>Selenium + Cucumber</p>
          <p>React</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
