import './styles/Projects.scss';
import React, { useState } from 'react';


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
  const [visible, setVisible] = useState(true);

  const handleClick = (message) => {
    setPopups([...popups, message]);
    setVisible(false);
  };

  const handleClose = (index) => {
    setPopups([...popups.slice(0, index), ...popups.slice(index + 1)]);
    setVisible(true);
  };

  return (
    <div className="projects" id='Projects'>
      {popups.map((message, index) => (
        <Popup key={index} message={message} onClose={() => handleClose(index)} />
      ))}
      <div className="box-container">
        <Box
          label="Web Dev Project"
          color="#0081a7"
          onClick={() =>
            handleClick(
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis turpis non elementum molestie. Praesent mollis hendrerit venenatis. Fusce vehicula, leo vitae tempor pulvinar, erat mi blandit diam, vitae commodo augue mi sed nibh. Vestibulum ullamcorper molestie enim non pharetra. Morbi at nibh magna. In ac nibh nulla. Nam varius mi at felis egestas luctus. Proin dui mauris, scelerisque molestie porta in, blandit sed eros. Nulla fermentum a libero nec aliquet. Aliquam vehicula vel mauris in malesuada. Vivamus ligula eros, fringilla sed convallis id, viverra sed justo. Etiam accumsan ullamcorper pulvinar. Vivamus suscipit libero ac lacus feugiat lacinia. Etiam vulputate dolor erat, vitae commodo mi consectetur dignissim. Ut aliquet gravida lorem, eget tempus justo scelerisque vel.'
            )
          }
          visible={visible}
        />
        <Box
          label="Vegan Duck Hunt"
          color="#00afb9"
          onClick={() => handleClick('Popup message 2')}
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
