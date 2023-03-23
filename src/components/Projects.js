
import'./styles/Projects.scss'
import React, { useState } from 'react';



function Box({ label, onClick }) {
    return <div className="box" onClick={onClick}>{label}</div>;
  }
  
  function Popup({ onClose, message }) {
    return (
      <div className="popup">
        <div className="popup-content">
          <p>{message}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    );
  }
  
  function Projects() {
    const [popups, setPopups] = useState([]);
  
    const handleClick = (message) => {
      setPopups([...popups, message]);
    };
  
    const handleClose = (index) => {
      setPopups([...popups.slice(0, index), ...popups.slice(index + 1)]);
    };
  
    return (
      <div className="projects">
        {popups.map((message, index) => (
          <Popup key={index} message={message} onClose={() => handleClose(index)} />
        ))}
        <div className="box-container">
          <Box label="Project 1" onClick={() => handleClick("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis turpis non elementum molestie. Praesent mollis hendrerit venenatis. Fusce vehicula, leo vitae tempor pulvinar, erat mi blandit diam, vitae commodo augue mi sed nibh. Vestibulum ullamcorper molestie enim non pharetra. Morbi at nibh magna. In ac nibh nulla. Nam varius mi at felis egestas luctus. Proin dui mauris, scelerisque molestie porta in, blandit sed eros. Nulla fermentum a libero nec aliquet. Aliquam vehicula vel mauris in malesuada. Vivamus ligula eros, fringilla sed convallis id, viverra sed justo. Etiam accumsan ullamcorper pulvinar. Vivamus suscipit libero ac lacus feugiat lacinia. Etiam vulputate dolor erat, vitae commodo mi consectetur dignissim. Ut aliquet gravida lorem, eget tempus justo scelerisque vel.")} />
          <Box label="Project 2" onClick={() => handleClick("Popup message 2")} />
          <Box label="Project 3" onClick={() => handleClick("Popup message 3")} />
          <Box label="Project 4" onClick={() => handleClick("Popup message 4")} />
        </div>
      </div>
    );
  }

export default Projects