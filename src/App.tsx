import React from 'react';
import Hero from './Components/Home/Hero/Hero';
import Project from './Components/Projects/Projects';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.scss';

const Home = () => <></>;
const About = () => <></>;
const Projects = () => <></>;
const Contact = () => <></>;

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
