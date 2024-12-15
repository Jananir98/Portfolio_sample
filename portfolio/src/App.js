import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import { Routes, Route } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Skills from './containers/skills';
import Resume from './containers/resume';

function App() {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
