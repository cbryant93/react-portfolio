import React from "react";
import './App.scss';
import Header from './components/Header';
import Main from "./components/Main"
import Section from "./components/Section"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const API_PATH = 'http://localhost:1992/react-contact-form/api/contact/index.php';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Section/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
