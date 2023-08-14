import './styles/Projects.scss';
import React, { useRef, useState, useEffect } from 'react';
import Game from './Game';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const Box = React.forwardRef(({ label, color, onClick, visible }, ref) => (
  <div
    ref={ref}
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
));

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

function Projects({ isOpen, onToggle }) {
  const [popups, setPopups] = useState([]);
  const [visible, setVisible] = useState(true);
  const projectsRef = useRef(null);
  const boxContainerRef = useRef(null);
  const [currentBoxIndex, setCurrentBoxIndex] = useState(0);
  const boxRefs = useRef([null, null, null, null]);

  const handleNext = () => {
    if (currentBoxIndex < boxRefs.current.length - 1) {
      const nextBox = boxRefs.current[currentBoxIndex + 1];
      if (nextBox) {
        nextBox.scrollIntoView({ behavior: 'smooth' });
        setCurrentBoxIndex(currentBoxIndex + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentBoxIndex > 0) {
      const prevBox = boxRefs.current[currentBoxIndex - 1];
      if (prevBox) {
        prevBox.scrollIntoView({ behavior: 'smooth' });
        setCurrentBoxIndex(currentBoxIndex - 1);
      }
    }
  };

  const toggleSection = () => {
    onToggle();

    if (!isOpen) {
      setTimeout(() => {
        projectsRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  useEffect(() => {
    if (isOpen) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

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
      <h1 className='project-title' onClick={toggleSection}>Projects</h1>
      {popups.map((content, index) => (
        <Popup key={index} content={content} onClose={() => handleClose(index)} />
      ))}
      <div className={`box-wrapper ${isOpen ? 'buttons-visible' : ''}`}>
        <div ref={boxContainerRef} className="box-container">
          <Box
            ref={el => boxRefs.current[0] = el}
            label="Web Dev Project"
            color="#0081a7"
            onClick={() => handleClick(<h1 className='project-title'>Web project 1</h1>)}
            visible={visible}
          />
          
          <Box
            ref={el => boxRefs.current[1] = el}
            label="Vegan Duck Hunt"
            color="#00afb9"
            onClick={() => handleClick(<Game />)}
            visible={visible}
          />
          <Box
            ref={el => boxRefs.current[2] = el}
            label="Project 3"
            color="#fed9b7"
            onClick={() => handleClick('Popup message 3')}
            visible={visible}
          />
          <Box
            ref={el => boxRefs.current[3] = el}
            label="Project 4"
            color="#f07167"
            onClick={() => handleClick('Popup message 4')}
            visible={visible}
          />
        </div>
        <button className="prev-button" onClick={handlePrev}>
          <ArrowBackIcon />
        </button>

        <button className="next-button" onClick={handleNext}>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
}

export default Projects;
