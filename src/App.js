import React, { useState } from "react";
import './App.scss';
import Header from './components/Header';
import Main from "./components/Main"
import Section from "./components/Section"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"


function App() {
  // Define a state variable to keep track of the open section
  const [openSection, setOpenSection] = useState(null);

  // Callback to handle when a section is clicked
  const handleSectionClick = (section) => {
    setOpenSection(section === openSection ? null : section);
  };

  return (
    <div className="App">
      <Header/>
      <Main onContactClick={() => handleSectionClick('contact')} />
      <Section isOpen={openSection === 'section'} onToggle={() => handleSectionClick('section')} />
      <Skills isOpen={openSection === 'skills'} onToggle={() => handleSectionClick('skills')} />
      <Projects isOpen={openSection === 'projects'} onToggle={() => handleSectionClick('projects')} />
      <Contact isOpen={openSection === 'contact'} onToggle={() => handleSectionClick('contact')} />
    </div>
  );
}

export default App;
