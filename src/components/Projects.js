import './styles/Projects.scss';
import React, { useState, useRef } from 'react';
import Game from './Game'; // Add this line if the game component is exported from the file 'Game.js'

function Box({ label, color, onClick, visible }) {
  return (
    <div
      className="box"
      onClick={onClick}
      style={{
        backgroundColor: color,
        visibility: visible ? 'visible' : 'hidden',
        opacity: visible ? 1 : 0,
      }}
    >
      {label}
    </div>
  );
}

// Change the Popup to accept a content parameter instead of message
function Popup({ onClose, content }) {
  return (
    <div className="popup">
      <div className="popup-content">
        {typeof content === 'string' ? <p>{content}</p> : content}
        <button className="close-button" onClick={onClose}>X</button>
      </div>
    </div>
  );
}

function Projects() {
  const [popups, setPopups] = useState([]);
  const [visible, setVisible] = useState(true);
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


  const handleClick = (content) => {
    setPopups([...popups, content]);
    setVisible(false);
  };

  const handleClose = (index) => {
    setPopups([...popups.slice(0, index), ...popups.slice(index + 1)]);
    setVisible(true);
  };

  return (
      <div ref={projectsRef} className={`projects ${isOpen ? '' : 'collapsed'}`} id="Projects">
        <h1 onClick={toggleSection}>Projects</h1>
      {popups.map((content, index) => (
        <Popup key={index} content={content} onClose={() => handleClose(index)} />
      ))}
      <div className="box-container">
        
      
        <Box
          label="Web Dev Project"
          color="#0081a7"
          onClick={() => handleClick('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')}
          visible={visible}
        />
        <Box
          label="Vegan Duck Hunt"
          color="#00afb9"
          onClick={() => handleClick(<Game />)} // Set the content to be the Game component when this box is clicked
          visible={visible}
        />
        <Box
          label="Project 3"
          color="#fed9b7"
          onClick={() => handleClick('Popup message 3')}
          visible={visible}
        />
        <Box
          label="Project 4"
          color="#f07167"
          onClick={() => handleClick('Popup message 4')}
          visible={visible}
        />
      </div>
    </div>
  );
}

export default Projects;
