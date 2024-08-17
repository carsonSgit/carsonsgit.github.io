import React from 'react';
import Hero from './Components/Home/Hero/Hero';
import Project from './Components/Projects/Projects';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.scss';
import Footer from './Components/Footer/Footer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/stats" element={<Experience />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
