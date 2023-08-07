import React, { useState, useRef } from "react";
import'./styles/Skills.scss'

const Skills = () => {
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

    return(
        <div ref={projectsRef} className={`skills ${isOpen ? '' : 'collapsed'}`} id="Skills">

            <div className="skill__container">

                <div className="skill__content">
                    <h1 onClick={toggleSection}>Skills</h1>
                    <p>Experience in frontend and backend development</p>
                    <p>Web Development</p>
                    <p>Java </p>
                    <p>SQL</p>
                    <p>Selenium + Cucumber</p>
                </div>

            </div>


        </div>
    )
}

export default Skills