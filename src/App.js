import React from "react";
import './App.scss';
import Header from './components/Header';
import Main from "./components/Main"
import Section from "./components/Section"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

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
