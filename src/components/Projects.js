import './styles/Projects.scss';
import React, { useRef, useState, useEffect } from 'react';
import Game from './Game';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { GitHub } from "@material-ui/icons";
import webPic from './assets/og_website.png';

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

function Popup({ onClose, contentObj }) {
  return (
    <div className="popup">
      <div className="popup-content">
        <h1>{contentObj.label}</h1>
        {typeof contentObj.content === 'string' ? <p>{contentObj.content}</p> : contentObj.content}
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

  const handleToggle = () => {
    // Check if the window width is more than 1280px (desktop mode)
    if (window.innerWidth > 1024) {
      return; // Early return, no further code will be executed.
    }

    onToggle(); // Call the function passed from App to handle state change

    if (!isOpen) { // If the section was closed
      setTimeout(() => { // Wait for the transition to complete
        projectsRef.current.scrollIntoView({ behavior: 'smooth' }); // Scroll smoothly into view
      }, 300); // 300ms is the duration of your transition
    }
};



  const handleClick = (label, content) => {
    setPopups([...popups, { label, content }]);
    setVisible(false);
  };

  const handleClose = (index) => {
    setPopups([...popups.slice(0, index), ...popups.slice(index + 1)]);
    setVisible(true);
  };

  return (
    <div ref={projectsRef} className={`projects ${isOpen ? '' : 'collapsed'}`} id="Projects">
      <h1 className='project-title' onClick={handleToggle}>Projects</h1>
      {popups.map((contentObj, index) => (
        <Popup key={index} contentObj={contentObj} onClose={() => handleClose(index)} />
      ))}


      <div className={`box-wrapper ${isOpen ? 'buttons-visible' : ''}`}>
        <div ref={boxContainerRef} className="box-container">
          <Box
            ref={el => boxRefs.current[0] = el}
            label="Web Dev Project"
            color="#0081a7"
            onClick={() => handleClick(
              <div className='parent-container'>
                <div className='content-text'>
                <h1 className='popup-title'>Behind the Scenes: Building My Portfolio Website</h1>               
                <p>Job hunting in 2023 brought a fresh set of challenges. With five years of experience in my first tech job, 
                  I observed significant changes in the hiring landscape.
                   Companies hadter developed unique hiring processes, often involving tailored questions to gauge suitability.

                  Two key realisations emerged. Firstly, as a Software Development Engineer in Test (SDET), 
                  my skill set was tailored to my role at ASOS, and further diversification of skills was necessary for a broader job market. 
                  Secondly, many applications now included a section for a personal website. 
                  This realisation led me to embark on the journey of creating my own portfolio website.</p>
                <p>Find out more in my blog.</p>
                </div>
                <div className='project-info'>

                {/* <img className='project-info-image' src={webPic} alt="" /> */}

                </div>
              </div>
            )}
            visible={visible}
          />

          <Box
            ref={el => boxRefs.current[1] = el}
            label="Vegan Duck Hunt"
            color="#00afb9"
            onClick={() => handleClick(
              <div className='parent-container'>
                <div className='project-div'>
                  <h3>About the project</h3>
                  <div className='project-info'>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas condimentum lacus ac eleifend pellentesque.
                      Aenean nec rhoncus risus, et vulputate metus. Ut libero turpis, pellentesque nec elit sed, faucibus malesuada mi.
                      Cras ligula dui, luctus ac interdum vitae, malesuada vel magna. Nullam condimentum, ex vitae vestibulum ullamcorper,
                      quam magna imperdiet ex, et iaculis arcu sem ut leo. Vestibulum interdum libero augue. Nam porta vel nunc eget condimentum.
                      Integer eu ullamcorper risus. Suspendisse metus tortor, auctor id consectetur eget, sollicitudin ac sem.
                      Donec commodo blandit cursus. Aenean pharetra tristique nisl, accumsan pellentesque sapien rutrum ac.
                      Curabitur eleifend gravida purus, ac euismod diam euismod ac. Maecenas ac cursus metus.</p>

                  </div>
                  <div className='github-link'>
                    <p>
                      <span>This project is an updated version using React.</span>
                      <span> Visit the Github Link for original project:</span>
                    </p>

                    <a href="https://github.com/cbryant93/sparta-core-project-1">
                      <GitHub className="icon" />
                    </a>
                  </div>
                </div>
                <div className='game-content'>
                  <Game />
                </div>
              </div>

            )}
            visible={visible}
          />

          <Box
            ref={el => boxRefs.current[2] = el}
            label="Automation testing"
            color="#fed9b7"
            onClick={() => handleClick('Popup message 3')}
            visible={visible}
          />
          <Box
            ref={el => boxRefs.current[3] = el}
            label="Coming soon..."
            color="#f07167"
            onClick={() => handleClick('Popup message 4')}
            visible={visible}
          />
        </div>
        <div className='carousel-buttons'>
          <button className="prev-button" onClick={handlePrev}>
            <ArrowBackIcon />
          </button>

          <button className="next-button" onClick={handleNext}>
            <ArrowForwardIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
